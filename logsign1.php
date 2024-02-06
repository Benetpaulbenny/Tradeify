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

    // Sample data to insert
    $fname = $_POST["fname-sgp"];
    $lname = $_POST["lname-sgp"];
    $mailid = $_POST["email-sgp"];
    $mob = $_POST["phone-sgp"];
    $usid = $_POST["usr-id-sgp"];
    $pass = $_POST["pass-sgp"];
    $btn = $_POST["sign-up-btn"];

    

    
    
        if ($btn == "Verify") {
        
            if(strlen($usid)<5 || strlen($usid)>10)
            {
                die("User-ID should from 5 to 10 characters");
            }
            else
            {   
            $sql = "SELECT COUNT(*) FROM logsign WHERE usid = :usid";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(":usid", $usid, PDO::PARAM_STR);
            $stmt->execute();
            $count = $stmt->fetchColumn();
    
            // Check if the ID exists
            if ($count > 0) {
                die( "ID '$usid' already exists in the database.");
            } else {
                die("ID '$usid' is available.");
            }
        }
    }
    
    if (isset($_POST['sign-up-btn'])) {
        
    // SQL query to insert data into a table (assuming table name is "alamb")
    $sql = "INSERT INTO logsign (fname, lname, mailid, mob, usid, pass) VALUES (:fname, :lname, :mailid, :mob, :usid, :pass)";

    // Prepare the SQL statement
    $stmt = $pdo->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':fname', $fname, PDO::PARAM_STR);
    $stmt->bindParam(':lname', $lname, PDO::PARAM_STR);
    $stmt->bindParam(':mailid', $mailid, PDO::PARAM_STR);
    $stmt->bindParam(':mob', $mob, PDO::PARAM_INT);
    $stmt->bindParam(':usid', $usid, PDO::PARAM_STR);
    $stmt->bindParam(':pass', $pass, PDO::PARAM_STR);

    // Execute the prepared statement
    if ($stmt->execute()) {
        // $_GLOBALS['usid']=$usid;
        $globalvar1 = $usid;
        echo "Data inserted successfully";
        header("Location: profile.htm");    
    } 
     
        else {
        echo "Error: " . $stmt->errorInfo()[2];
    }

    echo $fname;    


    }
    
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>


