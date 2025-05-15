<?php
if (isset($_POST["submit"])) {
    $subject_code = $_POST["subject_code"];
    $subject_title = $_POST["subject_title"];

    // Validate that both fields are not empty
    if (!empty($subject_code) && !empty($subject_title)) {
        $link = mysqli_connect("localhost", "root", "", "course_db");
        if ($link == false) {
            die(mysqli_connect_error());
        }

        $sql = "INSERT INTO courses (subject_code, subject_title) VALUES ('$subject_code', '$subject_title')";
        if (mysqli_query($link, $sql)) {
            // Display a success message and redirect to room_Ass.php
            echo "<script>
                alert('Successfully Added the Subject');
                window.location.href = 'room_Ass.php';
            </script>";
        } else {
            // Display an error message and redirect to room_Ass.php
            echo "<script>
                alert('Something went wrong');
                
            </script>";
        }
    } else {
        // Display a validation error message and redirect to room_Ass.php
        echo "<script>
            alert('Please provide all information');
            
        </script>";
    }
}
?>