
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



    //$usid = $GLOBALS['usid'];

    $data = json_decode(file_get_contents("php://input"));



    
    session_start(); // Start the PHP session (on every page where you want to access the user ID)

    // Access the user ID
    $usid = $_SESSION['usid'];
    
        
    $fname = $data->fname;
    $lname = $data->lname;
    $mailid = $data->mailid;
    $mob = $data->mob;
    $homeaddr = $data->homeaddr;
    $companyaddr = $data->companyaddr;


     // Update the database with the new address values
     $sql = "UPDATE logsign SET fname = :fname, lname = :lname, mailid = :mailid, mob = :mob, homeaddr = :homeaddr, companyaddr = :companyaddr WHERE usid = :usid";
     $stmt = $pdo->prepare($sql);
     $stmt->bindParam(':fname', $fname, PDO::PARAM_STR);
     $stmt->bindParam(':lname', $lname, PDO::PARAM_STR);
     $stmt->bindParam(':mailid', $mailid, PDO::PARAM_STR);
     $stmt->bindParam(':mob', $mob, PDO::PARAM_STR);
     $stmt->bindParam(':homeaddr', $homeaddr, PDO::PARAM_STR);
     $stmt->bindParam(':companyaddr', $companyaddr, PDO::PARAM_STR);
     $stmt->bindParam(':usid', $usid, PDO::PARAM_INT);

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . implode(", ", $stmt->errorInfo());
    }




} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
// ?>