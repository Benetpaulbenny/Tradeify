
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




// document.addEventListener('DOMContentLoaded', function() {
//     var searchInput = localStorage.getItem('myVariable');
//     var sortValue = localStorage.getItem('sortValue');

//     fetch('search-pro-display.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `search_query=${searchInput}&sort=${sortValue}`
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then(data => {
//         if (Array.isArray(data) && data.length > 0) {
//             displayProducts(data);
//         } else {
//             const changer = document.getElementById("search-product-section");
//             changer.innerHTML = "No results found";
//         }
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
// });


/*
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for filter options
    document.getElementById('newProduct').addEventListener('change', handleFilterChange);
    document.getElementById('typeofPurchase-norm').addEventListener('change', handleFilterChange);
    document.getElementById('typeofPurchase-auct').addEventListener('change', handleFilterChange);
    document.getElementById('min-price').addEventListener('change', handleFilterChange);
    document.getElementById('max-price').addEventListener('change', handleFilterChange);
    // Event listener for other filters...

    // Initial data fetch
    fetchFilteredData();
});

function handleFilterChange() {
    fetchFilteredData();
}

function fetchFilteredData() {
    // Get filter values
    const newProduct = document.getElementById('newProduct').checked ? 1 : 0;
    const typeofPurchase_norm = document.getElementById('typeofPurchase-norm').checked ? 1 : 0;
    const typeofPurchase_auct = document.getElementById('typeofPurchase-auct').checked ? 1 : 0;
    const min_price = document.getElementById('min-price').value || '';
    const max_price = document.getElementById('max-price').value || '';
    // Get other filter values...

    // Fetch data with filter values
    fetch('search-pro-display.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `newProduct=${newProduct}
        typeofPurchase_norm=${typeofPurchase_norm}
        typeofPurchase_auct=${typeofPurchase_auct}
        min_price=${min_price}
        max_price=${max_price}`
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Handle received data
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
}


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
                    <p class="search-productPrice">$${price.toFixed(2)}</p>
                    <p class="typeofPurchase-norm">Normal Purchase</p>
                </div>`;
        } else if (product.newold !== "new" && product.dettype === "fix") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
                    <p class="search-productPrice">$${price.toFixed(2)}</p>
                    <p class="typeofPurchase-norm">Normal Purchase</p>
                </div>`;
        } else if (product.newold !== "new" && product.dettype === "bid") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-mfd">${product.pyear}</span><span id="productPid">#PID${product.proid}</span>
                    
                    <p class="search-productPrice"><span id="bidValue">Opening Bid: </span>$${price.toFixed(2)}</p>
                    <p class="typeofPurchase-auct">Auction Purchase</p>
                </div>`;
        } else {
            alert("Error: Conditional statement controller error! Check conditions in 'search-product-display.js'.");
        }

        changer.appendChild(productDiv); // Append the product div to the container
    });
}




/////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners for filter options
    document.getElementById('newProduct').addEventListener('change', handleFilterChange);
    document.getElementById('typeofPurchase-norm').addEventListener('change', handleFilterChange);
    document.getElementById('typeofPurchase-auct').addEventListener('change', handleFilterChange);
    document.getElementById('min-price').addEventListener('change', handleFilterChange);
    document.getElementById('max-price').addEventListener('change', handleFilterChange);

    // Initial data fetch
    fetchFilteredData();
});

function handleFilterChange() {
    fetchFilteredData();
}

function fetchFilteredData() {
    const newProduct = document.getElementById('newProduct').checked ? 1 : 0;
    const typeofPurchase_norm = document.getElementById('typeofPurchase-norm').checked ? 1 : 0;
    const typeofPurchase_auct = document.getElementById('typeofPurchase-auct').checked ? 1 : 0;
    const min_price = document.getElementById('min-price').value;
    const max_price = document.getElementById('max-price').value;

    // Fetch data with filter values
    fetch('search-pro-display.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `newProduct=${newProduct}&typeofPurchase_norm=${typeofPurchase_norm}&typeofPurchase_auct=${typeofPurchase_auct}&min_price=${min_price}&max_price=${max_price}`
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        displayProducts(data); // Call the function to display the products
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function displayProducts(products) {
    const changer = document.getElementById("search-product-section");
    changer.innerHTML = ''; // Clear the section before displaying new results

    if (products && products.length > 0) {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "productWrapper";
            // Adjust this part according to the structure of the product data
            const price = parseFloat(product.price);

            if (product.newold === "new" && product.dettype === "fix") {
                productDiv.innerHTML = `
                    <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                    <div class="product-summary">
                        <p class="productName">${product.pname}</p>
                        <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
                        <p class="search-productPrice">$${price.toFixed(2)}</p>
                        <p class="typeofPurchase-norm">Normal Purchase</p>
                    </div>`;
            } else if (product.newold !== "new" && product.dettype === "fix") {
                productDiv.innerHTML = `
                    <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                    <div class="product-summary">
                        <p class="productName">${product.pname}</p>
                        <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
                        <p class="search-productPrice">$${price.toFixed(2)}</p>
                        <p class="typeofPurchase-norm">Normal Purchase</p>
                    </div>`;
            } else if (product.newold !== "new" && product.dettype === "bid") {
                productDiv.innerHTML = `
                    <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                    <div class="product-summary">
                        <p class="productName">${product.pname}</p>
                        <span id="productAge-mfd">${product.pyear}</span><span id="productPid">#PID${product.proid}</span>
                        
                        <p class="search-productPrice"><span id="bidValue">Opening Bid: </span>$${price.toFixed(2)}</p>
                        <p class="typeofPurchase-auct">Auction Purchase</p>
                    </div>`;
            } else {
                alert("Error: Conditional statement controller error! Check conditions in 'search-product-display.js'.");
            }
    
            changer.appendChild(productDiv); // Append the product div to the container
        });
    }
   
    
    
    
    /////////////////////////////////////////////////
    
    
    document.addEventListener('DOMContentLoaded', function () {
        // Event listeners for filter options
        document.getElementById('newProduct').addEventListener('change', handleFilterChange);
        document.getElementById('typeofPurchase-norm').addEventListener('change', handleFilterChange);
        document.getElementById('typeofPurchase-auct').addEventListener('change', handleFilterChange);
        document.getElementById('min-price').addEventListener('change', handleFilterChange);
        document.getElementById('max-price').addEventListener('change', handleFilterChange);
        // Event listener for other filters...
    
        // Initial data fetch
        fetchFilteredData();
    });
    
    function handleFilterChange() {
        fetchFilteredData();
    }
    
    function fetchFilteredData() {
        // Get filter values
        const newProduct = document.getElementById('newProduct').checked ? 1 : 0;
        const typeofPurchase_norm = document.getElementById('typeofPurchase-norm').checked ? 1 : 0;
        const typeofPurchase_auct = document.getElementById('typeofPurchase-auct').checked ? 1 : 0;
        const min_price = document.getElementById('min-price').value || '';
        const max_price = document.getElementById('max-price').value || '';
        // Get other filter values...
    
        // Fetch data with filter values
        fetch('search-pro-display.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `newProduct=${newProduct}&typeofPurchase_norm=${typeofPurchase_norm}&typeofPurchase_auct=${typeofPurchase_auct}&min_price=${min_price}&max_price=${max_price}`
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                // Handle received data
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
    }
    
    
    function displayProducts(products) {
        const changer = document.getElementById("search-product-section");
        changer.innerHTML = ''; // Clear the section before displaying new results
    
        if (products && products.length > 0) {
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "productWrapper";
                // Adjust this part according to the structure of the product data
                const price = parseFloat(product.price);

            if (product.newold === "new" && product.dettype === "fix") {
                productDiv.innerHTML = `
                    <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                    <div class="product-summary">
                        <p class="productName">${product.pname}</p>
                        <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
                        <p class="search-productPrice">$${price.toFixed(2)}</p>
                        <p class="typeofPurchase-norm">Normal Purchase</p>
                    </div>`;
            } else if (product.newold !== "new" && product.dettype === "fix") {
                productDiv.innerHTML = `
                    <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                    <div class="product-summary">
                        <p class="productName">${product.pname}</p>
                        <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
                        <p class="search-productPrice">$${price.toFixed(2)}</p>
                        <p class="typeofPurchase-norm">Normal Purchase</p>
                    </div>`;
            } else if (product.newold !== "new" && product.dettype === "bid") {
                productDiv.innerHTML = `
                    <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                    <div class="product-summary">
                        <p class="productName">${product.pname}</p>
                        <span id="productAge-mfd">${product.pyear}</span><span id="productPid">#PID${product.proid}</span>
                        
                        <p class="search-productPrice"><span id="bidValue">Opening Bid: </span>$${price.toFixed(2)}</p>
                        <p class="typeofPurchase-auct">Auction Purchase</p>
                    </div>`;
            } else {
                alert("Error: Conditional statement controller error! Check conditions in 'search-product-display.js'.");
            }
    
            changer.appendChild(productDiv); // Append the product div to the container
        });
    } else {
        changer.innerHTML = "No results found"; // Display a message when no products are available
    }
}
 


document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for filter options
    document.getElementById('newProduct').addEventListener('change', handleFilterChange);
    document.getElementById('typeofPurchase-norm').addEventListener('change', handleFilterChange);
    document.getElementById('typeofPurchase-auct').addEventListener('change', handleFilterChange);
    document.getElementById('min-price').addEventListener('input', handleFilterChange);
    document.getElementById('max-price').addEventListener('input', handleFilterChange);

    // Initial data fetch
    fetchFilteredData();
});

function handleFilterChange() {
    fetchFilteredData();
}

function fetchFilteredData() {
    // Get filter values
    const newProduct = document.getElementById('newProduct').checked ? 1 : 0;
    const typeofPurchase_norm = document.getElementById('typeofPurchase-norm').checked ? 1 : 0;
    const typeofPurchase_auct = document.getElementById('typeofPurchase-auct').checked ? 1 : 0;
    const min_price = document.getElementById('min-price').value || '';
    const max_price = document.getElementById('max-price').value || '';

    const sortValue = localStorage.getItem('sortValue');

    const data = new URLSearchParams();
    data.append('newProduct', newProduct);
    data.append('typeofPurchase_norm', typeofPurchase_norm);
    data.append('typeofPurchase_auct', typeofPurchase_auct);
    data.append('min_price', min_price);
    data.append('max_price', max_price);
    data.append('sort', sortValue);  // Include the sort value

    fetch('search-pro-display.php', {
        method: 'POST',
        body: data
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        console.log('Response from the server:', data);
        try {
            const products = JSON.parse(data);
            console.log('Products:', products);
            if (Array.isArray(products) && products.length > 0) {
                displayProducts(products);
            } else {
                const changer = document.getElementById("search-product-section");
                changer.innerHTML = "No results found";
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}   

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
                    <p class="search-productPrice">$${price.toFixed(2)}</p>
                    <p class="typeofPurchase-norm">Normal Purchase</p>
                </div>`;
        } else if (product.newold !== "new" && product.dettype === "fix") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
                    <p class="search-productPrice">$${price.toFixed(2)}</p>
                    <p class="typeofPurchase-norm">Normal Purchase</p>
                </div>`;
        } else if (product.newold !== "new" && product.dettype === "bid") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-mfd">${product.pyear}</span><span id="productPid">#PID${product.proid}</span>
                    
                    <p class="search-productPrice"><span id="bidValue">Opening Bid: </span>$${price.toFixed(2)}</p>
                    <p class="typeofPurchase-auct">Auction Purchase</p>
                </div>`;
        } else {
            alert("Error: Conditional statement controller error! Check conditions in 'search-product-display.js'.");
        }

        changer.appendChild(productDiv); // Append the product div to the container
    });
}
*/

////////Don't clear the code it's being used!

/*
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('filterButton').addEventListener('click', function() {
        // Collect form data manually
        var min = document.getElementById('price-ranger-min').value;
        var max = document.getElementById('price-ranger-max').value;
        var normPurchase = document.getElementById('typeofPurchase-norm').checked;
        var auctPurchase = document.getElementById('typeofPurchase-auct').checked;
        var newProduct = document.getElementById('newProduct').checked;

        // You can add more form data as needed

        // Create an object with the form data
        var formData = {
            min: min,
            max: max,
            normPurchase: normPurchase,
            auctPurchase: auctPurchase,
            newProduct: newProduct
            // Add more properties as needed
        };

        // Perform a fetch request
        fetch('search-pro-display.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
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
});

*/



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
        /*

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
        } */
        
        if (product.newold === "new" && product.dettype === "fix") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary" onclick="onClick91(${product.proid})">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-new">New</span><span id="productPid">#PID${product.proid}</span>
                    <p class="search-productPrice">₹${price.toFixed(2)}</p>
                    <p class="typeofPurchase-norm">Normal Purchase</p>
                </div>`;
        } else if (product.newold !== "new" && product.dettype === "fix") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary" onclick="onClick91(${product.proid})">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-mfd">${product.pyear}</span><span id="productPid">#PID${product.proid}</span>
                    <p class="search-productPrice">₹${price.toFixed(2)}</p>
                    <p class="typeofPurchase-norm">Normal Purchase</p>
                </div>`;
        } else if (product.newold !== "new" && product.dettype === "bid") {
            productDiv.innerHTML = `
                <img src="${product.pimage}" alt="" class="search-productImage" loading="lazy">
                <div class="product-summary" onclick="onClick91(${product.proid})">
                    <p class="productName">${product.pname}</p>
                    <span id="productAge-mfd">${product.pyear}</span><span id="productPid">#PID${product.proid}</span>
                    <p class="search-productPrice"><span id="bidValue">Opening Bid: </span>₹${price.toFixed(2)}</p>
                    <p class="typeofPurchase-auct">Auction Purchase</p>
                </div>`;
        }
      
        
        
        
        else {
            alert("Error: Conditional statement controller error! Check conditions in 'search-product-display.js'.");
        }

        var productElement = productDiv.firstChild;
        var idno= product.proid;

        productElement.addEventListener("click",function () {
            onClick91(idno);
        })

        changer.appendChild(productDiv); // Append the product div to the container
    });
}



function onClick91(thisproid) {
    $(document).ready(function(){
        $.ajax({
            url: "alamb.php",
            method: "GET",
            data: { proid: thisproid }
        })
        .done(function(){
            console.log('AJAX request successful');
            // Redirect to the product landing page after a successful request
            window.location.href = "product-landing-page.html";
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            // Handle errors
            console.error('Error:', textStatus, errorThrown);
        });
    });
}

