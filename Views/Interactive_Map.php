<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Babylon.js GLB Loader with Click Zoom</title>
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
    <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
    <style>
        html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
        canvas { width: 100%; height: 100%; display: block; }
    </style>
</head>
<body>
    <canvas id="renderCanvas"></canvas>

    <script>
        window.addEventListener("DOMContentLoaded", function () {
            const canvas = document.getElementById("renderCanvas");
            const engine = new BABYLON.Engine(canvas, true);
            const scene = new BABYLON.Scene(engine);

            // Camera
            const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 20, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);

            // Lights
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 1;

            const directionalLight = new BABYLON.DirectionalLight("dirLight", new BABYLON.Vector3(-1, -2, -1), scene);
            directionalLight.intensity = 2;

            let loadedModel = null;  // Store model reference

            // Load the GLB Model
            BABYLON.SceneLoader.ImportMesh("", "http://localhost/INTERACTIVE-MAP/resources/", "CDM_Building1_and2_FINAL.glb", scene, function (meshes) {
                if (meshes.length > 0) {
                    loadedModel = meshes[0];  
                    loadedModel.position = new BABYLON.Vector3(0, -2, 0);  // Move model down
                    loadedModel.scaling = new BABYLON.Vector3(5, 5, 5);  // Scale up
                    loadedModel.rotation.y = Math.PI / 2;  // Rotate

                    console.log("GLB Model Loaded Successfully", meshes);
                } else {
                    console.error("GLB Model Loaded, but no meshes found!");
                }
            }, null, function (scene, message) {
                console.error("Error Loading GLB:", message);
            });

            // Click to Zoom Functionality
            scene.onPointerObservable.add((eventData) => {
                if (eventData.type === BABYLON.PointerEventTypes.POINTERPICK) {
                    const pickedMesh = eventData.pickInfo.pickedMesh;

                    if (pickedMesh && loadedModel && loadedModel.getChildMeshes().includes(pickedMesh)) {
                        // Smooth transition to zoom in on clicked mesh
                        BABYLON.Animation.CreateAndStartAnimation(
                            "zoomIn",
                            camera,
                            "radius",
                            60,
                            30,
                            camera.radius,
                            8,  // Zoom-in distance
                            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                        );

                        // Set camera to focus on clicked object
                        camera.setTarget(pickedMesh.position.clone());
                    }
                }
            }, BABYLON.PointerEventTypes.POINTERPICK);

            // Render Loop
            engine.runRenderLoop(() => scene.render());

            // Handle Resize
            window.addEventListener("resize", () => engine.resize());
        });
    </script>
</body>
</html>
