<?php

// Collect form data
$course_name = $_POST['course_name'];
$professor = $_POST['professor'];
$section = $_POST['section'];
$days = isset($_POST['days']) ? implode(", ", $_POST['days']) : ""; // Convert array to string
$max_students = $_POST['max_students'];
$start_hour = str_pad($_POST['start_hour'], 2, '0', STR_PAD_LEFT);
$start_minute = str_pad($_POST['start_minute'], 2, '0', STR_PAD_LEFT);
$start_time = "$start_hour:$start_minute";
$end_hour = str_pad($_POST['end_hour'], 2, '0', STR_PAD_LEFT);
$end_minute = str_pad($_POST['end_minute'], 2, '0', STR_PAD_LEFT);
$end_time = "$end_hour:$end_minute";
$color = $_POST['color'];
$room = $_POST['room'];

if (!empty($course_name)|| !empty($professor)|| !empty($section)|| !empty($days)|| !empty($max_students)|| !empty($start_hour)|| 
!empty($start_minute)|| !empty($end_hour)|| !empty($end_minute)|| !empty($color)||!empty($room)){
        // Database connection
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "schedule_editable";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        // Insert data into the database
        $sql = "INSERT INTO register (course_name, professor, section, days, max_students, start_hour, start_minute, end_hour, end_minute, color, room)
                VALUES (?,?,?,?,?,?,?,?,?,?,?)";

}else {
    echo "All fields are required";
    die();
}


if ($conn->query($sql) === TRUE) {
    echo "New class added successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>