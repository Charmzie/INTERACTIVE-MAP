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

        const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 300, new BABYLON.Vector3(0, 100, 0), scene);
        camera.attachControl(canvas, true);

        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        let build1, build2;
        let buildingMeshes1 = [], buildingMeshes2 = [];

        function addButtonToMesh(mesh, label, onClick, offset = new BABYLON.Vector3(0, 25, 20)) {
            const plane = BABYLON.MeshBuilder.CreatePlane(label + "Plane", {width: 10, height: 5}, scene);
            plane.parent = mesh;
            plane.position = offset;

            const texture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
            const button = BABYLON.GUI.Button.CreateSimpleButton(label + "Btn", label);

            // Customizations
            button.width = 1;
            button.height = 0.5;
            button.color = "white";
            button.background = "#1E90FF"; // DodgerBlue
            button.fontSize = 200;
            button.fontStyle = "bold";
            button.cornerRadius = 10;
            button.thickness = 4;
            button.paddingTop = "5px";

            button.onPointerUpObservable.add(onClick);
            texture.addControl(button);
        }

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
                    camera.setTarget(build1);
                    camera.radius = 80;
                }, new BABYLON.Vector3(50, 25, 20));
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
                    // Load another web page in the same tab
                    window.location.href = "building2.php";
                }, new BABYLON.Vector3(5, 25, -23));
            }
        });

        engine.runRenderLoop(() => scene.render());
        window.addEventListener("resize", () => engine.resize());
    });
</script>
</body>
</html>