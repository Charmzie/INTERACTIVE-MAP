<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Info</title>
</head>
<style>

    .body{
        margin:0px;
        width:100vw;
        height:150vh; 
        overflow-y: auto;
        overflow-x:auto; 
    }

    .UpNav{
        position:fixed;
        width:100vw;
        height:10vh;
        background-color: rgba(4, 30, 39);
        object-fit:cover;
        z-index:1;
        top:0px;
        left:0px;
        

    }
    .SideNav{
        position:fixed;
        width: 25vw;
        height:100vh;
        background-color: rgba(4, 30, 39);
        object-fit:cover;
        z-index:1;
        top:0px;
        left:0px;
        justify-content:center; 

    }

    .CDMLogo{
        position: relative;
        width: 200px;
        height: 200px;
        top:100px;
        left: 50px;
    }

    .CdM{
        color:white;
        top: 70px;
        position: relative;
        font-size:30px;
        font-weight: 10px;
        letter-spacing: 2px;
        text-align:center;
    }

    .AdminPort{
        color:white;
        top: 60px;
        position: relative;
        font-size:20px;
        font-weight: 10px;
        letter-spacing: 2px;
        text-align:center;
    }

    .MainMenu{
        color:white;
        top: 60px;
        position: relative;
        font-size:15px;
        font-weight: 10px;
        letter-spacing: 2px;
        text-align:center;
    }

    .Dash, .Acc {
        color: white;
        position: relative;
        font-size: 15px;
        font-weight: 200; /* Lighter text */
        letter-spacing: 2px;
        text-align: center;
        text-decoration: none;
        }

    .MainMenu { top: 100px; }
    .Dash { top: 130px; }
    .Acc { top: 160px; }


   .SideNav a:hover {
        color:blue;
        }


 
</style>
<body>
<div class = "UpNav" >
    <div class = "SideNav">
        <img class = "CDMLogo" src = "resources/CDM-Logo.png" type = "png"> 
        <h1 class = "CdM"> COLEGIO DE MUNTINLUPA </h1> 
        <h3 class = "AdminPort"> ADMIN PORTAL </h3>
        <a href = "#MainMenu" class = "MainMenu"> Main Menu </h4>  
        <a href = "#Dashboard" class = "Dash"> DashBoard </a>
        <a href = "#MyAccount" class = "Acc"> My Acount </a>
    </div>

    <p> ahdjkahdjkahdkjashdkahdkahdkjasd </p>
</div>

</body>
</html>