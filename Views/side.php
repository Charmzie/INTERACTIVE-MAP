
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

        .SideNav {
            position: fixed;
            width: 18vw;
            height: 100vh;
            background-color: #041E31;
            top: 0vh; 
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            color: white;
        }
        .logo-container {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            padding: 0px;
            text-align: left;
        }
        .text-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            padding: 0px;
        
        }

        .CDMLogo {
            width: 60px;
            height: 60px;
            margin-right: 5px;
        }

        .MainMenu {
            text-align: center;
            letter-spacing: 0px;
            font-family: Poppins-Bold, Arial, sans-serif
        }

        .Colegio_De_Muntinlupa {
            font-family:Poppins-Bold, Arial, sans-serif;
            font-size: 18px;
            font-weight: bold;
            margin: 10px;
            text-align:left;

        }

        .Admin_Port {
            font-family:Poppins-Bold, Arial, sans-serif;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 10px;
            text-align: left;

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

    <div class="SideNav">
        <div class="logo-container">
            <img class="CDMLogo" src="resources/CDM-Logo.png" alt="CDM Logo">
            <div class="text-container">
                <h1 class="Colegio_De_Muntinlupa">COLEGIO DE MUNTINLUPA</h1>
                <h3 class="Admin_Port">ADMIN PORTAL</h3>
            </div>
        </div>
        <h4 class="MainMenu">Main Menu</h4>  
        <a href="#Dashboard" class="nav-link">Dashboard</a>
        <a href="#MyAccount" class="nav-link">My Account</a>

    </div>


