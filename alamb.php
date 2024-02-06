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

    $proid = $_GET['proid']; // Get the proid from the GET request

    //  $proid = $_POST["proid"];
    // $proid = 115;

    

    $sql = "SELECT pdesc, quant, newold, pyear, saddr, category, smail, scont, slname, usid, pname, proid, sfname, dettype, CAST(price AS DECIMAL(10,2)) AS price, pimage FROM sellfix WHERE proid = :proid UNION SELECT pdesc, squant, newold, pyear, saddr, category, scont, smail, slname, usid, pname, proid, sfname, dettype, CAST(price AS DECIMAL(10,2)) AS price, pimage FROM sellbid WHERE proid = :proid";
    // smail, scount, saddr, category, quant, newold, pyear

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":proid", $proid, PDO::PARAM_INT);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($result) {
        // echo json_encode($result);
        session_start();
        $_SESSION['proid'] = $proid;


        $jsondata = json_encode($result);
        file_put_contents('data.json',$jsondata);   
    } else {
        echo json_encode(['error' => 'No product found for the given ID']);
    }

} catch (PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
}
?>
