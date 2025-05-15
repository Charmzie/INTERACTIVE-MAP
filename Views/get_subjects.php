<?php
// Database connection
$mysqli = new mysqli('localhost', 'root', '', 'architecture_course_catalog');

if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

// Fetch subjects from the database
$result = $mysqli->query("SELECT course_id, course_code, course_title FROM courses");

if ($result->num_rows > 0) {
    // Generate HTML for dropdown options
    while ($row = $result->fetch_assoc()) {
        echo '<option value="' . $row['course_id'] . '">' . $row['course_code'] . ' - ' . $row['course_title'] . '</option>';
    }
} else {
    echo '<option value="">No subjects available</option>';
}

$mysqli->close();
?>