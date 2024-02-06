
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

    // session_start();
    // $usid = $_SESSION['usid'];


    session_start();
    $usid = $_SESSION['usid'];


    // $usid = "";

    // Fetch details from the 'logsign' table
    $detailsQuery = "SELECT * FROM logsign WHERE usid = :usid";
    $stmt = $pdo->prepare($detailsQuery);
    $stmt->bindParam(':usid', $usid);

    $stmt->execute();

    // Fetch the details
    $logsignData = $stmt->fetch(PDO::FETCH_ASSOC);


    // if($_SERVER["REQUEST_METHOD"]=="GET"){
    //     if(isset($_GET['key1'])){
    //         $key="home";
    //     }
    //     if(isset($_GET['key2'])){
    //         $key="company";
    //     }
    // }

    $key="home";
    

    // Extract the values from the fetched data
    $sfname = $logsignData['fname'];
    $slname = $logsignData['lname'];
    $smail = $logsignData['mailid'];
    $scont = $logsignData['mob'];

    if ($key="home") {
        $saddr = $logsignData['homeaddr'];
    }
    else {
        $saddr= $logsignData['companyaddr'];
    }





    //Fetching from html
    $dettype = $_POST["hidden"];
    $pname = $_POST["pname"];
    $category = $_POST["category"];
    $newold = $_POST["age"];
    $pyear = $_POST["pyear"];
    $price = $_POST["price"];
    $quant = $_POST["quant"];
    $pdesc = $_POST["pdesc"];
    $pimage = $_POST["image"];


    // SQL query to insert data into the 'sellfix' table
    $sql = "INSERT INTO sellfix (usid, sfname, slname, smail, scont, saddr, dettype, pname, category, newold, pyear, price, quant, pdesc, pimage) 
            VALUES (:usid, :sfname, :slname, :smail, :scont, :saddr, :dettype, :pname, :category, :newold, :pyear, :price, :quant, :pdesc, :pimage)";

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
    $stmt->bindParam(':newold', $newold, PDO::PARAM_STR);
    $stmt->bindParam(':pyear', $pyear, PDO::PARAM_INT);
    $stmt->bindParam(':price', $price, PDO::PARAM_INT);
    $stmt->bindParam(':quant', $quant, PDO::PARAM_INT);
    $stmt->bindParam(':pdesc', $pdesc, PDO::PARAM_STR);
    $stmt->bindParam(':pimage',$pimage , PDO::PARAM_STR );


    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Data inserted successfully";
        header("Location: profile.htm");
    } else {
        echo "Error: " . implode(", ", $stmt->errorInfo());
    }
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>