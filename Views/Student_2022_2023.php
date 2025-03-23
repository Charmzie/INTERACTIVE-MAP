<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection settings
$servername = "127.0.0.1";  // Localhost
$username = "root";         // Default MySQL username
$password = "";             // Leave empty if no password
$database = "Number_of_Students";  // Database name

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Query to fetch data
$sql = "SELECT `Program Description`, `Program ID`, `Number of Students`, `Academic Year` FROM `Student_Info_2022_2023`";
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
            margin: 0;
            width: 100vw;
            height: 150vh;
            overflow-y: auto;
            overflow-x: auto;
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

        .Population {
            position: absolute;
            top: 100px;
            left: 200px;
            color: Black;
            font-size: 40px;
            letter-spacing: 3px;
        }

        /* Wrapper to align text and dropdown in one row */
        .header-container {
            display: flex;
            align-items: center;
            position: absolute;
            top: 200px;
            left: 230px;
        }

        .Enrolled {
            color: Black;
            font-size: 25px;
            letter-spacing: 3px;
            margin-right: 20px; /* Spacing between text and dropdown */
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown .dropbtn {
            font-size: 16px;
            border: none;
            outline: none;
            color: white;
            padding: 10px 16px;
            background-color: #041e27; /* Dark blue */
            font-family: inherit;
            cursor: pointer;
            border-radius: 5px;
        }

        .dropdown .dropbtn:hover {
            background-color: #d9534f; /* Red on hover */
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: white;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }

        .dropdown-content a:hover {
            background-color: #ddd;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        .Pie {
            position: absolute;
            left: 620px;
            top: 300px;
        }
    </style>
    
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Program Description', 'Number of Students'],
          <?php
          $sql = "SELECT `Program Description`, `Number of Students` FROM `Student_Info_2022_2023`"; 
          $fire = mysqli_query($conn, $sql);
          while ($row = mysqli_fetch_assoc($fire)){
              echo "['".$row['Program Description']."', ".$row['Number of Students']."],";
          }
          ?>
        ]);

        var options = {
          backgroundColor: 'transparent',
          pieHole: 0.4,
          colors: ['#9400B1', '#2bca43', '#ffae00', '#F8F812', '#2112F8', '#EB14B5','#EB14B5', '#BE0000'],
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
    </script>
</head>
<body>

    <h1 class="Population"> Colegio De Muntinlupa: Student Population </h1>
    
    <!-- Header section containing text and dropdown side by side -->
    <div class="header-container">
        <h4 class="Enrolled"> Enrolled Students per Program </h4>
        <div class="dropdown">
            <button class="dropbtn">Select Semester Date ▼</button>
            <div class="dropdown-content">
                <a href="Student_2022_2023_1S.php">First Semester</a>
                <a href="Student_2022_2023.php">Second Semester</a>
                <a href="Student_2022_2023_Sum.php">Summer</a>
            </div>
        </div>
    </div>

    <?php include '../Views/side1.php'; ?>
    
    <?php if ($result->num_rows > 0): ?>
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

    <div class="Pie">
        <div id="donutchart" style="width: 720px; height: 500px;"></div>
    </div>

</body>
</html>

<?php
// Close database connection
$conn->close();
?>
