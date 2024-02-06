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
    
    // Fetch all 'proid' associated with the user's 'usid' from 'orderlist'
    $orderlistQuery = "SELECT proid FROM orderlist WHERE usid = :usid AND cba = 'c'";
    $orderlistStmt = $pdo->prepare($orderlistQuery);
    $orderlistStmt->bindParam(":usid", $usid, PDO::PARAM_STR);
    $orderlistStmt->execute();

    // Fetch all 'proid' associated with the user
    $proids = $orderlistStmt->fetchAll(PDO::FETCH_COLUMN);

    if (!empty($proids)) {
        // Use the obtained 'proids' to select product details from 'sellfix'
        $inClause = str_repeat('?,', count($proids) - 1) . '?';
        $sql = "SELECT pname, proid, sfname, dettype, CAST(price AS DECIMAL(10,2)) AS price, pimage FROM sellfix WHERE proid IN ($inClause)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute($proids);

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Return the data as JSON
        echo json_encode($data);
    } else {
        //echo json_encode(['message' => 'No products found for the user']);
        echo "No products found";
    }

} catch (PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
}
?>
