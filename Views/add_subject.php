<?php
if (isset($_POST["submit"])) {
    $subject_code = $_POST["subject_code"];
    $new_subject_name = $_POST["new_subject_name"];

    // Validate that both fields are not empty
    if (!empty($subject_code) && !empty($new_subject_name)) {
        $link = mysqli_connect("localhost", "root", "", "room_schedule_editable");
        if ($link == false) {
            die(mysqli_connect_error());
        }
        $sql = "INSERT INTO courses (subject_code, new_subject_name) VALUES ('$subject_code', '$new_subject_name')";
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
                window.location.href = 'room_Ass.php';
            </script>";
        }
    } else {
        echo "<script>
            alert('Please provide all information');
            window.location.href = 'room_Ass.php';
        </script>";
    }
}
?>