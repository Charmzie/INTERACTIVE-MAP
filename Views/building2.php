<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Colegio de Muntinlupa - Building 2</title>
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
    <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
    <script src="https://cdn.babylonjs.com/gui/babylon.gui.min.js"></script>
    <link rel="icon" type="image/x-icon" href="../resources/CDM-Logo.png">
    <style>
        html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
        canvas { width: 100%; height: 100%; display: block; }
 
        #menuToggle {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 100;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    background-color: #000080;
    color: white;
    border: none;
    border-radius: 5px;
}
 
#tripleMenu {
    position: absolute;
    top: 50px;
    left: 10px;
    display: none; /* Initially hidden */
    flex-direction: column;
    background-color: #2996ab;
    padding: 10px;
    border-radius: 10px;
    z-index: 99;
}
 
#menu-section {
    padding-top: 20px;
    margin-bottom: 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
}
 
#menu-section:last-child {
    border-bottom: none;
}
 
#menu-section:hover {
    background-color: #555;
}
 
    </style>
</head>
<body>
<canvas id="renderCanvas"></canvas>
<video id="popupVideo" width="640" height="360" controls style="display:none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10; box-shadow: 0 0 20px rgba(0,0,0,0.7); border-radius: 12px;">
    <source src="" type="video/mp4">
    Your browser does not support the video tag.
</video>
 
<!-- Add two new buttons beside the video -->
<div id="videoButtons" style="display: flex; flex-direction: column; align-items:center; position: absolute; top: 60%; left: 20%; transform: translate(-50%, -50%); z-index: 20; width: 200px; ">
    <button id="Add_Schedule" style="width: 80px; height: 40px; background-color: #000080; margin-bottom: 20px; border-radius: 10px;  color: white;">Add Schedule</button>
    <button id="See_Schedule" style="width: 80px; height: 40px; background-color: #000080; border-radius: 10px; color: white;">See Schedule</button>
</div>
 
<!-- Toggle Button -->
<button id="menuToggle">☰ Menu</button>
 
<!-- Hidden Menu -->
<div id="tripleMenu">
    <a href="Interactive_Map.php" id="menu-section">Main Interactive Map</a>
    <a href="../views/main.php" id="menu-section">Main Page</a>
</div>
 
<script>
 
const toggleButton = document.getElementById("menuToggle");
    const tripleMenu = document.getElementById("tripleMenu");
 
    toggleButton.addEventListener("click", () => {
        const isVisible = tripleMenu.style.display === "flex";
        tripleMenu.style.display = isVisible ? "none" : "flex";
    });
 
    // Optional: Hide menu when a section is clicked
    document.querySelectorAll(".menu-section").forEach(section => {
        section.addEventListener("click", () => {
            tripleMenu.style.display = "none";
        });
    });
 
window.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
 
    const skyDome = BABYLON.MeshBuilder.CreateSphere("skyDome", {
    diameter: 10000,
    segments: 32,
    slice: 0.5
}, scene);
 
// Flip inside out so you see the texture from inside
skyDome.scaling = new BABYLON.Vector3(-1, 1, 1);
 
// Create material for the dome
const skyDomeMaterial = new BABYLON.StandardMaterial("skyDomeMat", scene);
skyDomeMaterial.backFaceCulling = false;
skyDomeMaterial.disableLighting = true;
skyDomeMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
skyDomeMaterial.diffuseTexture = new BABYLON.Texture("../resources/sky_sky.gif", scene);
 
skyDome.material = skyDomeMaterial;
 
 
    scene.clearColor = new BABYLON.Color4(37/255,116/255,169/255);
 
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 300, new BABYLON.Vector3(-20, 55, 0), scene);
    camera.attachControl(canvas, true);
    camera.alpha += Math.PI;
 
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
 
    let  build2, kiosk, build1;
    let  buildingMeshes2 = [], buildingMeshes3 = [], buildingMeshes1 = [];
 
    // Global Fullscreen UI and Image Popup
    const fullscreenUI = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
 
    const tooltip = new BABYLON.GUI.Rectangle();
    tooltip.width = "200px";
    tooltip.height = "120px";
    tooltip.cornerRadius = 10;
    tooltip.color = "white";
    tooltip.thickness = 2;
    tooltip.background = "white";
    tooltip.alpha = 0.85;
    tooltip.isVisible = false;
    tooltip.zIndex = 1000;
    fullscreenUI.addControl(tooltip);
 
    const tooltipTextBlock = new BABYLON.GUI.TextBlock();
    tooltipTextBlock.color = "black";
    tooltipTextBlock.fontSize = "18px";
    tooltip.addControl(tooltipTextBlock);
 
    // Tooltip follows mouse
    scene.onPointerObservable.add((pointerInfo) => {
        if (tooltip.isVisible && pointerInfo.event) {
            const pickX = pointerInfo.event.clientX;
            const pickY = pointerInfo.event.clientY;
            tooltip.left = pickX - canvas.width / 2 + "px";
            tooltip.top = pickY - canvas.height / 2 + "px";
        }
    }, BABYLON.PointerEventTypes.POINTERMOVE);
 
    // Global image popup
    const infoImage = new BABYLON.GUI.Image("infoImage", "");
    infoImage.width = "400px";
    infoImage.height = "300px";
    infoImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    infoImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    infoImage.isVisible = false;
    infoImage.zIndex = 2000;
    fullscreenUI.addControl(infoImage);
 
    // Click anywhere to close the image
    scene.onPointerObservable.add((pointerInfo) => {
        if (infoImage.isVisible && pointerInfo.type === BABYLON.PointerEventTypes.POINTERDOWN) {
            infoImage.isVisible = false;
        }
    });
 
    // Video popup logic
    const popupVideo = document.getElementById("popupVideo");
 
    scene.onPointerObservable.add((pointerInfo) => {
        if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERDOWN) {
            if (infoImage.isVisible) infoImage.isVisible = false;
 
            // Hide and pause video if open
            if (popupVideo.style.display === "block") {
                popupVideo.pause();
                popupVideo.style.display = "none";
            }
            // Hide the buttons when clicking anywhere else
            document.getElementById("videoButtons").style.display = "none";
        }
    });
 
    function addButtonToMesh(mesh, label, onClick, offset = new BABYLON.Vector3(0, 25, 20), tooltipText = "", imageURL = "", videoURL = "", rotation = null, seeScheduleURL = "") {
        const plane = BABYLON.MeshBuilder.CreatePlane(label + "Plane", {width: 10, height: 5}, scene);
        plane.parent = mesh;
        plane.position = offset;
 
        if (rotation) {
            plane.rotation = rotation;
 
            if (Math.abs(rotation.y - Math.PI / 2) < 0.01 || Math.abs(rotation.y - 3 * Math.PI / 2) < 0.01) {
                plane.scaling.x = -1;
            }
        }
 
        const texture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
        const button = BABYLON.GUI.Button.CreateSimpleButton(label + "Btn", label);
 
        button.width = 0.3;
        button.height = 0.3;
        button.color = "white";
        button.background = "#000080";
        button.fontSize = 100;
        button.fontStyle = "bold";
        button.cornerRadius = 60;
        button.thickness = 4;
        button.paddingTop = "5px";
 
        button.onPointerEnterObservable.add(() => {
            tooltipTextBlock.text = tooltipText;
            tooltip.isVisible = true;
        });
 
        button.onPointerOutObservable.add(() => {
            tooltip.isVisible = false;
        });
 
        button.onPointerUpObservable.add(() => {
            onClick();
 
            // Hide both first
            infoImage.isVisible = false;
            popupVideo.style.display = "none";
 
            if (imageURL) {
                infoImage.source = imageURL;
                infoImage.isVisible = true;
                infoImage.width = 0.9;
                infoImage.height = 0.8;
 
                setTimeout(() => {
                    infoImage.isVisible = false;
                }, 5000);
 
            } else if (videoURL) {
                popupVideo.querySelector("source").src = videoURL;
                popupVideo.load();
                popupVideo.style.color = "white";
                popupVideo.style.display = "block";
                popupVideo.play();
 
                // Show the two buttons beside the video when video starts playing
             document.getElementById("videoButtons").style.display = "flex";
 
                // You can set different actions for each button dynamically
                const Add_Schedule = document.getElementById("Add_Schedule");
                const See_Schedule = document.getElementById("See_Schedule");
 
                // Example action for Button 1 (you can replace this with your custom function)
                Add_Schedule.onclick = () => {
                window.location.href = "../views/Room_Schedule_editable.php";
                document.getElementById("videoButtons").style.display = "none";
            };

            See_Schedule.onclick = () => {
                if (seeScheduleURL) {
                    window.location.href = seeScheduleURL;
                } else {
                    console.log("No URL defined for See Schedule.");
                }
                document.getElementById("videoButtons").style.display = "none";
            };

 
                setTimeout(() => {
                    popupVideo.pause();
                    popupVideo.style.display = "none";
                    document.getElementById("videoButtons").style.display = "none";
                }, 50000);
            }
        });
 
        texture.addControl(button);
    }
 
 
    BABYLON.SceneLoader.ImportMesh("", "http://localhost/INTERACTIVE-MAP/resources/", "CDM_Building2_FINAL.glb", scene, function (meshes) {
        if (meshes.length > 0) {
            build2 = meshes[0];
            build2.position = new BABYLON.Vector3(-20, 0, 0);
            build2.scaling = new BABYLON.Vector3(-15, 15, 15);
            buildingMeshes2 = build2.getChildMeshes();
            buildingMeshes2.forEach(mesh => {
                mesh.isPickable = true;
                mesh.isVisible = true;
            });
 
            addButtonToMesh(build2, "613", function () {
                console.log("Entered Room 613");
                camera.setTarget(build2);
                camera.radius = 650;
            }, new BABYLON.Vector3(-13, 19, -30), "Room: 613 \n Floor: 6th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "613.php");
        
 
                addButtonToMesh(build2, "612", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 19, -30), "Room: 612 \n Floor: 6th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "612.php");
 
                addButtonToMesh(build2, "611", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 19, -30), "Room: 611 \n Floor: 6th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "611.php");
                
                addButtonToMesh(build2, "610", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 19, -30), "Room: 610 \n Floor: 6th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "610.php");
 
                addButtonToMesh(build2, "513", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-13, 15.5, -30), "Room: 513 \n Floor: 5th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "513.php");
 
                addButtonToMesh(build2, "512", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 15.5, -30), "Room: 512 \n Floor: 5th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "512.php");
 
                addButtonToMesh(build2, "511", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);  camera.radius = 650;
                }, new BABYLON.Vector3(16, 15.5, -30), "Room: 511 \n Floor: 5th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "511.php");
 
                addButtonToMesh(build2, "510", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 15.5, -30), "Room: 510 \n Floor: 5th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "510.php");
 
                addButtonToMesh(build2, "413", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-13, 12, -30), "Room: 413 \n Floor: 4th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "413.php");
 
                addButtonToMesh(build2, "412", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 12, -30), "Room: 412 \n Floor: 4th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "412.php");
 
                addButtonToMesh(build2, "411", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 12, -30), "Room: 411 \n Floor: 4th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "411.php");
 
                addButtonToMesh(build2, "410", function () {
                    console.log("Entered Room 410");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 12, -30), "Room: 410 \n Floor: 4th \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "410.php");

 
                addButtonToMesh(build2, "PT Faculty", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-13, 8, -30), "Room: Part-Time Faculty \n Floor: 3rd \n Capacity: - \n", "", "../resources/bldg2.mp4", null, "");
 
                addButtonToMesh(build2, "Robotics R.", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 8, -30), "Room: Robotics Room \n Floor: 3rd \n Capacity: - \n", "", "../resources/bldg2.mp4", null, "");
 
                addButtonToMesh(build2, "Something R.", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 8, -30), "Room: 311 \n Floor: 3rd \n Capacity: - \n", "", "../resources/bldg2.mp4", null, "");
 
                addButtonToMesh(build2, "FT Faculty", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 8, -30), "Room: Full-Time Faculty \n Floor: 3rd \n Capacity: - \n", "", "../resources/bldg2.mp4", null, "");
 
                addButtonToMesh(build2, "Something Room", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-13, 4.5, -30),"Room: 213 \n Floor: 2nd \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "");
 
                addButtonToMesh(build2, "CpE Lab.", function () {
                    console.log("Entered Room 613");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 4.5, -30),  "Room: Computer \nEngineering Laboratory \n Floor: 2nd \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "CPELab.php");
 
                addButtonToMesh(build2, "ECE Lab", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 4.5, -30), "Room: Electronics \nEngineering Laboratory \n Floor: 2nd \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "ECELab.php");
 
                addButtonToMesh(build2, "EE Lab", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 4.5, -30), "Room: Electrical \nEngineering Laboratory \n Floor: 2nd \n Capacity: 40 \n", "", "../resources/bldg2.mp4", null, "EELab.php");
 
                addButtonToMesh(build2, "CE Lab.", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-8, 1, -30), "Room: Civil \nEngineering Laboratory \n Floor: 1st \n Capacity: - \n", "", "../resources/bldg2.mp4", null, "CELab.php");
 
                addButtonToMesh(build2, "ME Lab.", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 1, -30), "Room: Mechanical \nEngineering Laboratory \n Floor: 1st \n Capacity: - \n", "", "../resources/bldg2.mp4", null, "MELab.php");
 
                addButtonToMesh(build2, "NSTP Room", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(27, 1, -30));
 
 
 
                camera.setTarget(build2.position);
            }
        });
 
        BABYLON.SceneLoader.ImportMesh("", "http://localhost/INTERACTIVE-MAP/resources/", "CDM_Building1_FINAL.glb", scene, function (meshes) {
            if (meshes.length > 0) {
                build1 = meshes[0];
                build1.position = new BABYLON.Vector3(0, -2, 0);
                build1.scaling = new BABYLON.Vector3(-15, 15, 15);
                buildingMeshes1 = build1.getChildMeshes();
                buildingMeshes1.forEach(mesh => {
                    mesh.isPickable = true;
                    mesh.isVisible = true;
                });
 
                addButtonToMesh(build1, "Enter", function () {
                    console.log("Entered Building 1");
                    window.location.href = "building1.php";
                    camera.setTarget(build1);
                    camera.radius = 80;
                }, new BABYLON.Vector3(38, 20 , 13), "", "", "", new BABYLON.Vector3(0, Math.PI/2, 0));
            }
        });
        
        BABYLON.SceneLoader.ImportMesh("", "http://localhost/INTERACTIVE-MAP/resources/", "KIOSK_NO_STAGE.glb", scene, function (meshes) {
            if (meshes.length > 0) {
                kiosk = meshes[0];
                kiosk.position = new BABYLON.Vector3(-100, -2, -560);
                kiosk.scaling = new BABYLON.Vector3(0.3, 0.4, 0.3);
 
                // Rotate the root mesh 180 degrees around Y-axis
                kiosk.rotation = new BABYLON.Vector3(0, Math.PI, 0);
 
                buildingMeshes3 = kiosk.getChildMeshes();
                buildingMeshes3.forEach(mesh => {
                    if (mesh.material) {
                        mesh.material.backFaceCulling = false;
                    }
                    mesh.isPickable = true;
                    mesh.isVisible = true;
 
                    // Also apply 180° Y-axis rotation to child meshes, in case rotation on root doesn't apply visually
                    mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0);
                });
            }
        });
 
        // Add render loop
      // Add render loop
      engine.runRenderLoop(() => scene.render());
    window.addEventListener("resize", () => engine.resize());
});
</script>
</body>
</html>
 