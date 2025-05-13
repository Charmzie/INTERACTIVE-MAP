<?php
$connect = new PDO("mysql:host=localhost;dbname=professor_db", "root", "");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['professorName'])) {
    $professorName = trim($_POST['professorName']);
    $title = isset($_POST['title']) ? trim($_POST['title']) : '';

    if (!empty($professorName)) {
        $query = "INSERT INTO professors (name, title) VALUES (:name, :title)";
        $statement = $connect->prepare($query);
        $statement->bindParam(':name', $professorName);
        $statement->bindParam(':title', $title);

        if ($statement->execute()) {
            header('Location: success_page.php'); // Redirect after success
            exit();
        } else {
            echo 'Error: Could not add professor.';
        }
    } else {
        echo 'Error: Professor name is required.';
    }
} else {
    echo 'Invalid request.';
}
?>