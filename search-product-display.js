
// const searchProducts = [
// ];

// function searchProduct() {
//     const changer = document.getElementById("search-product-section"); // Container where searchProducts will be displayed

//     // Loop through the searchProducts array
//     for (let i = 0; i < searchProducts.length; i++) {
//         const product = searchProducts[i];
//         // Create a div for each product
//                                                                 // Normal-New
//         if(p_age==="new" && purchase_type==="Normal"){
//             const productDiv = document.createElement("div");
//             productDiv.className = "productWrapper";
            
//             productDiv.innerHTML = `
//                 <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//                 <div class="product-summary">
//                     <p class="productName">${product.name}</p>
//                     <span id="productAge-new">New</span><span id="productPid">#PID${product.pid}</span>
//                     <p class="search-productPrice">$${product.price.toFixed(2)}</p>
//                     <p class="typeofPurchase-norm">Normal Purchase</p>
//                 </div>
//                 `;
//         }
//         else if(p_age!="new" && purchase_type==="Normal"){          //Normal -Old
//             const productDiv = document.createElement("div");
//             productDiv.className = "productWrapper";
            
//             productDiv.innerHTML = `
//             <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//             <div class="product-summary">
//                 <p class="productName">${product.name}</p>
//                 <span id="productAge-mfd">${product.mfy}</span>
//                 <p class="search-productPrice"><span id="bidValue">Opening Bid : </span>$${product.price.toFixed(2)}</p>
//                 <p class="typeofPurchase-norm">Normal Purchase</p>
//             </div>
//                 `;
//         }
//         else if(p_age!="new" && purchase_type==="Auction"){         //Auction -old
//             const productDiv = document.createElement("div");
//             productDiv.className = "productWrapper";
            
//             productDiv.innerHTML = `
//             <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//             <div class="product-summary">
//                 <p class="productName">${product.name}</p>
//                 <span id="productAge-mfd">${product.mfy}</span>
//                 <p class="search-productPrice"><span id="bidValue">Opening Bid : </span>$${product.price.toFixed(2)}</p>
//                 <p class="typeofPurchase-auct">Auction Purchase</p>
//             </div>
//                 `;
//         }
//         else{
//             alert("error:Conditional statement controller error! Check conditional in 'search-product-display.js'.")  
//         }
        
        

//         // Append the product div to the container
//         changer.appendChild(productDiv);
//     }
// } 




//

// function searchProduct() {
//     // Get the search query from the input field
//     const searchQuery = document.querySelector('.search__input').value;

//     // Make an AJAX request to your PHP script
//     fetch('search-pro-display.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: 'search_query=' + searchQuery
//     })
//     .then(response => response.json())
//     .then(data => {
//         const changer = document.getElementById("search-product-section");

//         if (data && data.length > 0) {
//             // Clear the product section
//             changer.innerHTML = "";

//             data.forEach(product => {
//                 const productDiv = document.createElement("div");
//                 productDiv.className = "productWrapper";

//                 // Adjust the conditions for product display as per your HTML structure
//                 // This is a sample representation, modify it to fit your product display structure
//                 if (product.newold === "new" && product.dettype === "fix") {
//                     productDiv.innerHTML = `
//                         <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//                         <div class="product-summary">
//                             <p class="productName">${product.pname}</p>
//                             <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
//                             <p class="search-productPrice">$${product.price.toFixed(2)}</p>
//                             <p class="typeofPurchase-norm">Normal Purchase</p>
//                         </div>`;
//                 } else if (product.newold !== "new" && product.dettype === "Normal") {
//                     productDiv.innerHTML = `
//                         <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//                         <div class="product-summary">
//                             <p class="productName">${product.pname}</p>
//                             <span id="productAge-mfd">${product.pyear}</span>
//                             <p class="search-productPrice"><span id="bidValue">Opening Bid : </span>$${product.price.toFixed(2)}</p>
//                             <p class="typeofPurchase-norm">Normal Purchase</p>
//                         </div>`;
//                 } else if (product.newold !== "new" && product.dettype === "bid") {
//                     productDiv.innerHTML = `
//                         <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//                         <div class="product-summary">
//                             <p class="productName">${product.pname}</p>
//                             <span id="productAge-mfd">${product.pyear}</span>
//                             <p class="search-productPrice"><span id="bidValue">Opening Bid : </span>$${product.price.toFixed(2)}</p>
//                             <p class="typeofPurchase-auct">Auction Purchase</p>
//                         </div>`;
//                 } else {
//                     alert("Error: Conditional statement controller error! Check conditions in 'search-product-display.js'.");
//                 }

//                 // Append the product div to the container
//                 changer.appendChild(productDiv);
//             });
//         } else {
//             changer.innerHTML = "No results found";
//         }
//     })
//     .catch(error => console.error('Error:', error));
// }

/////////////////////////////////////////////////////






// // This function displays the fetched products
// function displayProducts(products) {
//     const changer = document.getElementById("search-product-section");
//     changer.innerHTML = ''; // Clear the section before displaying new results

//     if (products.length > 0) {
//         products.forEach(product => {
//             const productDiv = document.createElement("div");
//             productDiv.className = "productWrapper";

//             // Adjust the conditions for product display according to your HTML structure
//             // This is a sample representation, modify it to fit your product display structure
//             if (product.newold === "new" && product.dettype === "fix") {
//                 productDiv.innerHTML = `
//                         <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//                         <div class="product-summary">
//                             <p class="productName">${product.pname}</p>
//                             <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
//                             <p class="search-productPrice">$${product.price.toFixed(2)}</p>
//                             <p class="typeofPurchase-norm">Normal Purchase</p>
//                         </div>`;
//             } else if (product.newold !== "new" && product.dettype === "Normal") {
//                 productDiv.innerHTML = `
//                         <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//                         <div class="product-summary">
//                             <p class="productName">${product.pname}</p>
//                             <span id="productAge-mfd">${product.pyear}</span>
//                             <p class="search-productPrice"><span id="bidValue">Opening Bid : </span>$${product.price.toFixed(2)}</p>
//                             <p class="typeofPurchase-norm">Normal Purchase</p>
//                         </div>`;
//             } else if (product.newold !== "new" && product.dettype === "bid") {
//                 productDiv.innerHTML = `
//                 <img src="specimen.JPG" alt="" class="search-productImage" loading="lazy">
//                 <div class="product-summary">
//                     <p class="productName">${product.pname}</p>
//                     <span id="productAge-mfd">${product.pyear}</span>
//                     <p class="search-productPrice"><span id="bidValue">Opening Bid : </span>$${product.price.toFixed(2)}</p>
//                     <p class="typeofPurchase-auct">Auction Purchase</p>
//                 </div>`;
//             } else {
//                 alert("Error: Conditional statement controller error! Check conditions in 'search-product-display.js'.");
//             }

//             changer.appendChild(productDiv); // Append the product div to the container
//         });
//     } else {
//         changer.innerHTML = "No results found";
//     }
// }




/////////////////////////////////////////////////
/*
let xhr = new XMLHttpRequest();
xhr.open("POST", "search-pro-display.php", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            try {
                if (xhr.responseText) {
                    let data = JSON.parse(xhr.responseText);
                    if (Array.isArray(data) && data.length > 0) {
                        displayProducts(data);
                    } else {
                        console.error("Empty or invalid JSON response.");
                    }
                } else {
                    console.error("Received empty response.");
                }
            } catch (error) {
                console.error("Error parsing JSON data:", error);
                console.log("Received data:", xhr.responseText);
            }
        } else {
            console.error("Error in the request. Status:", xhr.status);
        }
    }
};

*/

//This not used go to jaba.js
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = localStorage.getItem('myVariable');
    var sortValue = localStorage.getItem('sortValue');

    fetch('search-pro-display.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `search_query=${searchInput}&sort=${sortValue}`
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        if (Array.isArray(data) && data.length > 0) {
            displayProducts(data);
        } else {
            const changer = document.getElementById("search-product-section");
            changer.innerHTML = "No results found";
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});


function displayProducts(products) {
    const changer = document.getElementById("search-product-section");
    changer.innerHTML = ''; // Clear the section before displaying new results

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "productWrapper";

        const price = parseFloat(product.price);

        if (product.newold === "new" && product.dettype === "fix") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
                    <p class="search-productPrice">₹${price.toFixed(2)}</p>
                    <p class="typeofPurchase-norm">Normal Purchase</p>
                </div>`;
        } else if (product.newold !== "new" && product.dettype === "fix") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-mfd">${product.pyear}</span><span id="productPid">#PID${product.proid}</span>
                    <p class="search-productPrice">₹${price.toFixed(2)}</p>
                    <p class="typeofPurchase-norm">Normal Purchase</p>
                </div>`;
        } else if (product.newold !== "new" && product.dettype === "bid") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-mfd">${product.pyear}</span><span id="productPid">#PID${product.proid}</span>
                    
                    <p class="search-productPrice"><span id="bidValue">Opening Bid: </span>₹${price.toFixed(2)}</p>
                    <p class="typeofPurchase-auct">Auction Purchase</p>
                </div>`;
        } else {
            alert("Error: Conditional statement controller error! Check conditions in 'search-product-display.js'.");
        }

        changer.appendChild(productDiv); // Append the product div to the container
    });
}






/*
php code aan aavishyam varum kedannotte sorting aan


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
        if ($sort === "priceLowHigh") {
            $sql .= " ORDER BY price ASC";
        } elseif ($sort === "priceHighLow") {
            $sql .= " ORDER BY price DESC";
        } elseif ($sort === "newestFirst") {
            $sql .= " ORDER BY pyear DESC";
        } elseif ($sort === "oldestFirst") {
            $sql .= " ORDER BY pyear ASC";
        }

        $stmt = $pdo->prepare($sql);
        $searchTerm = "%$search_query%";
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
    die("Connection failed: " . $e->getMessage());
}




*/