<?php
// Assuming $row is the result of a database query
$imageData = $row['image'];
$imageType = 'image/jpeg'; // Change this based on your image type
header("Content-type: $imageType");
echo $imageData;
?>
