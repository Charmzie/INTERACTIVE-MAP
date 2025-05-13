<?php
// add_professor.php
header('Content-Type: application/json');

$servername = "localhost"; // Change as per your configuration
$username = "root";        // MySQL username
$password = "";            // MySQL password
$dbname = "professor_db";   // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit();
}

// Get form data    
$data = json_decode(file_get_contents("php://input"), true);
$professorName = $data['professorName'] ?? '';
$title = $data['title'] ?? '';

if (empty($professorName)) {
    echo json_encode(['status' => 'error', 'message' => 'Professor name is required.']);
    exit();
}

// Insert into database
$sql = "INSERT INTO professors (professorName, title) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $professorName, $title);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Professor added successfully!', 'id' => $stmt->insert_id]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>