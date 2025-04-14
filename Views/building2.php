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
<script>
    window.addEventListener("DOMContentLoaded", function () {
        const canvas = document.getElementById("renderCanvas");
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);

        // Much more zoomed out camera (radius 500 instead of 250)
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI/2, Math.PI/3, 500, new BABYLON.Vector3(-20, 0, 0), scene);
        camera.attachControl(canvas, true); // Allow user control
        
        // Set camera limits for better user experience
        camera.lowerRadiusLimit = 50;   // Minimum zoom
        camera.upperRadiusLimit = 1000; // Significantly increased maximum zoom
        camera.wheelPrecision = 10;     // More precise zooming

        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        let build2;
        let buildingMeshes2 = [];

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
                
                // Initialize view to focus on the building
                camera.setTarget(build2.position);
            }
        });

        // Add render loop
        engine.runRenderLoop(() => scene.render());
        window.addEventListener("resize", () => engine.resize());
    });
</script>
</body>
</html>