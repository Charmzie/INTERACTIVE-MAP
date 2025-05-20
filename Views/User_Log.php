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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="icon" type="image/x-icon" href="../resources/CDM-Logo.png">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        
        body {
            display: flex;
            height: 100vh;
            background-color: blue;
            overflow: hidden;
            background-image: url('../resources/colegio_de_muntinlupa_cover.jpg');
            background-position: center;    
            position: relative;
        }
        body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 67%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity - adjust as needed */
            z-index: 0;
        }
        .login-container {
            display: flex;
            width: 100%;
            height: 100%;   
        }
        
        .banner {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .login-form {
            width: 450px;
            padding: 40px;
            background-color: white;
            display: flex;
            flex-direction: column;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
        }
        
        .logo {
            font-weight: bold;
            color: #0052cc;
            font-size: 18px;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
        }
        
        .logo-icon {
            width: 25px;
            height: 25px;
            margin-right: 8px;
        }
        
        h1 {
            font-size: 24px;
            margin-bottom: 8px;
            color: #333;
        }

        
        
        .subtitle {
            color: #666;
            font-size: 14px;
            margin-bottom: 40px;
        }
        
        .or-divider {
            display: flex;
            align-items: center;
            color: #888;
            font-size: 13px;
            margin: 24px 0;
        }
        
        .form-group {
            margin-bottom: 16px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: #555;
        }
        
        input[type="text"], 
        input[type="password"], 
        input[type="email"] {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            margin-top: 5px;
        }
        
        .password-field {
            position: relative;
            margin-bottom: 16px;
        }
        
        .show-password {
            display: flex;
            align-items: center;
            margin-top: 8px;
            font-size: 14px;
        }
        
        .show-password input {
            margin-right: 8px;
        }
        
        .remember-forgot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 16px 0 24px;
            font-size: 14px;
        }
        
        .remember {
            display: flex;
            align-items: center;
        }
        
        .remember input {
            width: auto;
            margin-right: 8px;
        }
        
        .forgot {
            color: #0052cc;
            text-decoration: none;
        }
        
        input[type="submit"] {
            background-color: #0052cc;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            margin: 24px 0;
        }
        
        input[type="submit"]:hover {
            background-color: #003d80;
        }
        
        .error-message {
            color: red;
            margin-bottom: 16px;
            font-size: 14px;
        }
        
        .banner-content {
            max-width: 400px;
            padding: 0 0px;
            text-align: center;
            color: white;
            margin-top: 20px;
        }
        
        .banner h2 {
            font-size: 24px;
            margin-bottom: 16px;
        }
        
        .banner p {
            font-size: 14px;
            opacity: 0.9;
        }
        
        .Logo {
            width: 400px;
            height: 400px;
            margin-bottom: -50px;
        }
        
        .textt {
            color: white;
            margin-top: 20px;
            text-align: center;
        }
        
        .illustration {
            margin-bottom: 40px;
            position: relative;
        }
        
        .illustration-bg {
            width: 120px;
            height: 120px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            position: relative;
        }
        
        .card-preview {
            position: absolute;
            width: 160px;
            height: 120px;
            background-color: white;
            border-radius: 6px;
            right: -20px;
            top: -20px;
            padding: 16px;
        }
        
        .card-line {
            height: 8px;
            background-color: #eee;
            margin-bottom: 8px;
            border-radius: 4px;
        }
        
        .card-avatar {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }
        
        .avatar-circle {
            width: 20px;
            height: 20px;
            background-color: #eee;
            border-radius: 50%;
            margin-right: 8px;
        }
        
        .avatar-line {
            flex: 1;
            height: 8px;
            background-color: #eee;
            border-radius: 4px;
        }
        
        .integration-icons {
            display: flex;
            justify-content: center;
            margin-bottom: 32px;
        }
        
        .icon-circle {
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
        }
        
        .icon-placeholder {
            width: 24px;
            height: 24px;
            background-color: #eee;
            border-radius: 4px;
        }
        
        .icon-plus {
            color: #0052cc;
            font-weight: bold;
            font-size: 24px;
        }
        
        
    </style>
</head>
<body>
    <div class="login-container">
        <div class="banner">
            <img src="../resources/CDM-Logo.png" class="Logo">
            
            <div class="banner-content">
                <h2 class="textt">THE HOME OF FUTURE ENGINEERS AND ARCHITECTS.</h2>
            </div>
            
            <div class="footer">
                <div class="textt">All Rights Reserved</div>
            </div>
        </div>
        
        <div class="login-form">
            <div class="logo">
                <img src="../resources/CDM-Logo.png" class="logo-icon">
                <h4 class="CdM">COLEGIO DE MUNTINLUPA</h4>
            </div>
            
            <h1>Log in to your Account</h1>
            <p class="subtitle">Welcome back! Enter your credentials below.</p>
            
            <?php if (!empty($error)): ?>
                <div class="error-message"><?php echo $error; ?></div>
            <?php endif; ?>
            
            <form method="POST">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                
                <div class="password-field">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <div class="show-password">
                        <input type="checkbox" id="showPassword" onclick="togglePassword()">
                        <label for="showPassword">Show Password</label>
                    </div>
                </div>
                
                <input type="submit" value="Login">
            </form>
        </div>
    </div>

    <script>
    function togglePassword() {
        var pw = document.getElementById("password");
        pw.type = (pw.type === "password") ? "text" : "password";
    }
    </script>
</body>
</html>