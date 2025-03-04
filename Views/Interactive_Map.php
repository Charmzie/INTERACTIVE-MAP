<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Babylon.js Scene</title>
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
</head>
<body>
    <canvas id="renderCanvas"></canvas> <!-- This is required -->

    <script>
        // Get the canvas element
        var canvas = document.getElementById("renderCanvas");

        // Create the Babylon.js engine
        var engine = new BABYLON.Engine(canvas, true);

        // Function to create the scene
        var createScene = function () {
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.attachControl(canvas, true);

            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 0.7;

            var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
            sphere.position.y = 1;

            var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

            return scene;
        };

        // Create the scene and start rendering
        var scene = createScene();
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Resize the engine when the window is resized
        window.addEventListener("resize", function () {
            engine.resize();
        });
    </script>
