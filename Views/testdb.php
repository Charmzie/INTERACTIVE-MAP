<?php
$host = "localhost";
$db = "room_schedule_editable";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO add_class (subject, subjectCode, professor, professorTitle, section, days, max_students, start_time, end_time, color, room)
        VALUES ('Test Subject', 'TST101', 'John Doe', 'Prof.', 'A1', 'Mon,Tue', 30, '08:00:00', '09:00:00', '#FF0000', 'Room A')";

if ($conn->query($sql) === TRUE) {
    echo "Test record inserted successfully.";
} else {
    echo "Error inserting test record: " . $conn->error;
}

$conn->close();
?>
