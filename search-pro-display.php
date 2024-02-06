
<?php
/*$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";


try {
    // Create a PDO connection to the database
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);

    // Set PDO to throw exceptions on errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

/*
    // Retrieving data based on search term, year range, and price range
    $searchTerm = isset($_GET['searchTerm']) ? $_GET['searchTerm'] : '';
    $yearMin = isset($_GET['yearMin']) ? $_GET['yearMin'] : '1900';
    $yearMax = isset($_GET['yearMax']) ? $_GET['yearMax'] : '2099';
    $priceMin = isset($_GET['priceMin']) ? $_GET['priceMin'] : '0';
    $priceMax = isset($_GET['priceMax']) ? $_GET['priceMax'] : '99999';

    $sql = "SELECT * FROM sellfix 
            WHERE (pname LIKE :searchTerm OR category LIKE :searchTerm)
            AND pyear BETWEEN :yearMin AND :yearMax
            AND price BETWEEN :priceMin AND :priceMax";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':searchTerm', $searchTerm);
    $stmt->bindParam(':yearMin', $yearMin);
    $stmt->bindParam(':yearMax', $yearMax);
    $stmt->bindParam(':priceMin', $priceMin);
    $stmt->bindParam(':priceMax', $priceMax);

    $stmt->execute();

    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($products) {
        echo json_encode($products);
    } else {
        echo "0 results";
    }




$usid = "top123";
    
    // Query to select product details from the 'sellfix' table based on 'usid'
   // Query to select product details from the 'sellfix' table based on 'usid'
   $sql = "SELECT pname, proid, dettype, pyear,newold CAST(price AS DECIMAL(10,2)) AS price, pimage FROM sellfix WHERE usid = :usid";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(":usid", $usid, PDO::PARAM_STR);
$stmt->execute();

// Fetch all the data as an associative array
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the data as JSON
echo json_encode($data);




} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}*/


/*
$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['search_query'])) {
        $search_query = $_POST['search_query'];
        $sort = $_POST['sort']; // Added sort value

        $sql = "SELECT * FROM sellfix,sellbid WHERE 1=1"; // Modify 'products' with your table name

        if (isset($_POST['newProduct'])) {
            if ($_POST['newProduct'] == 1) {
                $sql .= " AND newold = 'new'";
            } else {
                $startYear = $_POST['startYear'];
                $endYear = $_POST['endYear'];
                $sql .= " AND pyear BETWEEN :startYear AND :endYear";
            }
        }

        if (isset($_POST['typeofPurchase_norm']) && isset($_POST['typeofPurchase_auct'])) {
            $sql .= " AND (dettype = 'fix' OR dettype = 'bid')";
        } elseif (isset($_POST['typeofPurchase_norm'])) {
            $sql .= " AND dettype = 'fix'";
        } elseif (isset($_POST['typeofPurchase_auct'])) {
            $sql .= " AND dettype = 'bid'";
        }

        if (isset($_POST['sort'])) {
            $sortValue = $_POST['sort'];
            switch ($sortValue) {
                case "priceLowHigh":
                    $sql .= " ORDER BY price ASC";
                    break;
                case "priceHighLow":
                    $sql .= " ORDER BY price DESC";
                    break;
                case "newestFirst":
                    $sql .= " ORDER BY pyear DESC";
                    break;
                case "oldestFirst":
                    $sql .= " ORDER BY pyear ASC";
                    break;
            }
        }

        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($products) {
            echo json_encode($products);
        } else {
            echo json_encode(["message" => "No results found"]);
        }
    }
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}



$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['search_query'])) {        $search_query = $_POST['search_query'];
        $sort = $_POST['sort']; // Added sort value

        $sql = "SELECT * FROM sellfix, sellbid WHERE 1=1"; // Modify 'products' with your table name

        if (isset($_POST['newProduct'])) {
            if ($_POST['newProduct'] == 1) {
                $sql .= " AND newold = 'new'";
            } else {
                $startYear = $_POST['startYear'];
                $endYear = $_POST['endYear'];
                $sql .= " AND pyear BETWEEN :startYear AND :endYear";
            }
        }
        $sort = isset($_POST['sort']) ? $_POST['sort'] : '';


        if (isset($_POST['typeofPurchase_norm']) && isset($_POST['typeofPurchase_auct'])) {
            $sql .= " AND (dettype = 'normPurhase' OR dettype = 'auctPurhase')";
        } elseif (isset($_POST['typeofPurchase_norm'])) {
            $sql .= " AND dettype = 'normPurhase'";
        } elseif (isset($_POST['typeofPurchase_auct'])) {
            $sql .= " AND dettype = 'auctPurhase'";
        }
    

        if (!empty($sort)) {
            // Include sorting in the SQL query based on the sort value
            switch ($sort) {
                case "priceLowHigh":
                    $sql .= " ORDER BY price ASC";
                    break;
                case "priceHighLow":
                    $sql .= " ORDER BY price DESC";
                    break;
                case "newestFirst":
                    $sql .= " ORDER BY pyear DESC";
                    break;
                case "oldestFirst":
                    $sql .= " ORDER BY pyear ASC";
                    break;
                // Add more cases if needed for additional sort options
            }
        }

            
        $stmt = $pdo->prepare($sql);
        if (isset($_POST['startYear']) && isset($_POST['endYear'])) {
            $stmt->bindParam(':startYear', $_POST['startYear'], PDO::PARAM_INT);
            $stmt->bindParam(':endYear', $_POST['endYear'], PDO::PARAM_INT);
        }
        $stmt->execute();
        echo $sql;

        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        var_dump($products);

        if ($products) {
            echo json_encode($products);
        } else {
            echo json_encode(["message" => "No results found"]);
        }
    }
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['search_query'])) {
        $search_query = $_POST['search_query'];
        $sort = $_POST['sort']; // Added sort value
        

        $min=$_POST['min'];
        $max=$_POST['max'];

        $normPurchase=$_POST['normPurchase'];
        $auctPurchase=$_POST['auctPurchase'];

        $newProduct=$_POST['newProduct'];

        $minyear=$_POST['minyear'];
        $maxyear=$_POST['maxyear'];


        if ($min) {

            $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
            WHERE (pname LIKE :search_query OR category LIKE :search_query) AND price > :min)
            UNION
            (SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
            WHERE (pname LIKE :search_query OR category LIKE :search_query) AND price > :min)";

            // Sort based on different conditions
            if($sort){
            if ($sort === "priceLowHigh") {
                $sql .= " ORDER BY price ASC";
            } elseif ($sort === "priceHighLow") {
                $sql .= " ORDER BY price DESC";
            } elseif ($sort === "newestFirst") {
                $sql .= " ORDER BY pyear DESC";
            } elseif ($sort === "oldestFirst") {
                $sql .= " ORDER BY pyear ASC";
            }
            }   

            }

        if($max)
        {
            $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
            WHERE (pname LIKE :search_query OR category LIKE :search_query) AND price < :max)
            UNION
            (SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
            WHERE (pname LIKE :search_query OR category LIKE :search_query) AND price < :max)";

            // Sort based on different conditions
            if($sort){
            if ($sort === "priceLowHigh") {
                $sql .= " ORDER BY price ASC";
            } elseif ($sort === "priceHighLow") {
                $sql .= " ORDER BY price DESC";
            } elseif ($sort === "newestFirst") {
                $sql .= " ORDER BY pyear DESC";
            } elseif ($sort === "oldestFirst") {
                $sql .= " ORDER BY pyear ASC";
            }
            }   

            }


        

        if ($normPurchase) {
            $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
            WHERE (pname LIKE :search_query OR category LIKE :search_query))";

            // Sort based on different conditions
            if($sort){
            if ($sort === "priceLowHigh") {
                $sql .= " ORDER BY price ASC";
            } elseif ($sort === "priceHighLow") {
                $sql .= " ORDER BY price DESC";
            } elseif ($sort === "newestFirst") {
                $sql .= " ORDER BY pyear DESC";
            } elseif ($sort === "oldestFirst") {
                $sql .= " ORDER BY pyear ASC";
            }
            }   

            }

        

        if ($auctPurchase) {
            $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
            WHERE (pname LIKE :search_query OR category LIKE :search_query))";

            // Sort based on different conditions
            if($sort){
            if ($sort === "priceLowHigh") {
                $sql .= " ORDER BY price ASC";
            } elseif ($sort === "priceHighLow") {
                $sql .= " ORDER BY price DESC";
            } elseif ($sort === "newestFirst") {
                $sql .= " ORDER BY pyear DESC";
            } elseif ($sort === "oldestFirst") {
                $sql .= " ORDER BY pyear ASC";
            }
            }   

            }
        
        if ($newProduct) {
            $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
            WHERE (pname LIKE :search_query OR category LIKE :search_query) and newold='new')
            UNION
            (SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
            WHERE (pname LIKE :search_query OR category LIKE :search_query) and newold='new')";

            // Sort based on different conditions
            if($sort){
            if ($sort === "priceLowHigh") {
                $sql .= " ORDER BY price ASC";
            } elseif ($sort === "priceHighLow") {
                $sql .= " ORDER BY price DESC";
            } elseif ($sort === "newestFirst") {
                $sql .= " ORDER BY pyear DESC";
            } elseif ($sort === "oldestFirst") {
                $sql .= " ORDER BY pyear ASC";
            }
            }   

            }
        
            if ($minyear) {
                $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
                WHERE (pname LIKE :search_query OR category LIKE :search_query) AND pyear > :minyear)
                UNION
                (SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
                WHERE (pname LIKE :search_query OR category LIKE :search_query) AND pyear > :minyear)";
    
                // Sort based on different conditions
                if($sort){
                if ($sort === "priceLowHigh") {
                    $sql .= " ORDER BY price ASC";
                } elseif ($sort === "priceHighLow") {
                    $sql .= " ORDER BY price DESC";
                } elseif ($sort === "newestFirst") {
                    $sql .= " ORDER BY pyear DESC";
                } elseif ($sort === "oldestFirst") {
                    $sql .= " ORDER BY pyear ASC";
                }
                }   
                }

            if ($maxyear) {
                $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
                WHERE (pname LIKE :search_query OR category LIKE :search_query) AND pyear < :maxyear)
                UNION
                (SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
                WHERE (pname LIKE :search_query OR category LIKE :search_query) AND pyear < :maxyear)";
    
                // Sort based on different conditions
                if($sort){
                if ($sort === "priceLowHigh") {
                    $sql .= " ORDER BY price ASC";
                } elseif ($sort === "priceHighLow") {
                    $sql .= " ORDER BY price DESC";
                } elseif ($sort === "newestFirst") {
                    $sql .= " ORDER BY pyear DESC";
                } elseif ($sort === "oldestFirst") {
                    $sql .= " ORDER BY pyear ASC";
                }
                }   
                }



            }

            if (!$max && !$min && !$minyear &&!$maxyear && !$normPurchase &&!$auctPurchase && !$newProduct) {

                $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
                WHERE pname LIKE :search_query OR category LIKE :search_query)
                UNION
                (SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
                WHERE pname LIKE :search_query OR category LIKE :search_query)";
        
                // Sort based on different conditions
                if($sort){
                if ($sort === "priceLowHigh") {
                    $sql .= " ORDER BY price ASC";
                } elseif ($sort === "priceHighLow") {
                    $sql .= " ORDER BY price DESC";
                } elseif ($sort === "newestFirst") {
                    $sql .= " ORDER BY pyear DESC";
                } elseif ($sort === "oldestFirst") {
                    $sql .= " ORDER BY pyear ASC";
                }
                }
                }
                   

        $stmt = $pdo->prepare($sql);
        $searchTerm = "%$search_query%"; // Corrected variable name here
        $stmt->bindParam(':search_query', $searchTerm, PDO::PARAM_STR);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($products) {
            echo json_encode($products);
        } else {
            echo json_encode(["message" => "No results found"]);
        }
    
} catch (PDOException $e) {
    die(json_encode(["error" => "Connection failed: " . $e->getMessage()]));
}




$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['search_query'])) {
        $search_query = $_POST['search_query'];
        $sort = $_POST['sort']; // Added sort value

        

        $sql = "SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
                WHERE pname LIKE :search_query OR category LIKE :search_query
                UNION
                SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
                WHERE pname LIKE :search_query OR category LIKE :search_query";

        // Modify 'products' with your table name

        if (isset($_POST['newProduct']) && $_POST['newProduct'] == 1) {
            $sql .= " AND newold = 'new'";
        }

        if (isset($_POST['min']) && is_numeric($_POST['min'])) {
            $min = $_POST['min'];
            $sql .= " AND price > :min";
        }

        if (isset($_POST['max']) && is_numeric($_POST['max'])) {
            $max = $_POST['max'];
            $sql .= " AND price < :max";
        }

        // Add more conditions as needed

        if (isset($_POST['normPurchase']) && isset($_POST['auctPurchase'])) {
            $sql .= " AND (dettype = 'fix' OR dettype = 'bid')";
        } elseif (isset($_POST['normPurchase'])) {
            $sql .= " AND dettype = 'fix'";
        } elseif (isset($_POST['auctPurchase'])) {
            $sql .= " AND dettype = 'bid'";
        }

        if (!empty($sort)) {
            // Include sorting in the SQL query based on the sort value
            switch ($sort) {
                case "priceLowHigh":
                    $sql .= " ORDER BY price ASC";
                    break;
                case "priceHighLow":
                    $sql .= " ORDER BY price DESC";
                    break;
                case "newestFirst":
                    $sql .= " ORDER BY pyear DESC";
                    break;
                case "oldestFirst":
                    $sql .= " ORDER BY pyear ASC";
                    break;
                // Add more cases if needed for additional sort options
            }
        }

        $stmt = $pdo->prepare($sql);

        if (isset($min)) {
            $stmt->bindParam(':min', $min, PDO::PARAM_INT);
        }

        if (isset($max)) {
            $stmt->bindParam(':max', $max, PDO::PARAM_INT);
        }

        $searchTerm = "%$search_query%";
        $stmt->bindParam(':search_query', $searchTerm, PDO::PARAM_STR);

        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($products) {
            echo json_encode($products);
        } else {
            echo json_encode(["message" => "No results found"]);
        }
    }
} catch (PDOException $e) {
    die(json_encode(["error" => "Connection failed: " . $e->getMessage()]));
}

*/

$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['search_query'])) {
        $search_query = $_POST['search_query'];
        $sort = $_POST['sort']; // Added sort value

        $sql = "SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
                WHERE pname LIKE :search_query OR category LIKE :search_query
                UNION
                SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
                WHERE pname LIKE :search_query OR category LIKE :search_query";
        

        if (isset($_POST['newProduct']) && $_POST['newProduct'] == 1) {
            $sql .= " AND newold = 'new'";
        }

        if (isset($_POST['min']) && is_numeric($_POST['min'])) {
            $min = $_POST['min'];
            $sql .= " AND price > :min";
        }

        if (isset($_POST['max']) && is_numeric($_POST['max'])) {
            $max = $_POST['max'];
            $sql .= " AND price < :max";
        }

        // Add more conditions as needed

        if (isset($_POST['normPurchase']) && isset($_POST['auctPurchase'])) {
            $sql .= " AND (dettype = 'fix' OR dettype = 'bid')";
        } elseif (isset($_POST['normPurchase'])) {
            $sql .= " AND dettype = 'fix'";
        } elseif (isset($_POST['auctPurchase'])) {
            $sql .= " AND dettype = 'bid'";
        }

        if (!empty($sort)) {
            // Include sorting in the SQL query based on the sort value
            switch ($sort) {
                case "priceLowHigh":
                    $sql .= " ORDER BY price ASC";
                    break;
                case "priceHighLow":
                    $sql .= " ORDER BY price DESC";
                    break;
                case "newestFirst":
                    $sql .= " ORDER BY pyear DESC";
                    break;
                case "oldestFirst":
                    $sql .= " ORDER BY pyear ASC";
                    break;
                // Add more cases if needed for additional sort options
            }
        }

        $stmt = $pdo->prepare($sql);

        if (isset($min)) {
            $stmt->bindParam(':min', $min, PDO::PARAM_INT);
        }

        if (isset($max)) {
            $stmt->bindParam(':max', $max, PDO::PARAM_INT);
        }

        $searchTerm = "%$search_query%";
        $stmt->bindParam(':search_query', $searchTerm, PDO::PARAM_STR);

        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($products) {
            echo json_encode($products);
        } else {
            echo json_encode(["message" => "No results found"]);
        }
    }
} catch (PDOException $e) {
    die(json_encode(["error" => "Connection failed: " . $e->getMessage()]));
}


/*
$host = "localhost";
$username = "root";
$password = "";
$db = "tradeweb";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['search_query'])) {
        $search_query = $_POST['search_query'];
        $sort = $_POST['sort']; // Added sort value
        

        $sql = "(SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellfix 
        WHERE pname LIKE :search_query OR category LIKE :search_query)
        UNION
        (SELECT pname, price, dettype, newold, proid, pyear, pimage FROM sellbid 
        WHERE pname LIKE :search_query OR category LIKE :search_query)";

        // Sort based on different conditions
        if($sort){
        if ($sort === "priceLowHigh") {
            $sql .= " ORDER BY price ASC";
        } elseif ($sort === "priceHighLow") {
            $sql .= " ORDER BY price DESC";
        } elseif ($sort === "newestFirst") {
            $sql .= " ORDER BY pyear DESC";
        } elseif ($sort === "oldestFirst") {
            $sql .= " ORDER BY pyear ASC";
        }
        }

        $stmt = $pdo->prepare($sql);
        $searchTerm = "%$search_query%"; // Corrected variable name here
        $stmt->bindParam(':search_query', $searchTerm, PDO::PARAM_STR);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($products) {
            echo json_encode($products);
        } else {
            echo json_encode(["message" => "No results found"]);
        }
    } else {
        echo json_encode(["message" => "Invalid request or missing search query"]);
    }
} catch (PDOException $e) {
    die(json_encode(["error" => "Connection failed: " . $e->getMessage()]));
}
*/



?>









