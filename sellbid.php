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

    session_start();
    $usid = $_SESSION['usid'];

    
    // Fetch details from the 'logsign' table
    $detailsQuery = "SELECT * FROM logsign WHERE usid = :usid";
    $stmt = $pdo->prepare($detailsQuery);
    $stmt->bindParam(':usid', $usid);

    $stmt->execute();

    // Fetch the details
    $logsignData = $stmt->fetch(PDO::FETCH_ASSOC);

    // $key=$_POST["key"];


    $key ="company";

    // Extract the values from the fetched data
    $sfname = $logsignData['fname'];
    $slname = $logsignData['lname'];
    $smail = $logsignData['mailid'];
    $scont = $logsignData['mob'];

    if ($key="company") {
        $saddr = $logsignData['homeaddr'];
    }
    else {
        $saddr= $logsignData['companyaddr'];
    }



    $dettype = $_POST["hidden"];
    $pname = $_POST["pname"];
    $category = $_POST["category"];
    $squant = $_POST["squant"];
    $pdesc = $_POST["pdesc"];
    $pyear = $_POST["pyear"];
    $price = $_POST["price"];
    $tdate = $_POST["tdate"];
    $pimage = $_POST["pimage"];



    // SQL query to insert data into a table (assuming table name is "sellerdetails")
    $sql = "INSERT INTO sellbid (usid, sfname, slname, smail, scont, saddr, dettype, pname, category, squant, pdesc, pyear, price, tdate, pimage) 
    VALUES (:usid, :sfname, :slname, :smail, :scont, :saddr, :dettype, :pname, :category, :squant, :pdesc, :pyear, :price, :tdate, :pimage)";

    // Prepare the SQL statement
    $stmt = $pdo->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':usid', $usid);
    $stmt->bindParam(':sfname', $sfname, PDO::PARAM_STR);
    $stmt->bindParam(':slname', $slname, PDO::PARAM_STR);

    $stmt->bindParam(':smail', $smail, PDO::PARAM_STR);
    $stmt->bindParam(':scont', $scont, PDO::PARAM_STR);
    $stmt->bindParam(':saddr', $saddr, PDO::PARAM_STR);
    $stmt->bindParam(':dettype', $dettype, PDO::PARAM_STR);

    $stmt->bindParam(':pname', $pname, PDO::PARAM_STR);
    $stmt->bindParam(':category', $category, PDO::PARAM_STR);
    $stmt->bindParam(':squant', $squant, PDO::PARAM_STR);
    $stmt->bindParam(':pdesc', $pdesc, PDO::PARAM_STR);
    $stmt->bindParam(':pyear', $pyear, PDO::PARAM_INT);
    $stmt->bindParam(':price', $price, PDO::PARAM_INT);
    $stmt->bindParam(':tdate',$tdate , PDO::PARAM_STR );
    $stmt->bindParam(':pimage',$pimage , PDO::PARAM_STR );

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Data inserted successfully";
        header("Location: profile.htm");

    } else {
        echo "Error: " . $stmt->errorInfo();
    }

    
    
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>


