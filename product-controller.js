


document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    
        // ... code for scrolling left ...
        document.getElementById("product-controller-button-left").addEventListener("click", function(){
            document.querySelector('.product-division').scrollBy({
                top: 0,
                left: -500, // Adjust this value based on the item width or your requirement
                behavior: 'smooth'
            });
        });



        document.getElementById("product-controller-button-right").addEventListener("click", function(){
            document.querySelector('.product-division').scrollBy({
                top: 0,
                left: 500, // Adjust this value based on the item width or your requirement
                behavior: 'smooth'
            });
        });
    });
