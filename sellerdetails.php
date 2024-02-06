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

    echo "Connected to the database.";

    
    $dettype = $_POST["hidden"];
    $sname = $_POST["sname"];
    $smail = $_POST["smail"];
    $scont = $_POST["scont"];
    $saddr = $_POST["saddr"];

    // SQL query to insert data into a table (assuming table name is "sellerdetails")
    $sql = "INSERT INTO sellerdetails (dettype, sname, smail, scont, saddr) VALUES (:dettype, :sname, :smail, :scont, :saddr)";

    // Prepare the SQL statement
    $stmt = $pdo->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':dettype', $dettype, PDO::PARAM_STR);
    $stmt->bindParam(':sname', $sname, PDO::PARAM_STR);
    $stmt->bindParam(':smail', $smail, PDO::PARAM_STR);
    $stmt->bindParam(':scont', $scont, PDO::PARAM_INT);
    $stmt->bindParam(':saddr', $saddr, PDO::PARAM_STR);

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $stmt->errorInfo()[2];
    }

    if ($dettype == "fix") {
        header("Location: sellfixsecond.html");
    exit;
    }
    
    else if ($dettype == "bid") {
        header("Location: sellbidsecond.html");
    exit;
    }

    
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>


