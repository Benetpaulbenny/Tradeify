<?php

session_start();

$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    // Create a PDO connection to the database
    $pdo = new PDO("mysql:host=$host; dbname=$db", $username, $password);

    // Set PDO to throw exceptions on errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to the database.";
  

// Check if the user is logged in (you can adjust this condition as needed)
if (isset($_SESSION['loggedIn'])) {
    // Unset or destroy the sessions you want to clear
    session_start();

// Unset or destroy the sessions
unset($_SESSION['loggedIn']);
unset($_SESSION['usid']);
// session_destroy(); // Optionally, you may use this to destroy the entire session

// Redirect to a login page or another relevant page after logout
header('Location: home.html'); // Replace 'home.html' with the desired login page
exit();
    // Optionally, destroy the entire session
    // session_destroy();

    // Redirect to a login page or another appropriate page after logout
} else {
    // User is not logged in; you can handle this case as needed
    echo "You are not logged in.";
}
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>






























