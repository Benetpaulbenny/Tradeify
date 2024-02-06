let yhr = new XMLHttpRequest();
yhr.open("GET", "cart-display.php", true);
yhr.send();

yhr.onreadystatechange = function() {
    if (yhr.readyState === 4 && yhr.status === 200) {
        let data = JSON.parse(yhr.responseText);
        displayProducts3(data, "cart-order");
    }
};

function displayProducts3(products, containerId) {
    const changer = document.getElementById(containerId);

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const price = parseFloat(product.price);

        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const imageElement = document.createElement("img");
        imageElement.src = product.pimage;
        imageElement.className = "pimage";
        imageElement.style.width = "7em";
        imageElement.style.height = "7em";

        productDiv.innerHTML = `
            <div class="prod_img">
                ${imageElement.outerHTML}
            </div>
            <div class="prod-sec-secn" onclick="onClick91(${product.proid})">
                <h2 class="prod_name">${product.pname}</h2>
                <p class="prod_id">#PID${product.proid}</p>
                <p class="prod_selr_nm">Seller name: ${product.sfname}</p>
            </div>
            <div class="prod-sec-three">
                <p class="product-type-subtitle">Type of purchase: </p>
                <p class="product-purchase-type">${product.dettype}</p>
            </div>
            <div class="prod-sec-four">
                <span class="product-price">₹${price.toFixed(2)}</span>
            </div>
        `;

        changer.appendChild(productDiv);
    }
}


// const products = [
//     { name: "Product 1", price: 10.99, pid: 65948,s_name: "seller name",purchase_type: "Auction"},
//     { name: "Product 1.2", price: 10.99, pid: 65948,s_name: "seller name" },
//     { name: "Product 2", price: 19.99 },
//     { name: "Product 3", price: 14.99 },
//     // Add more products as needed
// ];

// function displayProducts() {
//     const changer = document.getElementById("my-orders-content"); // Container where products will be displayed

//     // Loop through the products array
//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];

//         // Create a div for each product
//         const productDiv = document.createElement("div");
//         productDiv.className = "product";
        
//         // Populate the product div with product information
//         productDiv.innerHTML = `
//             <div class="prod_img">
//                 <span class="prod_img"></span>
//             </div>
//             <div class="prod-sec-secn">
                
//                     <h2 class="prod_name">${product.name}</h2>
    
                  
//                     <p class="prod_id">#PID${product.pid}</p>
//                     <p class="prod_selr_nm">Seller name: ${product.s_name}</p>
                
//             </div>
//             <div class="prod-sec-three">
//                     <p class="product-type-subtitle">Type of purchase: </p>
//                     <p class="product-purchase-type">${product.purchase_type}</p>
//             </div>
//             <div class="prod-sec-four">
//                 <span class="product-price">$${product.price.toFixed(2)}</span>
//             </div>    
//             `;
        
//         // Append the product div to the container
//         changer.appendChild(productDiv);
//     }
// }

// // Call the function to display products
// displayProducts();




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
