<head>
<title>Student's Information</title>
<link rel="icon" type="image/x-icon" href="../resources/CDM-Logo.png">

<style>
    html, body {
    position:fixed;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100vw;
}
/* Main Container */
.Middle {
    position: relative;
    margin: 0;
    left: 230px;
    top: 120px;
    width: 65vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:Left;
}
.Middle_Container {
    position: relative;
    top:60px;
    width: 18vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 14px 8px 16px 1px rgba(0, 117, 196);
    border-radius: 10px;
}

.Middle_Container1 {
    position: relative;
    top:-110px;
    left:260px;
    width: 18vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 14px 8px 16px 1px rgba(0, 117, 196);
    border-radius: 10px;
}

.Middle_Container2 {
    position: relative;
    top:-280px;
    left:520px;
    width: 18vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 14px 8px 16px 1px rgba(0, 117, 196);
    border-radius: 10px;
}

.Middle_Container3 {
    position: relative;
    top:-449px;
    left:780px;
    width: 18vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 14px 8px 16px 1px rgba(0, 117, 196);
    border-radius: 10px;
}

.Middle_Container4 {
    position: relative;
    top:-370px;
    width: 18vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 14px 8px 16px 1px rgba(0, 117, 196);
    border-radius: 10px;
}

.Middle_Container5 {
    position: relative;
    top:-540px;
    left:260px;
    width: 18vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 14px 8px 16px 1px rgba(0, 117, 196);
    border-radius: 10px;
}

.Middle_Container6 {
    position: relative;
    top:-710px;
    left:520px;
    width: 18vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 14px 8px 16px 1px rgba(0, 117, 196);
    border-radius: 10px;
}


.Middle_Pic {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 10px;
}

.OverlayM {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 123, 255, 0.6), rgba(0, 0, 139, 0.6));
    z-index: 1;
    border-radius: 10px;
}

/* Middle Image Text */
.MidTextUpper, .MidTextLower {
    position: absolute;
    color: white;
    text-align: center;
    z-index: 2;
    width: 90%;
}

.MidTextUpper {
    top: 15%;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 3px;
}

.MidTextLower {
    top: 27%;
    font-size: 20px;
    max-width: 80%;
    letter-spacing: 3px;
}

.ReadM_Stud {
    position: absolute;
    bottom: 15px; /* Positions it near the bottom of the container */
    left: 50%;
    transform: translateX(-50%); /* Centers horizontally */
    padding: 12px 25px;
    background-color: #0044cc; /* Deep blue */
    color: white;
    font-size: 12px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index:2;
}

/* Hover Effect */
.ReadM_Stud:hover {
    background-color: #002a80; /* Darker blue */
    transform: translateX(-50%) scale(1.05); /* Slight pop effect */
}

/* Button Click Effect */
.ReadM_Stud:active {
    transform: translateX(-50%) scale(0.98);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.text_{
    position: absolute;
    font-size: 70px;
    font-weight:20px;
    letter-spacing:5px;
    left: 220px;
    top:-20px;
    animation:slideInLeft 3.5s ease-out;
    position:relative;
    animation:slideInLeft 3.5s ease-out;
    justify-content: center;
    align-items: center;
}

.Hori{
    position:relative;
    left:80px;
    top: -20px;
    width:100%;
    weight: 2px;
    height: 3px;
    background-color: black;
}



@keyframes slideInLeft {
            0% { transform: translateX(-100px); opacity: 0; }
             100% { transform: translateX(0); opacity: 1; }
        }

@font-face {
            src: url(fonts/arialroundedmtbold.ttf);
            font-family: Arial-Rounded-Mt-Bold;
        }

@font-face {
            src: url(fonts/Poppins-Bold.ttf);
            font-family: Poppins-Bold;
        }
    </style>
</head>
<body>
    <?php
        include '../Views/side1.php';
        ?>
<div class="Middle">
    
<div class = "text">
        <h1 class = "text_"> Student Profile </h1>
        <hr class = "Hori">
 </div>
    <div class="Middle_Container">
        <img src="../resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Academic Year  </h1>
        <h4 class = "MidTextLower"> 2018 - 2019</h4>
        <a href = "../Views/Student_2018_2019.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>
    </div>

  
    <div class="Middle_Container1">
        <img src="../resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Academic Year </h1>
        <h4 class = "MidTextLower"> 2019 - 2020 </h4>
        <a href = "../Views/Student_2019_2020.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>   
    </div>

    <div class="Middle_Container2">
        <img src="../resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Academic Year </h1>
        <h4 class = "MidTextLower"> 2020 - 2021 </h4>
        <a href = "../Views/Student_2020_2021.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>   
    </div>

    <div class="Middle_Container3">
        <img src="../resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Academic Year </h1>
        <h4 class = "MidTextLower"> 2021 - 2022 </h4>
        <a href = "../Views/Student_2021_2022.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>   
    </div>

    <div class="Middle_Container4">
        <img src="../resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Academic Year </h1>
        <h4 class = "MidTextLower"> 2022 - 2023 </h4>
        <a href = "../Views/Student_2022_2023.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>   
    </div>

    <div class="Middle_Container5">
        <img src="../resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Academic Year </h1>
        <h4 class = "MidTextLower"> 2023 - 2024 </h4>
        <a href = "../Views/Student_2023_2024.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>   
    </div>

    <div class="Middle_Container6">
        <img src="../resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Academic Year </h1>
        <h4 class = "MidTextLower"> 2024 - 2025 </h4>
        <a href = "../Views/Student_2024_2025.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>   
    </div>


