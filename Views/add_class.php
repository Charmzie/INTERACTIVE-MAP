<?php
if (isset($_POST["submit"])) {
    // Retrieve input values
    $subject = $_POST["subject"];
    $subjectCode = $_POST["subjectCode"];
    $professor = $_POST["professor"];
    $professorTitle = $_POST["professorTitle"];
    $section = $_POST["section"];
    $days = isset($_POST["days"]) ? $_POST["days"] : []; // Array of days
    $max_students = $_POST["max_students"];
    $start_hour = $_POST["start_hour"];
    $end_hour = $_POST["end_hour"];
    $start_minute = $_POST["start_minute"];
    $end_minute = $_POST["end_minute"];

    // Validate required fields
    if (!empty($professor) && !empty($professorTitle) && !empty($subject) && !empty($subjectCode) && !empty($section)) {
        // Establish database connection
        $link = mysqli_connect("localhost", "root", "", "add_class_db");
        if ($link === false) {
            die("ERROR: Could not connect. " . mysqli_connect_error());
        }

        // Insert professor into the database
        $professor = mysqli_real_escape_string($link, $professor);
        $professorTitle = mysqli_real_escape_string($link, $professorTitle);
        $sql = "INSERT INTO professors (professorName, title) VALUES ('$professor', '$professorTitle')";

        if (mysqli_query($link, $sql)) {
            // Prepare success response
            echo "<script>
                alert('Successfully Added the Instructor');
                window.location.href = 'room_Ass.php';
            </script>";
        } else {
            // Handle query error
            echo "<script>
                alert('Something went wrong: " . mysqli_error($link) . "');
                window.location.href = 'room_Ass.php';
            </script>";
        }

        // Close connection
        mysqli_close($link);
    } else {
        // Display validation error message
        echo "<script>
            alert('Please provide all required information');
            window.location.href = 'room_Ass.php';
        </script>";
    }
}
?>