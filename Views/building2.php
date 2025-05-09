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
    </style>
</head>
<body>
<canvas id="renderCanvas"></canvas>
<video id="popupVideo" width="640" height="360" controls style="display:none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10; box-shadow: 0 0 20px rgba(0,0,0,0.7); border-radius: 12px;">
    <source src="" type="video/mp4">
    Your browser does not support the video tag.
</video>

<script>
window.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 400, new BABYLON.Vector3(-20, 10, 0), scene);
    camera.attachControl(canvas, true);
    camera.alpha += Math.PI;

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    let  build2, kiosk;
    let  buildingMeshes2 = [], buildingMeshes3 = [];

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
        }
    });

    function addButtonToMesh(mesh, label, onClick, offset = new BABYLON.Vector3(0, 25, 20), tooltipText = "", imageURL = "", videoURL = "") {
        const plane = BABYLON.MeshBuilder.CreatePlane(label + "Plane", { width: 10, height: 5 }, scene);
        plane.parent = mesh;
        plane.position = offset;

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

                setTimeout(() => {
                    popupVideo.pause();
                    popupVideo.style.display = "none";
                }, 5000);
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
                }, new BABYLON.Vector3(-13, 19, -30), "Room: 613 \n Floor: 6th \n Capacity: 40 \n", "../resources/Left_Pic.jpg");

                addButtonToMesh(build2, "612", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 19, -30), "Room: 612 \n Floor: 6th \n Capacity: 40 \n", "../resources/Right_Pic.png");

                addButtonToMesh(build2, "611", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 19, -30), "Room: 611 \n Floor: 6th \n Capacity: 40 \n", "", "../resources/Background_VID.mp4");
                
                addButtonToMesh(build2, "610", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 19, -30), "Room: 610 \n Floor: 6th \n Capacity: 40 \n");

                addButtonToMesh(build2, "513", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-13, 15.5, -30), "Room: 513 \n Floor: 5th \n Capacity: 40 \n");

                addButtonToMesh(build2, "512", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 15.5, -30), "Room: 512 \n Floor: 5th \n Capacity: 40 \n");

                addButtonToMesh(build2, "511", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 15.5, -30), "Room: 511 \n Floor: 5th \n Capacity: 40 \n");

                addButtonToMesh(build2, "510", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 15.5, -30), "Room: 510 \n Floor: 5th \n Capacity: 40 \n");

                addButtonToMesh(build2, "413", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-13, 12, -30), "Room: 413 \n Floor: 4th \n Capacity: 40 \n");

                addButtonToMesh(build2, "412", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 12, -30), "Room: 412 \n Floor: 4th \n Capacity: 40 \n");

                addButtonToMesh(build2, "411", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 12, -30), "Room: 411 \n Floor: 4th \n Capacity: 40 \n");

                addButtonToMesh(build2, "410", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 12, -30), "Room: 410 \n Floor: 4th \n Capacity: 40 \n");

                addButtonToMesh(build2, "PT Faculty", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-13, 8, -30), "Room: Part-Time Faculty \n Floor: 3rd \n Capacity: - \n");

                addButtonToMesh(build2, "Robotics R.", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 8, -30), "Room: Robotics Room \n Floor: 3rd \n Capacity: - \n");

                addButtonToMesh(build2, "Something R.", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 8, -30), "Room: 311 \n Floor: 3rd \n Capacity: - \n");

                addButtonToMesh(build2, "FT Faculty", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 8, -30), "Room: Full-Time Faculty \n Floor: 3rd \n Capacity: - \n");

                addButtonToMesh(build2, "Something Room", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-13, 4.5, -30),"Room: 213 \n Floor: 2nd \n Capacity: 40 \n");

                addButtonToMesh(build2, "CpE Lab.", function () {
                    console.log("Entered Room 613");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-6, 4.5, -30),  "Room: Computer \nEngineering Laboratory \n Floor: 2nd \n Capacity: 40 \n");

                addButtonToMesh(build2, "ECE Lab", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 4.5, -30), "Room: Electronics \nEngineering Laboratory \n Floor: 2nd \n Capacity: 40 \n");

                addButtonToMesh(build2, "EE Lab", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(22.5, 4.5, -30), "Room: Electrical \nEngineering Laboratory \n Floor: 2nd \n Capacity: 40 \n");

                addButtonToMesh(build2, "CE Lab.", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(-8, 1, -30), "Room: Civil \nEngineering Laboratory \n Floor: 1st \n Capacity: - \n");

                addButtonToMesh(build2, "ME Lab.", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(16, 1, -30), "Room: Mechanical \nEngineering Laboratory \n Floor: 1st \n Capacity: - \n");

                addButtonToMesh(build2, "NSTP Room", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build2);
                    camera.radius = 650;
                }, new BABYLON.Vector3(27, 1, -30));
                // Initialize view to focus on the building
                camera.setTarget(build2.position);
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