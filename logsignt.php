
<?php

session_start();
header("Access-Control-Allow-Origin: *");

$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    // Create a PDO connection to the database
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);

    // Set PDO to throw exceptions on errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //echo "Connected to the database.";

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Sample data to insert
        $usid = $_POST["email-or-phone"];
        $pass = $_POST["password"];

        // SQL query to select user based on user_id or email
        $sql = "SELECT * FROM logsign WHERE usid = :usid OR mailid = :usid";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":usid", $usid, PDO::PARAM_STR);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // User exists
            if ($pass === $user['pass']) {
                $_GLOBALS['usid']=$usid;
                // Password is correct
                //header("Location:chumma2.html");
                echo $user['usid']; // You can customize the welcome message
            } else {
                // Invalid login - Password doesn't match
                echo "Invalid credentials. Please try again.";
            }
        } else {
            // Invalid login - User not found
            echo "Invalid credentials. Please try again.";
        }
        header("Location:chumma2.html");

    }
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}




?>