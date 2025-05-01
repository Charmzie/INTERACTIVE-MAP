<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Room Assignment</title>
    <style>
        body {
            margin: 0;
            font-family: Arial-Rounded-Mt-Bold, Arial, Helvetica, sans-serif;
            background-color: #ffffff;
            display: flex;
            height: 200vh;
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
        .contentWrapper {
            display: flex;
            gap: 20px;
            justify-content: space-between;
            width: 100%;
        }
        .roomAssignment, .roomSchedule {
            flex: 1;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .tableContainer {
        width: 100%;
        max-width: 400px; /* Reduced from previous width */
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
        width: 50%; /* Make columns equal width */
    }

    select {
        width: 90%; /* Slightly smaller than cell width */
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
        select option {
            padding: 5px;
        }
        .addRowButton {
            display: inline-block;
            margin: 20px 10px;
            background-color:rgb(0, 134, 52);
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s;
    }
        .addRowButton:hover {
            background-color: #218838;
        }
        .saveButton {
            display: inline-block;
            margin: 20px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s;
        }
        .saveButton:hover {
            background-color: #0056b3;
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
                    <option value="CE1">CE1</option>
                    <option value="CE2">CE2</option>
                    <option value="CPE1">CPE1</option>
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
        function saveAssignments() {
            const rows = document.querySelectorAll("tbody tr");
            let formData = new FormData();
            let hasData = false;

            rows.forEach((row, index) => {
                const roomId = row.querySelector("td:first-child select").value;
                const programId = row.querySelector("td:last-child select").value;
                
                if (roomId && programId) {
                    formData.append(`assignments[${index}][room_id]`, roomId);
                    formData.append(`assignments[${index}][program_id]`, programId);
                    hasData = true;
                }
            });

            if (!hasData) {
                alert("Please fill in at least one room assignment.");
                return;
            }

            fetch('save_room_assignments.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Room assignments saved successfully!");
                } else {
                    alert("Error: " + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error saving assignments. Please try again.");
            });
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
                                <option value="CE1">CE1</option>
                                <option value="CE2">CE2</option>
                                <option value="CPE1">CPE1</option>
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
        <button class="addRowButton" onclick="addRow()">ADD NEW ROW</button>
        <button class="saveButton" onclick="saveAssignments()">SAVE ASSIGNMENTS</button>
    </div>
    <div class="roomSchedule">
                <?php include 'Room_Schedule_editable.php'; ?>
    </div>

    <script>
        
    </script>
    
</body>
</html>