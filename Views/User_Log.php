<?php
session_start();

$conn = new mysqli("localhost", "root", "", "Admin");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    $sql = "SELECT * FROM User_Pass WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $res = $stmt->get_result();

    if ($res->num_rows === 1) {
        $user = $res->fetch_assoc();
        if ($password === $user['password']) {
            $_SESSION['username'] = $user['username'];
            header("Location: main.php");
            exit();
        } else {
            $error = "Invalid password.";
        }
    } else {
        $error = "User not found.";
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #4c5051; /* Blue background */
            font-family: Arial,sans-serif;
            height: 100vh;
            overflow: hidden;
        }

        .login-container {
            position: absolute;
            top: 50%;
            left: 73%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            background: rgba(255, 255, 255, 0.95);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(0,0,0,0.3);
        }

        input[type="text"], input[type="password"] {
            padding: 8px;
            width: 100%;
            margin-top: 5px;
        }

        input[type="submit"] {
            margin-top: 10px;
            padding: 10px;
            width: 100%;
            background-color: #0056b3;
            color: white;
            border: none;
            border-radius: 5px;
        }

        input[type="submit"]:hover {
            background-color: #003d80;
        }

        .Logo{
            position: absolute;
            top: 10%;
            right: 55%;
            width: 400px;
            height:350px;
        }

        .textt{
            position: absolute;
            top: 60%;
            right: 53%;
            color: white;
    
        }
    </style>
</head>
<body>
<img src = "../resources/CDM-Logo.png" class = "Logo">
<h4 class = "textt"> THE HOME FOR FUTURE ENGINEERS AND ARCHITECTS </h4>

<div class="login-container">

    <h2>Login</h2>
    <?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
    <form method="POST">
        Username: <input type="text" name="username" required><br><br>
        Password: 
        <input type="password" name="password" id="password" required>
        <input type="checkbox" onclick="togglePassword()"> Show Password
        <br><br>
        <input type="submit" value="Login">
    </form>
</div>

<script>
function togglePassword() {
    var pw = document.getElementById("password");
    pw.type = (pw.type === "password") ? "text" : "password";
}
</script>

</body>
</html>
