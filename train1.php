
<?php
//DOn't clear this. It's a necessary code
session_start();
echo isset($_SESSION['loggedIn']) ? 'true' : 'false';
?>


