<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Info</title>
    <style>
        body {
            margin: 0;
            width: 100vw;
            height: 150vh; 
            overflow-y: auto;
            overflow-x: auto;
            background-color: #f4f4f4;
        }

        .UpNav {
            position: fixed;
            width: 100vw;
            height: 10vh;
            background-color: rgba(4, 30, 39, 1);
            top: 0;
            left: 0;
            z-index: 1000;
        }

        .SideNav {
            position: fixed;
            width: 15vw;
            height: 100vh;
            background-color: rgba(4, 30, 39, 1);
            top: 10vh; /* Below navbar */
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            color: white;
        }

        .CDMLogo {
            width: 155px;
            height: 150px;
        }

        .CdM, .AdminPort, .MainMenu {
            text-align: center;
            letter-spacing: 2px;
        }

        .CdM {
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0;
        }

        .AdminPort {
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 10px;
        }

        .MainMenu {
            font-size: 15px;
            font-weight: 500;
            margin-top: 20px;
        }

        /* Navigation Links */
        .Dash, .Acc {
            display: block;
            font-size: 15px;
            font-weight: 400;
            text-decoration: none;
            color: white;
            margin: 10px 0;
            padding: 10px;
            width: 80%;
            text-align: center;
            border-radius: 5px;
            transition: 0.3s;
        }

        .Dash:hover, .Acc:hover {
            background-color: blue;
            color: white;
        }

    </style>
</head>
<body>

    <div class="UpNav"></div>

    <div class="SideNav">
        <img class="CDMLogo" src="resources/CDM-Logo.png" alt="CDM Logo"> 
        <h1 class="CdM">COLEGIO DE MUNTINLUPA</h1> 
        <h3 class="AdminPort">ADMIN PORTAL</h3>
        <h4 class="MainMenu">Main Menu</h4>  
        <a href="#Dashboard" class="Dash">Dashboard</a>
        <a href="#MyAccount" class="Acc">My Account</a>
    </div>


