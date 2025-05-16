<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Babylon.js Building Buttons</title>
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
    <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
    <script src="https://cdn.babylonjs.com/gui/babylon.gui.min.js"></script>
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
 
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 400, new BABYLON.Vector3(-20, 10, 0), scene);
    camera.attachControl(canvas, true);
    camera.alpha += Math.PI;
 
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
 
    let  build1, build2, kiosk;
    let  buildingMeshes1 = [], buildingMeshes3 = [], buildingMeshes2 = [];
 
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
 
  // Global click - close video/image and hide buttons
scene.onPointerObservable.add((pointerInfo) => {
    if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERDOWN) {
        if (infoImage.isVisible) infoImage.isVisible = false;
 
        if (popupVideo.style.display === "block") {
            popupVideo.pause();
            popupVideo.style.display = "none";
        }
 
        // Hide the schedule buttons always when closing popups
        document.getElementById("videoButtons").style.display = "none";
    }
});
 
 
    function addButtonToMesh(mesh, label, onClick, offset = new BABYLON.Vector3(0, 25, 20), rotation = null, tooltipText = "", imageURL = "", videoURL = "") {
        const plane = BABYLON.MeshBuilder.CreatePlane(label + "Plane", { width: 10, height: 5 }, scene);
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
                infoImage.width = 0.7;
                infoImage.height = 0.7;
 
                setTimeout(() => {
                    infoImage.isVisible = false;
                }, 5000);
 
            } else if (videoURL) {
                popupVideo.querySelector("source").src = videoURL;
                popupVideo.load();
                popupVideo.style.display = "block";
                popupVideo.play();
 
                // Show the two buttons beside the video when video starts playing
                document.getElementById("videoButtons").style.display = "flex";
 
                // You can set different actions for each button dynamically
                const Add_Schedule = document.getElementById("Add_Schedule");
                const See_Schedule = document.getElementById("See_Schedule");
 
                // Example action for Button 1 (you can replace this with your custom function)
                Add_Schedule.onclick = () => {
                    console.log("Button 1 clicked for adding schedule");
                    // Add specific functionality for button 1, e.g., close video, trigger new action
                    window.location.href = "../views/Room_Schedule_editable.php";
                    document.getElementById("videoButtons").style.display = "none";
                };
 
                // Example action for Button 2 (you can replace this with your custom function)
                See_Schedule.onclick = () => {
                    console.log("Button 2 clicked for seing the sched");
                    // Add specific functionality for button 2, e.g., play another video, trigger event
                };
 
                setTimeout(() => {
                    popupVideo.pause();
                    popupVideo.style.display = "none";
                }, 50000);
            }
        });
 
        texture.addControl(button);
    }
 
        BABYLON.SceneLoader.ImportMesh("", "http://localhost/INTERACTIVE-MAP/resources/", "CDM_Building1_FINAL.glb", scene, function (meshes) {
            if (meshes.length > 0) {
                build1 = meshes[0];
                build1.position = new BABYLON.Vector3(-20, 0, 0);
                build1.scaling = new BABYLON.Vector3(-15, 15, 15);
                buildingMeshes1 = build1.getChildMeshes();
                buildingMeshes1.forEach(mesh => {
                    mesh.isPickable = true;
                    mesh.isVisible = true;
                });
 
                addButtonToMesh(build1, "Phy Lab", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, -20), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Physics \n Laboratory \n Floor: 4th \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "CSR", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, -9), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Central \n Storage Room \n Floor: 4th \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "Chm Lab", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 2), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: CHemistry \n Laboratory \n Floor: 4th \n Capacity: 40 \n", "", "../resources/Chem_Lab.mp4");
 
                addButtonToMesh(build1, "Cmp Lab1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 25), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Computer \n Laboratory 1 \n Floor: 4th \n Capacity: 40 \n", "", "../resources/Comp_Lab.mp4");
 
                addButtonToMesh(build1, "MIS", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);CHem_lab
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 31), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Management \n Information Systems \n Floor: 4th \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "Archi Draw", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 44.5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Architectural \n Drawing \n Floor: 4th \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
              
 
                addButtonToMesh(build1, "CPE1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, -22.5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: CE1 \n Floor: 3rd \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "EE2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, -13.5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: CE2 \n Floor: 3rdh \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
              
                addButtonToMesh(build1, "CE1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, -5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: CPE1 \n Floor: 3rd \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
              
                addButtonToMesh(build1, "CE2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 2), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: CPE2 \n Floor: 3rd \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
              
                addButtonToMesh(build1, "ECE1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 23), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: ECE1 \n Floor: 3rd \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
              
                addButtonToMesh(build1, "ECE2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 31), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: ECE2 \n Floor: 3rd \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "ME1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 39.5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: ME1 \n Floor: 3rd \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "ME2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 49.5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: ME2 \n Floor: 3rd \n Capacity: 40 \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "Seminar R", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, -17), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Seminar Room \n Floor: 2nd \n Capacity: -- \n", "", "../resources/Seminar.mp4");
 
                addButtonToMesh(build1, "Cmp Lab2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, -5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Computer \n Laboratory 2 \n Floor: 2nd \n Capacity: 40 \n", "", "../resources/Comp_Lab.mp4");
                camera.setTarget(build1.position);
 
                addButtonToMesh(build1, "Ext Lib", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, 2), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Extension \n Library \n Floor: 2nd \n Capacity: -- \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "Library", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, 29), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Library \n Floor: 2nd \n Capacity: -- \n", "", "../resources/Library.mp4");
 
                addButtonToMesh(build1, "AVR", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, 44.5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: AVR \n Floor: 2nd \n Capacity: -- \n", "", "../resources/Bldg.1.mp4");
 
                addButtonToMesh(build1, "Canteen", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 1, 43.5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Canteen \n Floor: 1st \n Capacity: -- \n", "", "../resources/Csnteen.mp4");
 
                addButtonToMesh(build1, "Clinic", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 1, -21.5), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Clinic \n Floor: 1st \n Capacity: -- \n", "", "../resources/Clinic.mp4");
 
                addButtonToMesh(build1, "OPC", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 1, 2), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Office of the \n College President \n Floor: 1st \n Capacity: -- \n", "", "../resources/Clinic.mp4");
 
                addButtonToMesh(build1, "OSA", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 1, -17), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Office of \n Student Affairs \n Floor: 1st \n Capacity: -- \n", "", "../resources/Clinic.mp4");
 
                addButtonToMesh(build1, "Registrar", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 1, 32), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Registrar  \n Floor: 1st \n Capacity: -- \n", "", "../resources/Clinic.mp4");
 
                addButtonToMesh(build1, "Finance", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 1, 21), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Finance \n Floor: 1st \n Capacity: -- \n", "", "../resources/Clinic.mp4");
 
                addButtonToMesh(build1, "OD/C", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 1, -10), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Office of the \n Dean and \n Chairpersons \n Floor: 1st \n", "", "../resources/Clinic.mp4");
 
                addButtonToMesh(build1, "HR?", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 1, 27), new BABYLON.Vector3(0, Math.PI/2, 0), "Room: Clinic \n Floor: 1st \n Capacity: -- \n", "", "../resources/Clinic.mp4");
 
 
 
            }
            });
 
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
 
                addButtonToMesh(build2, "Enter", function () {
                    console.log("Entered Building 2");
                    window.location.href = "building2.php";
                }, new BABYLON.Vector3(5, 25, -23));
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
        engine.runRenderLoop(() => scene.render());
    window.addEventListener("resize", () => engine.resize());
});
    
</script>
</body>
</html>