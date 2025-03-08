<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Room Assignment</title>
    <style>
        @font-face {
            src: url(fonts/arialroundedmtbold.ttf);
            font-family: Arial-Rounded-Mt-Bold;
            $font = 'path/to/arial-rounded-mt-bold.ttf';
        }
        @font-face {
            src: url(fonts/arialroundedmtbold.ttf);
            font-family: Arial-Rounded-Mt-Bold;
            $font = 'path/to/arial-rounded-mt-bold.ttf';
        }
        @font-face{
            src: url(fonts/arialroundedmtbold.ttf);
            font-family: Arial-Rounded-Mt-Bold;
            $font = 'path/to/arial-rounded-mt-bold.ttf';
        }
        body {
            margin: 0;
            font-family: Arial-Rounded-Mt-Bold, Arial, Helvetica, sans-serif;
            background-color: #ffffff;
            display: flex;
            height: 100vh;
            overflow: auto;
        }

        .SideNav {
            position: fixed;
            width: 18vw;
            height: 100vh;
            background-color: rgba(4, 30, 49, 1);
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            color: white;
        }

        .SideNav h1, .SideNav h3 {
            text-align: center;
        }

        .SideNav a {
            text-decoration: none;
            color: white;
            padding: 10px;
            width: 80%;
            text-align: center;
            margin-top: 10px;
            display: block;
            border-radius: 5px;
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        .SideNav a:hover {
            background-color: #20c997;
            color: black;
        }

        .mainContent {
            src: url(fonts/arialroundedmtbold.ttf);
            font-family: Arial-Rounded-Mt-Bold;
            $font = 'path/to/arial-rounded-mt-bold.ttf';
            margin-left: 20vw;
            padding: 20px;
            flex-grow: 1;
            overflow-y: auto;
            max-height: 100vh;
        }

        .tableContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50vw;
            margin: auto;
            margin-top: 10vh;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            background-color: #fff;
            max-height: 60vh; 
            overflow-y: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
        }

        th, td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }

        th {
            font-weight: bold;
        }

        select {
            width: 100%;
            padding: 5px;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-color: white;
            border: 1px solid #ccc;
            cursor: pointer;
        }

        select:focus {
            border-color: #20c997;
            outline: none;
        }

        select option {
            padding: 5px;
        }

        .addRowButton {
            display: block;
            margin: 20px auto;
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s;
            position: relative;
            left: -20px;

        }

        .addRowButton:hover {
            background-color: #218838;
        }
    </style>
    <script>
        function addRow() {
            let table = document.querySelector("tbody");
            let newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>
                    <select>
                        <option value="">Select Room ID</option>
                        <option value="410">410</option>
                        <option value="411">411</option>
                        <option value="412">412</option>
                        <option value="413">413</option>
                        <option value="510">510</option>
                        <option value="511">511</option>
                        <option value="512">512</option>
                        <option value="513">513</option>
                        <option value="610">610</option>
                        <option value="611">611</option>
                        <option value="612">612</option>
                        <option value="613">613</option>
                        <option value="CE1">410</option>
                        <option value="CE2">411</option>
                        <option value="CPE1">412</option>
                        <option value="DRAWING ROOM">DRAWING ROOM</option>
                        <option value="ECE1">ECE1</option>
                        <option value="ECE2">ECE2</option>
                        <option value="EE2">EE2</option>
                        <option value="ME1">ME1</option>
                        <option value="ME2">ME2</option>
                        <option value="MULTI-PURPOSE HALL">MULTI-PURPOSE HALL</option>
                        <option value="ONLINE">ONLINE</option>
                        <option value="TBA">TBA</option>
                        <option value="AVR">AVR</option>
                        <option value="SEMINAR ROOM">SEMINAR ROOM</option>
                        <option value="CE Laboratory">CE Laboratory</option>
                        <option value="Chemistry Laboratory">Chemistry Laboratory</option>
                        <option value="Computer Laboratory 1">Computer Laboratory 1</option>
                        <option value="Computer Laboratory 2">Computer Laboratory 2</option>
                        <option value="CPE Laboratory">CPE Laboratory</option>
                        <option value="EE Laboratory">EE Laboratory</option>
                        <option value="ECE Laboratory">ECE Laboratory</option>
                        <option value="ME Laboratory">ME Laboratory</option>
                        <option value="Physics Laboratory">Physics Laboratory</option> 
                    </select>
                </td>
                <td>
                    <select>
                        <option value="">Select Program ID</option>
                        <option value="ENE">ENE</option>
                        <option value="ECE">ECE</option>
                        <option value="EE">EE</option>
                        <option value="IE">IE</option>
                        <option value="Ar">Ar</option>
                        <option value="ME">ME</option>
                        <option value="CPE">CPE</option>
                        <option value="CE">CE</option>
                    </select>
                </td>`;
            table.appendChild(newRow);
        }
    </script>
</head>
<body>
    <div class="SideNav">
        <img src="resources/CDM-Logo.png" alt="CDM Logo">
        <h1>COLEGIO DE MUNTINLUPA</h1>
        <h3>ADMIN PORTAL</h3>
        <a href="#Dashboard">Dashboard</a>
        <a href="#MyAccount">My Account</a>
        <a href="#ConductandComplianceManagement">Conduct and Compliance Management</a>
        <a href="#InteractiveMap">Interactive Map</a>

    </div>
    <div class="mainContent">
    <h1>ROOM ASSIGNATION</h1>
    <h4>Room Assignation: Editable </h4>

    <div class="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>ROOM ID</th>
                    <th>PROGRAM ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <select>
                            <option value="">Select Room ID</option>
                            <option value="410">410</option>
                            <option value="411">411</option>
                            <option value="412">412</option>
                            <option value="413">413</option>
                            <option value="510">510</option>
                            <option value="511">511</option>
                            <option value="512">512</option>
                            <option value="513">513</option>
                            <option value="610">610</option>
                            <option value="611">611</option>
                            <option value="612">612</option>
                            <option value="613">613</option>
                            <option value="CE1">410</option>
                            <option value="CE2">411</option>
                            <option value="CPE1">412</option>
                            <option value="DRAWING ROOM">DRAWING ROOM</option>
                            <option value="ECE1">ECE1</option>
                            <option value="ECE2">ECE2</option>
                            <option value="EE2">EE2</option>
                            <option value="ME1">ME1</option>
                            <option value="ME2">ME2</option>
                            <option value="MULTI-PURPOSE HALL">MULTI-PURPOSE HALL</option>
                            <option value="ONLINE">ONLINE</option>
                            <option value="TBA">TBA</option>
                            <option value="AVR">AVR</option>
                            <option value="SEMINAR ROOM">SEMINAR ROOM</option>
                            <option value="CE Laboratory">CE Laboratory</option>
                            <option value="Chemistry Laboratory">Chemistry Laboratory</option>
                            <option value="Computer Laboratory 1">Computer Laboratory 1</option>
                            <option value="Computer Laboratory 2">Computer Laboratory 2</option>
                            <option value="CPE Laboratory">CPE Laboratory</option>
                            <option value="EE Laboratory">EE Laboratory</option>
                            <option value="ECE Laboratory">ECE Laboratory</option>
                            <option value="ME Laboratory">ME Laboratory</option>
                            <option value="Physics Laboratory">Physics Laboratory</option>

                        </select>
                    </td>
                    <td>
                        <select>
                            <option value="">Select Program ID</option>
                            <option value="ENE">ENE</option>
                            <option value="ECE">ECE</option>
                            <option value="EE">EE</option>
                            <option value="IE">IE</option>
                            <option value="Ar">Ar</option>
                            <option value="ME">ME</option>
                            <option value="CPE">CPE</option>
                            <option value="CE">CE</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
        <button class="addRowButton" onclick="addRow()">ADD NEW ROW</button>
    </div>
</body>
</html>




