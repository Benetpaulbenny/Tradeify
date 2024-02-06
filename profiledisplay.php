<?php
$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    // Create a PDO connection to the database
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);

    // Set PDO to throw exceptions on errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    session_start();

    // Access the user ID
    $usid = $_SESSION['usid'];

    // Fetch data from the 'logsign' table based on 'usid'
    $sql = "SELECT * FROM logsign WHERE usid = :usid";

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":usid", $usid, PDO::PARAM_STR); // Adjust the parameter type to match your database schema

    $stmt->execute();

    // Fetch the data as an associative array
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    // Return the data as JSON
    echo json_encode($data);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
