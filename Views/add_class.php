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
    $start_time = $start_hour . ":" . $start_minute;
    $end_time = $end_hour . ":" . $end_minute;

    $color = $_POST["color"];
    $room = $_POST["room"];

    // Validate required fields
    if (!empty($subject) && !empty($subjectCode) && !empty($professor) && !empty($professorTitle) && !empty($section) && 
    !empty($days)&& !empty($max_students)&& !empty($start_hour)&& !empty($end_hour)&& !empty($start_minute)&& 
    !empty($end_minute)&& !empty($color)&& !empty($room)) {

        $link = mysqli_connect("localhost", "root", "", "room_schedule_editable");
        if ($link == false) {
            die(mysqli_connect_error());
        }

        $sql = "INSERT INTO add_class (subject, subjectCode, professor, professorTitle, section, days, max_students, start_hour, end_hour, start_minute, end_minute, color, room)
         VALUES ('$subject', '$subjectCode', '$professor', '$professorTitle', '$section', '$days', '$max_students', '$start_hour', '$end_hour', '$start_minute', '$end_minute', '$color', '$room')";
        if (mysqli_query($link, $sql)) {
            // Display a success message and redirect to room_Ass.php
            echo "<script>
                alert('Successfully Added the Information');
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