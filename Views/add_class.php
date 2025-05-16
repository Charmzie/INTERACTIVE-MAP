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

    // Database configuration
    $db_host = "localhost";
    $db_user = "root";
    $db_password = "";
    $db_name = "online_class_scheduling_system";

    // Validate required fields
    if (!empty($professor) && !empty($professorTitle) && !empty($subject) && !empty($subjectCode) && !empty($section)) {
        try {
            // Establish database connection
            $link = mysqli_connect($db_host, $db_user, $db_password, $db_name);
            if ($link === false) {
                throw new Exception("ERROR: Could not connect. " . mysqli_connect_error());
            }

            // Insert professor into the database
            $professor = mysqli_real_escape_string($link, $professor);
            $professorTitle = mysqli_real_escape_string($link, $professorTitle);
            $subject = mysqli_real_escape_string($link, $subject);
            $subjectCode = mysqli_real_escape_string($link, $subjectCode);
            $section = mysqli_real_escape_string($link, $section);
            $max_students = mysqli_real_escape_string($link, $max_students);

            // Insert into professors table
            $sql = "INSERT INTO professors (professorName, title) VALUES (?, ?)";
            $stmt = mysqli_prepare($link, $sql);
            mysqli_stmt_bind_param($stmt, "ss", $professor, $professorTitle);
            
            if (mysqli_stmt_execute($stmt)) {
                $professor_id = mysqli_insert_id($link);
                
                // Insert into classes table
                $sql = "INSERT INTO classes (subject_code, subject_name, professor_id, section, max_students, start_time, end_time) 
                        VALUES (?, ?, ?, ?, ?, ?, ?)";
                $stmt = mysqli_prepare($link, $sql);
                $start_time = sprintf("%02d:%02d:00", $start_hour, $start_minute);
                $end_time = sprintf("%02d:%02d:00", $end_hour, $end_minute);
                
                mysqli_stmt_bind_param($stmt, "ssissss", $subjectCode, $subject, $professor_id, $section, $max_students, $start_time, $end_time);
                
                if (mysqli_stmt_execute($stmt)) {
                    $class_id = mysqli_insert_id($link);
                    
                    // Insert class schedule days
                    if (!empty($days)) {
                        $sql = "INSERT INTO class_schedule (class_id, day) VALUES (?, ?)";
                        $stmt = mysqli_prepare($link, $sql);
                        
                        foreach ($days as $day) {
                            mysqli_stmt_bind_param($stmt, "is", $class_id, $day);
                            mysqli_stmt_execute($stmt);
                        }
                    }
                    
                    echo "<script>
                        alert('Successfully Added the Class and Instructor');
                        window.location.href = 'room_Ass.php';
                    </script>";
                }
            } else {
                throw new Exception(mysqli_error($link));
            }

            // Close connection
            mysqli_close($link);
            
        } catch (Exception $e) {
            echo "<script>
                alert('Error: " . addslashes($e->getMessage()) . "');
                window.location.href = 'room_Ass.php';
            </script>";
        }
    } else {
        // Display validation error message
        echo "<script>
            alert('Please provide all required information');
            window.location.href = 'room_Ass.php';
        </script>";
    }
}
?>