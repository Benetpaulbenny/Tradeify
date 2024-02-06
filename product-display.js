let xhrYourProducts = new XMLHttpRequest();
xhrYourProducts.open("GET", "product_disp.php", true);
xhrYourProducts.send();

xhrYourProducts.onreadystatechange = function() {
    if (xhrYourProducts.readyState === 4 && xhrYourProducts.status === 200) {
        let data = JSON.parse(xhrYourProducts.responseText);
        displayProducts(data, "my-orders-content");
    }
};

function displayProducts(products) {
    const changer = document.getElementById("my-orders-content"); // Container where products will be displayed

    // Loop through the products array
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        // Ensure that "price" is treated as a number
        const price = parseFloat(product.price);

        // Create a div for each product
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        // Populate the product div with product information
        productDiv.innerHTML = `
        <div class="prod_img">
        <span class="prod_img"></span>
    </div>
    <div class="prod-sec-secn">
        
            <h2 class="prod_name">${product.pname}</h2>

          
            <p class="prod_id">#PID${product.proid}</p>
            <p class="prod_selr_nm">Seller name: ${product.sfname}</p>
        
    </div>
    <div class="prod-sec-three">
            <p class="product-type-subtitle">Type of purchase: </p>
            <p class="product-purchase-type">${product.dettype}</p>
    </div>  
    
    <div class="prod-sec-four">
                <span class="product-price">$${price.toFixed(2)}</span>
            </div>
        `;

        // Append the product div to the container
        changer.appendChild(productDiv);
    }
}