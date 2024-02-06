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

    // Replace this with the actual user ID you want to fetch
    session_start(); // Start the PHP session (on every page where you want to access the user ID)

    // Access the user ID
    $usid = $_SESSION['usid'];
    
    // Query to select product details from the 'sellfix' table based on 'usid'
   // Query to select product details from the 'sellfix' table based on 'usid'
   $sql = "SELECT pname, proid, sfname, dettype, CAST(price AS DECIMAL(10,2)) AS price, pimage FROM sellfix WHERE usid = :usid UNION SELECT pname, proid, sfname, dettype, CAST(price AS DECIMAL(10,2)) AS price, pimage FROM sellbid WHERE usid = :usid";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(":usid", $usid, PDO::PARAM_STR);
$stmt->execute();

// Fetch all the data as an associative array
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the data as JSON
echo json_encode($data);

} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

?>
