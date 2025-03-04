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
        }
        @font-face {
            src: url(fonts/Poppins-Bold.ttf);
            font-family: Poppins-Bold;
        }
        @font-face{
            src: url(fonts/Poppins-Regular.ttf);
            font-family: Poppins-Regular;
        }
        body {
            margin: 0;
            font-family: Arial-Rounded-Mt-Bold, Arial, Helvetica, sans-serif;
            background-color: #ffffff;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        .SideNav {
            position: fixed;
            width: 18vw;
            height: 100vh;
            background-color: rgba(4, 30, 49, 1);
            top: 0vh; /* Below navbar */
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            color: white;
        }

        .SideNav img {
            width: 100px;
            margin-bottom: 10px;
        }

        .CdM, .AdminPort {
            text-align: center;
            margin-bottom: 10px;
        }

        .CdM {
            font-size: 18px;
            font-weight: bold;
        }

        .AdminPort {
            font-size: 15px;
            font-weight: 500;
        }

        .SideNav a {
            display: block;
            text-decoration: none;
            color: white;
            font-size: 15px;
            padding: 10px;
            width: 80%;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 10px;
            transition: 0.3s;
        }

        .SideNav a:hover {
            background-color: rgb(49, 220, 183, 100%);
            color:black;
        }

        .mainContent {
            margin-left: 15vw;
            padding: 20px;
            width: calc(85vw - 40px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .mainContent h1 {
            font-family: Poppins-Bold, Arial, Helvetica, sans-serif;
            font-size: 25px;
            color: #042031;
            position: absolute;
            top: 10vh; /* Start below the navbar */
            left: 18vw; /* Place to the right of the sidebar */
            margin: 0;
            padding: 10px;
        }

        .mainContent h4 {
            font-size: 18px;
            color: #000;
            position: absolute;
            top: 15vh; /* Start below the navbar */
            left: 25vw; /* Place to the right of the sidebar */
            margin: 0;
            padding: 10px;
        }

        .tableContainer {
            position: absolute;
            top: 24vh; /* Below the navbar */
            left: 30vw; /* To the right of the sidebar */
            width: auto;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            padding: 20px;
            background-color: #fff;
}

        table {
            width: 100%;
            border-collapse: collapse;

        }

        table th, table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        table th {
            background-color: #f4f4f4;
        }

        .addRowButton {
            position: relative;
            top: -33vh;
            left:-8vw;
            margin-top: 20px;
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;

        }

        .addRowButton:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <div class="UpNav"></div>

    <div class="SideNav">
        <img src="resources/CDM-Logo.png" alt="CDM Logo">
        <h1 class="CdM">COLEGIO DE MUNTINLUPA</h1>
        <h3 class="AdminPort">ADMIN PORTAL</h3>
        <a href="#Dashboard" class="Dash">Dashboard</a>
        <a href="#MyAccount" class="Acc">My Account</a>
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
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="addRowButton">ADD NEW ROW</button>
    </div>
</body>
</html>