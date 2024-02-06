
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


    // session_start();
    // $_SESSION['usid']=$user['usid'];

    session_start(); // Start the PHP session (on every page where you want to access the user ID)


    if (isset($_SESSION['loggedIn'])){

        
    // Access the user ID
    $usid = $_SESSION['usid'];
    
    //Login button replace fixed

    $sql = "SELECT * FROM logsign WHERE usid = :usid";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":usid", $usid, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Return the name
    echo $user['fname'];

    }
    else
    {
        echo "Login";
    }







} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>