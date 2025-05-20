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
            overflow-x:hidden;
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
 
        .SideNav {
            position: fixed;
            width: 15vw;
            height: 100vh;
            background-color: rgba(4, 30, 39, 1);
            top:0; /* Below navbar */
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
 
        .Middle {
    margin-left: 160px;
    margin-top: 120vh;  /* pushes it naturally down */
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
 
/* Middle Image + Overlay */
.Middle_Container {
    position: relative;
    width: 85%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
 
.Middle_Pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
 
.OverlayM {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 123, 255, 0.6), rgba(0, 0, 139, 0.6));
    border-radius: 10px;
}
 
/* Middle Image Text */
.MidTextUpper, .MidTextLower {
    position: absolute;
    text-align: center;
    z-index: 2;
    width: 90%;
    color: white;
}
 
.MidTextUpper {
    top: 20%;
    font-size: 4vw;
    font-weight: bold;
    letter-spacing: 2px;
}
 
.MidTextLower {
    top: 50%;
    font-size: 1.5vw;
    max-width: 80%;
}
 
/* Left & Right Images */
.Lower_Images {
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
}
 
.Left_Container, .Right_Container {
    position: relative;
    width: 42%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
 
.Left_Pic, .Right_Pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
 
/* Overlays */
.OverlayL {
    background: linear-gradient(to bottom, rgba(255, 0, 0, 0.6), rgba(139, 0, 0, 0.6));
}
.OverlayR {
    background: linear-gradient(to bottom, rgba(255, 255, 0, 0.6), rgba(204, 204, 0, 0.6));
}
.OverlayL, .OverlayR {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
 
/* Text */
.LeftTextUpper, .RightTextUpper, .LeftTextLower, .RightTextLower {
    position: absolute;
    text-align: center;
    z-index: 2;
    color: white;
    width: 90%;
}
 
.LeftTextUpper, .RightTextUpper {
    top: 15%;
    font-size: 3vw;
    font-weight: bold;
    letter-spacing: 1px;
}
 
.LeftTextLower, .RightTextLower {
    top: 50%;
    font-size: 1.4vw;
}
 
/* Button */
.ReadM_Stud {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #0044cc;
    color: white;
    font-size: 1.2vw;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 2;
}
 
.ReadM_Stud:hover {
    background-color: #002a80;
    transform: translateX(-50%) scale(1.05);
}
 
.ReadM_Stud:active {
    transform: translateX(-50%) scale(0.98);
}
 
/* RESPONSIVE MEDIA QUERIES — adjust margin instead of top */
@media(max-width:900px){
    .Middle {
        margin-left: 200px;
        margin-top: 130vh;
    }
}
@media(max-width:800px){
    .Middle {
        margin-left: 220px;
        margin-top: 180vh;
    }
}
@media(max-width:700px){
    .Middle {
        margin-left: 230px;
        margin-top: 200vh;
    }
}
@media(max-width:500px){
    .Middle {
        margin-left: 250px;
        margin-top: 250vh;
    }
}
 
    </style>
</head>
<body>
    <div class = "Background-Vid">
        <video autoplay muted loop class = "Back_G-Vid">
            <source src = "../resources/Background_VID.mp4" type = "video/mp4">
        </video>
 
        <div class = "rectangle">
                <h1 class = "CDM"> <b> COLEGIO DE MUNTINLUPA </b> </h1>
                <h1 class = "CDM1"> <b>INTERACTIVE MAP </b></h1>
        </div>
    </div>
 
    <div class="SideNav">
        <img class="CDMLogo" src="../resources/CDM-Logo.png" alt="CDM Logo">
        <h1 class="CdM">COLEGIO DE MUNTINLUPA</h1>
        <h3 class="AdminPort">ADMIN PORTAL</h3>
        <h4 class="MainMenu">Main Menu</h4>  
        <a href="../Views/middle.php" class="Dash">Dashboard</a>
        <a href="#MyAccount" class="Acc">My Account</a>
    </div>
 
    <div class="Middle">
    <!-- Middle Image -->
    <div class="Middle_Container">
        <img src="../resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Colegio De Muntinlupa Buildings </h1>
        <h4 class = "MidTextLower"> A state-of-the-art facility designed to support diverse academic and administrative needs </h4>
        <a href = "../Views/Interactive_Map.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>   
    </div>
 
    <!-- Left & Right Images -->
    <div class="Lower_Images">
        <div class="Left_Container">
            <img src="../resources/Left_Pic.jpg" class="Left_Pic" alt="Left Image">
            <div class="OverlayL"></div>
            <h1 class = "LeftTextUpper"> Enrolled Students per Program </h1>
            <h4 class = "LeftTextLower"> Comprehensive tracking of student enrollment across all academic programs </h4>
            <a href = "../Views/student_info.php">
             <button class = "ReadM_Stud"> View More </button>
            </a>
        </div>
 
        <div class="Right_Container">
            <img src="../resources/Right_Pic.png" class="Right_Pic" alt="Right Image">
            <div class="OverlayR"></div>
            <h1 class = "RightTextUpper"> Room Assignment </h1>
            <h4 class = "RightTextLower"> Efficient allocation of classrooms based on schedules and capacity requirements </h4>
            <a href = "../Views/Room_Schedule_editable.php">
                <button class = "ReadM_Stud"> View More </button>
            </a>
        </div>
    </div>
</div>