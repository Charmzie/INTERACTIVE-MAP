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

    let  build1, kiosk;
    let  buildingMeshes1 = [], buildingMeshes3 = [];

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

                setTimeout(() => {
                    popupVideo.pause();
                    popupVideo.style.display = "none";
                }, 5000);
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
                }, new BABYLON.Vector3(45, 12, -20), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "CSR", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, -9), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "Chm Lab", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 2), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "Cmp Lab1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 25), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "MIS", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 31), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "Archi Draw", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 44.5), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "Archi Draw", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 12, 45), new BABYLON.Vector3(0, Math.PI/2, 0));
              

                addButtonToMesh(build1, "CE1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, -22.5), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "CE2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, -13.5), new BABYLON.Vector3(0, Math.PI/2, 0));
              
                addButtonToMesh(build1, "CpE1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, -5), new BABYLON.Vector3(0, Math.PI/2, 0));
              
                addButtonToMesh(build1, "CpE2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 2), new BABYLON.Vector3(0, Math.PI/2, 0));
              
                addButtonToMesh(build1, "EE1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 23), new BABYLON.Vector3(0, Math.PI/2, 0));
              
                addButtonToMesh(build1, "EE2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 31), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "ME1", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 39.5), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "ME2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 8.5, 49.5), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "Seminar R", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, -17), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "Cmp Lab2", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, -5), new BABYLON.Vector3(0, Math.PI/2, 0));
                camera.setTarget(build1.position);

                addButtonToMesh(build1, "Ext Lib", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, 2), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "Library", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, 29), new BABYLON.Vector3(0, Math.PI/2, 0));

                addButtonToMesh(build1, "AVR", function () {
                    console.log("Entered Building 1");
                    camera.setTarget(build1);
                    camera.radius = 650;
                }, new BABYLON.Vector3(45, 5, 44.5), new BABYLON.Vector3(0, Math.PI/2, 0));

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