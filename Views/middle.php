<style>
html, body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.Middle {
    position: absolute;
    left: 730px;
    top: 160%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 110vh;
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
.OverlayL, .OverlayR {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.OverlayL {
    background: linear-gradient(to bottom, rgba(255, 0, 0, 0.6), rgba(139, 0, 0, 0.6));
}

.OverlayR {
    background: linear-gradient(to bottom, rgba(255, 255, 0, 0.6), rgba(204, 204, 0, 0.6));
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
</style>


    </style>
</head>
<body>
<div class="Middle">
    <!-- Middle Image -->
    <div class="Middle_Container">
        <img src="resources/Middle_Pic.png" class="Middle_Pic" alt="Middle Image">
        <div class="OverlayM"></div>
        <h1 class = "MidTextUpper"> Colegio De Muntinlupa Buildings </h1>
        <h4 class = "MidTextLower"> A state-of-the-art facility designed to support diverse academic and administrative needs </h4>
        <a href = "Views/Interactive_Map.php">
            <button class = "ReadM_Stud"> View More </button>
        </a>   
    </div>

    <!-- Left & Right Images -->
    <div class="Lower_Images">
        <div class="Left_Container">
            <img src="resources/Left_Pic.jpg" class="Left_Pic" alt="Left Image">
            <div class="OverlayL"></div>
            <h1 class = "LeftTextUpper"> Enrolled Students per Program </h1>
            <h4 class = "LeftTextLower"> Comprehensive tracking of student enrollment across all academic programs </h4>
            <a href = "Views/student_info.php">
             <button class = "ReadM_Stud"> View More </button>
            </a>
        </div>

        <div class="Right_Container">
            <img src="resources/Right_Pic.png" class="Right_Pic" alt="Right Image">
            <div class="OverlayR"></div>
            <h1 class = "RightTextUpper"> Room Assignment </h1>
            <h4 class = "RightTextLower"> Efficient allocation of classrooms based on schedules and capacity requirements </h4> 
            <a href = "Views/Room_Assignment.php">
                <button class = "ReadM_Stud"> View More </button>
            </a>
        </div>
    </div>
</div>



</body>
</html>
