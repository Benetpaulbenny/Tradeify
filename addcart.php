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

    // Access the user ID
    $usid = $_SESSION['usid'];
    $proid = $_SESSION['proid']; // Get the proid from the GET request

    // $jsondata1 = file_get_contents('data.json');
    // $arraydata = json_decode($jsondata1, true);
    // $proid=$arraydata['proid'];


    $cba='c';

    $sql = "INSERT INTO orderlist (usid, proid, cba) VALUES (:usid, :proid, :cba)";
    

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":usid", $usid, PDO::PARAM_INT);
    $stmt->bindParam(":proid", $proid, PDO::PARAM_INT);
    $stmt->bindParam(":cba", $cba, PDO::PARAM_INT);
    $stmt->execute();
    // $result = $stmt->fetch(PDO::FETCH_ASSOC);


    // Check if the insertion was successful
    $rowCount = $stmt->rowCount();
    if ($rowCount > 0) {
        Header('Location:profile.htm');
    } else {
        echo json_encode(['error' => 'Failed to insert data']);
    }

} catch (PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
}
?>
