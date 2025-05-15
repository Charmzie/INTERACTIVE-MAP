<?php
if (isset($_POST["submit"])) {
    $professorName = $_POST["professorName"];
    $title = $_POST["title"];

    if (!empty($professorName)) {
        $link = mysqli_connect("localhost", "root", "", "professor_db");
        if ($link == false) {
            die(mysqli_connect_error());
        }

        $sql = "INSERT INTO professors (professorName, title) VALUES ('$professorName', '$title')";
        if (mysqli_query($link, $sql)) {
            // Display a success message and redirect to room_Ass.php
            echo "<script>
                alert('Successfully Added the Instructor');
                window.location.href = 'room_Ass.php';
            </script>";
        } else {
            // Display an error message and redirect to room_Ass.php
            echo "<script>
                alert('Something went wrong');
                window.location.href = 'room_Ass.php';
            </script>";
        }
    } else {
        // Display a validation error message and redirect to room_Ass.php
        echo "<script>
            alert('Please provide all information');
            window.location.href = 'room_Ass.php';
        </script>";
    }
}
?>