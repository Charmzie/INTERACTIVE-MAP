<style>
/* Main Container */
.Middle {
    position: relative;
    margin: 0;
    left: 230px;
    top: 800px;
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Middle Image + Overlay */
.Middle_Container {
    position: relative;
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -5px; /* Brings it closer to the bottom images */
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
    top: 20%;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 2px;
}

.MidTextLower {
    top: 50%;
    font-size: 22px;
    max-width: 80%;
}

/* Left & Right Images */
.Lower_Images {
    display: flex;
    gap: 0px;  /* Ensures the images stay close together */
    justify-content: center;
    align-items: center;
    margin-top: -5px; /* Moves images up to reduce spacing */
}

/* General Styling for Left & Right Containers */
 .Right_Container {
    position: relative;
    right:-10px;
    top: 30px;
    width: 39.5vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Left_Container{
    position: relative; 
    left:-10px;
    top: 30px;
    width: 39.5vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}   
.Left_Pic, .Right_Pic {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 10px;
}

/* Overlays */
.OverlayL, .OverlayR {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 10px;
}

.OverlayL {
    background: linear-gradient(to bottom, rgba(255, 0, 0, 0.6), rgba(139, 0, 0, 0.6));
}

.OverlayR {
    background: linear-gradient(to bottom, rgba(255, 255, 0, 0.6), rgba(204, 204, 0, 0.6));
}

/* Left & Right Text */
.LeftTextUpper, .LeftTextLower, .RightTextUpper, .RightTextLower {
    position: absolute;
    color: white;
    text-align: center;
    z-index: 2;
    width: 90%;
}

.LeftTextUpper, .RightTextUpper {
    top: 15%;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 1px;
}

.LeftTextLower, .RightTextLower {
    top: 50%;
    font-size: 20px;
}

.ReadM_Stud {
    position: absolute;
    bottom: 15px; /* Positions it near the bottom of the container */
    left: 50%;
    transform: translateX(-50%); /* Centers horizontally */
    padding: 12px 25px;
    background-color: #0044cc; /* Deep blue */
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
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
    </div>

    <!-- Left & Right Images -->
    <div class="Lower_Images">
        <div class="Left_Container">
            <img src="resources/Left_Pic.jpg" class="Left_Pic" alt="Left Image">
            <div class="OverlayL"></div>
            <h1 class = "LeftTextUpper"> Enrolled Students per Program </h1>
            <h4 class = "LeftTextLower"> Comprehensive tracking of student enrollment across all academic programs </h4>
            <a href = "student_info.php">
             <button class = "ReadM_Stud"> View More </button>
            </a>
        </div>

        <div class="Right_Container">
            <img src="resources/Right_Pic.png" class="Right_Pic" alt="Right Image">
            <div class="OverlayR"></div>
            <h1 class = "RightTextUpper"> Room Assignment </h1>
            <h4 class = "RightTextLower"> Efficient allocation of classrooms based on schedules and capacity requirements </h4> 
        </div>
    </div>
</div>



</body>
</html>
