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

    // $proid = $_GET['proid']; // Get the proid from the GET request

    $proid = $_POST["proid"];


    $query = "SELECT * FROM sellfix WHERE proid = :proid UNION SELECT * FROM sellbid WHERE proid = :proid ";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":proid", $proid, PDO::PARAM_INT);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode(['error' => 'No product found for the given ID']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
}
?>
