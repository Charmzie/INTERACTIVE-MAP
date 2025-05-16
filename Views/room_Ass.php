<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Room Assignment</title>
    <link rel="icon" type="image/x-icon" href="../resources/CDM-Logo.png">
    <style>
        body {
            margin: 0;
            font-family: Arial-Rounded-Mt-Bold, Arial, Helvetica, sans-serif;
            background-color: #ffffff;
            display: flex;
            flex-direction: column; /* Stack the content vertically */
            min-height: 200vh; /* Adjust height for scrolling */
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
            margin-left: 18vw; /* Match the SideNav width */
            padding: 20px;
            width: calc(100% - 18vw);
        }
        .contentWrapper {
            display: flex;
            flex-direction: column; /* Stack elements vertically */
            gap: 20px;
            align-items: center;
            width: 100%;
        }
        .roomAssignment, .roomSchedule {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            width: 100%;
            padding: 20px;
            margin-top: 20px;
        }
        .tableContainer {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            padding: 15px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 8px;
            text-align: center;
            border-bottom: 1px solid #ddd;
            width: 50%;
        }
        select {
            width: 90%;
            padding: 4px;
            margin: 2px auto;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        select:focus {
            border-color: #20c997;
            outline: none;
        }
        .addRowButton, .saveButton {
            display: inline-block;
            margin: 10px 10px;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            border: none;
            color: white;
            transition: 0.3s;
        }
        .addRowButton {
            background-color: rgb(0, 134, 52);
        }
        .addRowButton:hover {
            background-color: #218838;
        }
        .saveButton {
            background-color: #007bff;
        }
        .saveButton:hover {
            background-color: #0056b3;
        }
        .alert {
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid transparent;
            border-radius: 4px;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
        }
        .alert-success {
            color: #155724;
            background-color: #d4edda;
            border-color: #c3e6cb;
        }
        .alert-danger {
            color: #721c24;
            background-color: #f8d7da;
            border-color: #f5c6cb;
        }
    </style>
    <script>
        function addRow() {
            let table = document.querySelector("tbody");
            let newRow = document.createElement("tr");
            
            // Get the options from the first row to clone them
            let roomOptions = document.querySelector('select[name="room_ID[]"]').innerHTML;
            let programOptions = document.querySelector('select[name="program_ID[]"]').innerHTML;
            
            newRow.innerHTML = `
            <td>
                <select name="room_ID[]">
                    ${roomOptions}
                </select>
            </td>
            <td>
                <select name="program_ID[]">
                    ${programOptions}
                </select>
            </td>`;
            table.appendChild(newRow);
        }
    </script>
</head>
<body>
    <div class="SideNav">
        <img src="../resources/CDM-Logo.png" alt="CDM Logo" width="100" height="100">
        <h1>COLEGIO DE MUNTINLUPA</h1>
        <h3>ADMIN PORTAL</h3>
        <a href="#Dashboard">Dashboard</a>
        <a href="#MyAccount">My Account</a>
        <a href="#ConductandComplianceManagement">Conduct and Compliance Management</a>
        <a href="Interactive_Map.php">Interactive Map</a>
    </div>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
        <div class="mainContent">
            <div class="contentWrapper">
                <div class="roomAssignment">
                    <img src="../resources/CDM-Logo.png" alt="CDM Logo" width="100" height="100">
                    <h1>ROOM ASSIGNATION</h1>
                    <h4>Room Assignation: Editable</h4>
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
                                        <select name="room_ID[]" required>
                                            <option value="">Select Room ID</option>
                                            <option value="410">410</option>
                                            <option value="411">411</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="program_ID[]" required>
                                            <option value="">Select Program ID</option>
                                            <option value="ENE">ENE</option>
                                            <option value="ECE">ECE</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button class="addRowButton" type="button" onclick="addRow()">ADD NEW ROW</button>
                    <button class="saveButton" name="submit" type="submit">SAVE ASSIGNMENTS</button>
                </div>
                <div class="roomSchedule">
                    <?php include 'Room_Schedule_editable.php'; ?>
                </div>
            </div>
        </div>
    </form>
</body>
</html>