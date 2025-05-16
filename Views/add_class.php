<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Debugging inputs
if (empty($_POST)) {
    die("No POST data received!");
}

var_dump($_POST);

// Debugging MySQL connection
$conn = new mysqli("localhost", "root", "", "add_class_db");
if ($conn->connect_error) {
    die("Database connection error: " . $conn->connect_error);
}

// Debugging SQL query
$sql = "INSERT INTO classes (subject, professor) VALUES ('{$_POST['subject']}', '{$_POST['professor']}')";
if (!$conn->query($sql)) {
    die("SQL Error: " . $conn->error);
}

echo "Data inserted successfully!";
$conn->close();
?>