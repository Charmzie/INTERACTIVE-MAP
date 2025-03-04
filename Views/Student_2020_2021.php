<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection settings
$servername = "127.0.0.1";  // Localhost
$username = "root";         // Default MySQL username
$password = "";             // Leave empty if no password
$database = "Number_of_Students";     // Your database name


$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Query to fetch data
$sql = "SELECT `Program Description`, `Program ID`, `Number of Students`, `Academic Year` FROM `Student_Info_2020_2021`";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Info</title>
    <style>
        body {
            margin:0;
            width: 100vw;
            height: 150vh;
            overflow-y: auto;
            overflow-x:auto; 
        }
        table {
            position: relative;
            top: 300px;
            left: 230px;
            width: 40%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: rgba(4, 30, 39, 1);
            color: white;
        }
        tr:hover {
            background-color: #f1f1f1;
        }

        .Population{
            position:absolute;
            top: 100px;
            left:200px;
            color: Black;
            font-size: 40px;
            font-weight:20px;
            letter-spacing:3px;
        }

        .Enrolled{
            position:absolute;
            top: 200px;
            left:230px;
            color: Black;
            font-size: 25px;
            font-weight:20px;
            letter-spacing:3px;
        }

        .dropdown{
            display: inline-block;
        }
        .dropdown button{
            background-color: yellow;
            color: black;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
        }

        .dropdown a{
            display: block;
            color: black;
            text-decoration: none;
            padding: 10px 15px;
        }

        .dropdown .years{
            display:none;
            position:absolute;
            background-color:white;
            min-width:100px;
            box-shadow: 2px 2px 5px black;
        }

        .dropdown:hover .years{
            display:block;
        }

        .drowpdown:hover button{
            background-color: white;
        }

        .dropdown a:hover{
            background-color: blue;
        }
    </style>
</head>
<body>

    <h1 class = "Population"> Colegio De Muntinlupa: Student Population </h1>
    <h4 class = "Enrolled"> Enrolled Students per Program </h4>

    <?php
    
    include '../Views/side1.php';
    if ($result->num_rows > 0): ?>
        <table>
            <tr>
                <th>Program Description</th>
                <th>Program ID</th>
                <th>Number of Students</th>
                <th>Academic Year</th>
            </tr>
            <?php while($row = $result->fetch_assoc()): ?>
                <tr>
                    <td><?= htmlspecialchars($row["Program Description"]) ?></td>
                    <td><?= htmlspecialchars($row["Program ID"]) ?></td>
                    <td><?= htmlspecialchars($row["Number of Students"]) ?></td>
                    <td><?= htmlspecialchars($row["Academic Year"]) ?></td>
                </tr>
            <?php endwhile; ?>
        </table>
    <?php else: ?>
        <p>No records found.</p>
    <?php endif; ?>

    <div class="dropdown">
        <button> Academic Year </button>
        <div class = "years">
            <a href = ""> 2022 - 2023 (1st Sem) </a>
            <a href = ""> 2022 - 2023 (2nd Sem)</a>
            <a href = ""> 2023 - 2024 (1st Sem)</a>
            <a href = ""> 2023 - 2024 (2nd Sem)</a>
            <a href = ""> 2024 - 2025 (1st Sem)</a>
            <a href = ""> 2024 - 2025 (2nd Sem)</a>
     </div>
  </div>

</body>
</html>

<?php
// Close database connection
$conn->close();
?>
