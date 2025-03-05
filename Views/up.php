<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upper Portion</title>

    <style>
        .body{
            margin:0;
            width: 100vw;
            height: 150vh;
            overflow-y: auto;
            overflow-x:auto; 
        }

        .Background-Vid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh; /* Adjust height to control the upper portion */
            overflow: hidden;
            z-index: 0; /* Places video behind content */
        }

        .Back_G-Vid{
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }

        .Background-Vid::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, white 6%, transparent 20%);
            background-size: 3px 3px; /* Adjust size of dots */
            pointer-events: none; /* Allows interaction with the video */
        }

        .rectangle {
            position: absolute;
            top: 75%; /* Adjust to move up/down */
            right: -33%;
            transform: translate(-50%, -50%);
            width: 810px; /* Adjust rectangle size */
            height: 200px;
            background: rgba(0, 145, 255, 0.63); /* Semi-transparent blue */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            padding: 10px;
            
        }

        .CDM{
            position:relative;
            color:black;
            font-size: 55px;
            align-items: center;
            margin: 3px;
            font-weight: bold;
            font-family:'Montserrat';
            color:white;
            animation:slideInLeft 3s ease-out;
        }

        .CDM1{
            position:relative;
            color:black;
            font-size: 75px;
            align-items: center;
            margin:3px;
            font-weight: bold;
            font-family:'Montserrat';
            color:white;
            animation:slideInLeft 3s ease-out;
        }

        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

        @keyframes slideInLeft {
            0% { transform: translateX(-100px); opacity: 0; }
             100% { transform: translateX(0); opacity: 1; }
        }

        .More-Space{
            height:500px;
        }
      

        .StudentInfo{
            background-color: yellow;
            width: 600px;
            height: 100px;
        }




    </style>
</head>
<body>
    <div class = "Background-Vid">
        <video autoplay muted loop class = "Back_G-Vid">
            <source src = "resources/Background_VID.mp4" type = "video/mp4">
        </video>

        <div class = "rectangle">
                <h1 class = "CDM"> <b> COLEGIO DE MUNTINLUPA </b> </h1>
                <h1 class = "CDM1"> <b>INTERACTIVE MAP </b></h1>
        </div>
    </div>

