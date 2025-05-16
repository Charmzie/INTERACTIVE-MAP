<?php
if (isset($_POST["submit"])) {
    $room_ids = $_POST["room_ids"];
    $program_ids = $_POST["program_ids"];

    if (!empty($room_ids)) {
        $link = mysqli_connect("localhost", "root", "", "room_assignments");
        if ($link == false) {
            die(mysqli_connect_error());
        }

        $sql = "INSERT INTO room_assignments (room_ids, program_ids) VALUES ('$room_ids', '$program_ids')";
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
            
        </script>";
    }
}
?>