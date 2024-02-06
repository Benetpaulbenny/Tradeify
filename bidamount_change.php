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

    session_start(); // Start the PHP session (on every page where you want to access the user ID)

    // Access the user ID and product ID
    $usid = $_SESSION['usid'];
    // $proid = $_SESSION['proid'];

    $proid=201;
    $bidamount = $_POST['bidamount'];

    $sql = "UPDATE sellbid SET nbidamount = :bidamount, biduser = :usid WHERE proid = :proid";
    
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":bidamount", $bidamount, PDO::PARAM_INT);
    $stmt->bindParam(":usid", $usid, PDO::PARAM_INT);
    $stmt->bindParam(":proid", $proid, PDO::PARAM_INT);
    $stmt->execute();

    // Check the number of affected rows to determine if the update was successful
    $rowCount = $stmt->rowCount();

    if ($rowCount > 0) {
        // Update was successful
        echo json_encode(['success' => 'Bid amount updated successfully']);
    } else {
        // No matching record found for the given proid and usid
        echo json_encode(['error' => 'No record found for the given product ID and user ID']);
    }

} catch (PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
}
?>
