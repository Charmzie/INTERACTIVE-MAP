<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
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


$dayMap = [
    'Monday'    => 'Mon',
    'Tuesday'   => 'Tue',
    'Wednesday' => 'Wed',
    'Thursday'  => 'Thu',
    'Friday'    => 'Fri',
    'Saturday'  => 'Sat',
];

$shortDays = [];

foreach ($days as $day) {
    if (isset($dayMap[$day])) {
        $shortDays[] = $dayMap[$day];
    }
}

$daysString = implode(',', $shortDays);  // E.g., "Mon,Wed,Fri"

$start_hour_pad = str_pad($start_hour, 2, '0', STR_PAD_LEFT);    // e.g., '7' -> '07'
$start_minute_pad = str_pad($start_minute, 2, '0', STR_PAD_LEFT); // e.g., '5' -> '05'

$start_time_final = "$start_hour_pad:$start_minute_pad:00"; // => '07:15:00'

$end_hour_pad = str_pad($end_hour, 2, '0', STR_PAD_LEFT);
$end_minute_pad = str_pad($end_minute, 2, '0', STR_PAD_LEFT);

$end_time_final = "$end_hour_pad:$end_minute_pad:00"; // => '09:30:00'


    // Validate required fields
    // if (!empty($subject) && !empty($subjectCode) && !empty($professor) && !empty($professorTitle) && !empty($section) && 
    // !empty($days)&& !empty($max_students)&& !empty($start_hour)&& !empty($end_hour)&& !empty($start_minute)&& 
    // !empty($end_minute)&& !empty($color)&& !empty($room)) {

    //     $link = mysqli_connect("localhost", "root", "", "room_schedule_editable");
    //     if ($link == false) {
    //         die(mysqli_connect_error());
    //     }

    //     $sql = "INSERT INTO add_class (subject, subjectCode, professor, professorTitle, section, days, max_students, start_hour, end_hour, start_minute, end_minute, color, room)
    //      VALUES ('$subject', '$subjectCode', '$professor', '$professorTitle', '$section', '$days', '$max_students', '$start_hour', '$end_hour', '$start_minute', '$end_minute', '$color', '$room')";
    //     if (mysqli_query($link, $sql)) {
    //         // Display a success message and redirect to room_Ass.php
    //         echo "<script>
    //             alert('Successfully Added the Information');
    //             window.location.href = 'room_Ass.php';
    //         </script>";
    //     } else {
    //         // Display an error message and redirect to room_Ass.php
    //         echo "<script>
    //             alert('Something went wrong');
    //             window.location.href = 'room_Ass.php';
    //         </script>";
    //     }
    // } else {
    //     // Display a validation error message and redirect to room_Ass.php
    //     echo "<script>
    //         alert('Please provide all information');
    //         window.location.href = 'room_Ass.php';
    //     </script>";
    // }


    $missingFields = [];

    if (empty($subject)) $missingFields[] = 'Subject';
    if (empty($subjectCode)) $missingFields[] = 'Subject Code';
    if (empty($professor)) $missingFields[] = 'Professor';
    if (empty($professorTitle)) $missingFields[] = 'Professor Title';
    if (empty($section)) $missingFields[] = 'Section';
    if (empty($days)) $missingFields[] = 'Days';
    if (empty($max_students)) $missingFields[] = 'Max Students';
    if (empty($start_hour)) $missingFields[] = 'Start Hour';
    if (empty($end_hour)) $missingFields[] = 'End Hour';
    if (empty($start_minute)) $missingFields[] = 'Start Minute';
    if (empty($end_minute)) $missingFields[] = 'End Minute';
    if (empty($color)) $missingFields[] = 'Color';
    if (empty($room)) $missingFields[] = 'Room';

    if (empty($missingFields)) {
        // All fields are present, proceed with your logic here
            $link = mysqli_connect("localhost", "root", "", "room_schedule_editable");
        if ($link == false) {
            die(mysqli_connect_error());
        }

        $sql = "INSERT INTO add_class (subject, subjectCode, professor, professorTitle, section, days, max_students, start_time, end_time, color, room)
         VALUES ('$subject', 
        '$subjectCode', 
        '$professor', 
        '$professorTitle', 
        '$section', 
        '$daysString', 
        '$max_students', 
        '$start_time_final', 
        '$end_time_final', 
        '$color',
         '$room')";
        if (mysqli_query($link, $sql)) {
            // Display a success message and redirect to room_Ass.php
            echo "<script>
                alert('Successfully Added the Information');
                window.location.href = 'Room_Schedule_editable.php';  
            </script>";
            
        } else {
            // Display an error message and redirect to room_Ass.php
            echo "<script>
                alert('Something went wrong');
                window.location.href = 'Room_Schedule_editable.php';
            </script>";
            //window.location.href = 'room_Ass.php';
        }
    } else {
        $missingList = implode(', ', $missingFields);
        echo "<script>
            alert('Please provide the following missing fields: $missingList');
              window.location.href = 'Room_Schedule_editable.php';
        </script>";
        //window.location.href = 'room_Ass.php';
    }

}
?>