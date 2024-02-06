
// document.addEventListener('DOMContentLoaded', function() {
//     const element = document.querySelector('.some-element');
//     element.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the form from submitting

//         const proid = productDiv.getAttribute('data-proid');

//         fetchProductDetails(proid);
//     });
// });

// function fetchProductDetails(proid) {
//     fetch(`landing-page-display.php?proid=${proid}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // Verify data received in the console
//             showEverything(data); // Pass the retrieved data to the function
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }



// function toggleClassList(){
//     document.getElementById('placeBid').classList.toggle('active');
// }
// function changeCount(amount) {
//     const countInput = document.getElementById('bidAmountInput');
//     const currentValue = parseInt(countInput.value, 10);
//     countInput.value = currentValue + amount;
// }
// // var currentBidValue = document.getElementById('currentBid');
// // document.getElementById('bidAmountInput').value = currentBidValue;
// // document.getElementById('bidAmountInput').addEventListener('input', function(e) {
// //     const minValue = currentBidValue;
// //     const currentValue = e.target.value;
    
// //     if (currentValue < minValue) {
// //       alert('The bid amount must be at least ' + minValue + '.');
// //     }
// //   });

// function showEverything(product) {
//     console.log(product); // Verify the structure of 'product' object in the console

//     // Use the 'product' object received from the AJAX request to display details
//     if (product && product.length > 0) {
//         const firstProduct = product[0]; // Assuming the first product is what you need


//     // document.getElementById('productImage-l-p').innerHTML = ; image section
    
//     if(product.dettype=="fix"){
//         document.getElementById('buy-add-button').style.display='block';
        
//         document.getElementById("showMOP-norm").style.display = "block";
        
//         document.getElementById("product-pricing").style.display = "block";
//         document.getElementById("product-pricing").innerHTML = "₹ " + product.price;

//     }
//     else{
//         document.getElementById('bidButton').style.display='block';
//         document.getElementById('dateEnd').innerHTML = product.tdate;
        
//         document.getElementById("showMOP-auct").style.display = "block";
        
//         document.getElementById("auction-pricing").style.display = "block";
//         document.getElementById("currentBid").innerHTML = "₹ " + product.price;
//         document.getElementById("openBid").innerHTML = "₹ " + product.openprice;
    
//     }

//     document.getElementById('landProduct-name').innerHTML = product.pname;
//     document.getElementById('showCategory').innerHTML = product.category;
//     document.getElementById('showPID').innerHTML = product.proid;

//     if(product.age=="new"){
//         document.getElementById("showP-Age-new").style.display = block;
//     }
//     else{
//         document.getElementById("showP-Age-mfd").style.display = block;
//         document.getElementById("showP-Age-mfd").innerHTML =  product.pyear;
//     }

//     document.getElementById('l-p-description').innerHTML = product.pdesc;

//     document.getElementById('l-p-sellerName').innerHTML = "Seller: "+ product.sfname+product.slname;
//     document.getElementById('l-p-sellerContact').innerHTML = product.sellermobile + "<br>" + product.smail;
//     document.getElementById('l-p-sellerAddress').innerHTML = product.saddr;
// } else {
//     console.error('No product data received or empty response.');
// }

// };






/*
document.addEventListener('DOMContentLoaded', function() {
    // Assuming you're trying to attach a click event listener to an element with a class name of 'some-element'
    const element = document.querySelector('.some-element');
    if (element) {
        element.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the clicked element

            // You might need to modify this part based on your actual HTML structure
            const productDiv = document.querySelector('.product-1-1');
            if (productDiv) {
                const proid = productDiv.getAttribute('data-proid');
                fetchProductDetails(proid);
            }
        });
    }
});

function fetchProductDetails(proid) {
    fetch(`landing-page-display.php?proid=${proid}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            showEverything(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function toggleClassList(){
    document.getElementById('placeBid').classList.toggle('active');
}
function changeCount(amount) {
    const countInput = document.getElementById('bidAmountInput');
    const currentValue = parseInt(countInput.value, 10);
    countInput.value = currentValue + amount;
}
// var currentBidValue = document.getElementById('currentBid');
// document.getElementById('bidAmountInput').value = currentBidValue;
// document.getElementById('bidAmountInput').addEventListener('input', function(e) {
//     const minValue = currentBidValue;
//     const currentValue = e.target.value;
    
//     if (currentValue < minValue) {
//       alert('The bid amount must be at least ' + minValue + '.');
//     }
//   });

function showEverything(product) {
 // Assuming the first product is what you need


    // document.getElementById('productImage-l-p').innerHTML = ; image section
    
    if(product.dettype=="fix"){
        document.getElementById('buy-add-button').style.display='block';
        
        document.getElementById("showMOP-norm").style.display = "block";
        
        document.getElementById("product-pricing").style.display = "block";
        document.getElementById("product-pricing").innerHTML = "₹ " + product.price;

    }
    else{
        document.getElementById('bidButton').style.display='block';
        document.getElementById('dateEnd').innerHTML = product.tdate;
        
        document.getElementById("showMOP-auct").style.display = "block";
        
        document.getElementById("auction-pricing").style.display = "block";
        document.getElementById("currentBid").innerHTML = "₹ " + product.price;
        document.getElementById("openBid").innerHTML = "₹ " + product.openprice;
    
    }

    document.getElementById('landProduct-name').innerHTML = product.pname;
    document.getElementById('showCategory').innerHTML = product.category;
    document.getElementById('showPID').innerHTML = product.proid;

    if(product.age=="new"){
        document.getElementById("showP-Age-new").style.display = block;
    }
    else{
        document.getElementById("showP-Age-mfd").style.display = block;
        document.getElementById("showP-Age-mfd").innerHTML =  product.pyear;
    }

    document.getElementById('l-p-description').innerHTML = product.pdesc;

    document.getElementById('l-p-sellerName').innerHTML = "Seller: "+ product.sfname+product.slname;
    document.getElementById('l-p-sellerContact').innerHTML = product.sellermobile + "<br>" + product.smail;
    document.getElementById('l-p-sellerAddress').innerHTML = product.saddr;

};


    
const urlParams = new URLSearchParams(window.location.search);
const proid = urlParams.get('proid');

if (proid) {
    fetchProductDetails(proid);
}*/

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "landing-page-display.php", true);
// xhr.send();

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         let data = JSON.parse(xhr.responseText);
//         showEverything(data);

//     }
// };

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('product_disp.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
        
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then(data => {
//         if (Array.isArray(data) && data.length > 0) {
//             showEverything(data);
//         } 
//     })
//     // .catch(error => {
//     //     console.error('There was a problem with the fetch operation:', error);
//     // });
// });


//Another part



// document.addEventListener('DOMContentLoaded', function() {
//     var searchInput = localStorage.getItem('myVariable');
//     var sortValue = localStorage.getItem('sortValue');

//     fetch('product_disp.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
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
//     // .catch(error => {
//     //     console.error('There was a problem with the fetch operation:', error);
//     // });
// });



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




function toggleClassList(){
    document.getElementById('placeBid').classList.toggle('active');
}
function changeCount(amount) {
    const countInput = document.getElementById('bidAmountInput');
    const currentValue = parseInt(countInput.value, 10);
    countInput.value = currentValue + amount;
}
// var currentBidValue = document.getElementById('currentBid');
// document.getElementById('bidAmountInput').value = currentBidValue;
// document.getElementById('bidAmountInput').addEventListener('input', function(e) {
//     const minValue = currentBidValue;
//     const currentValue = e.target.value;
    
//     if (currentValue < minValue) {
//       alert('The bid amount must be at least ' + minValue + '.');
//     }
//   });



