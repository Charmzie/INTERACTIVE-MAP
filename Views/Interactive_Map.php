<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Colegio De Muntinlupa Buildings-3D Model</title>
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
    <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
    <script src="https://cdn.babylonjs.com/gui/babylon.gui.min.js"></script>
    <link rel="icon" type="image/x-icon" href="../resources/CDM-Logo.png">
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
 
        // Create sky dome (half-sphere)
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
 
        const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 300, new BABYLON.Vector3(0, 100, 0), scene);
        camera.attachControl(canvas, true);
 
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
 
        let build1, build2, kiosk;
        let buildingMeshes1 = [], buildingMeshes2 = [], buildingMeshes3 = [];
 
        function addButtonToMesh(mesh, label, onClick, offset = new BABYLON.Vector3(0, 25, 20), rotation = null) {
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
                    window.location.href = "building1.php";
                    camera.setTarget(build1);
                    camera.radius = 80;
                }, new BABYLON.Vector3(35, 20 , 13), new BABYLON.Vector3(0, Math.PI / 2, 0));
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
 
                kiosk.rotation = new BABYLON.Vector3(0, Math.PI, 0);
 
                buildingMeshes3 = kiosk.getChildMeshes();
                buildingMeshes3.forEach(mesh => {
                    if (mesh.material) {
                        mesh.material.backFaceCulling = false;
                    }
                    mesh.isPickable = true;
                    mesh.isVisible = true;
 
                    mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0);
                });
            }
        });
 
        engine.runRenderLoop(() => scene.render());
        window.addEventListener("resize", () => engine.resize());
    });
</script>
</body>
</html>