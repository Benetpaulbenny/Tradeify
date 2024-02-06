
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

    $sql = "SELECT usid, sfname, slname, smail, scont, saddr, dettype, pname, category, newold, pyear, price, quant, pdesc, pimage, proid FROM sellfix";
    $stmt = $pdo->query($sql);

    // Fetch data as an associative array
    $sellfixData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Encode the data as JSON for JavaScript
    echo json_encode($sellfixData);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}




?>