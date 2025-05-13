<?php
$connect = new PDO("mysql:host=localhost;dbname=testing", "root", "");

// Fetch data from the courses table
$query = "SELECT course_id, course_title FROM your_courses_table";
$statement = $connect->prepare($query);
$statement->execute();

$courses = $statement->fetchAll(PDO::FETCH_ASSOC);

foreach ($courses as $course) {
    echo '<option value="' . htmlspecialchars($course['course_title']) . '">' . htmlspecialchars($course['course_title']) . '</option>';
}
?>