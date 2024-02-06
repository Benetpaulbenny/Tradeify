// document.addEventListener('DOMContentLoaded', function() {
//     // fetch('product_disp.php', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-Type': 'application/x-www-form-urlencoded',
//     //     },
        
//     // })
//     // .then(response => {
//     //     if (response.ok) {
//     //         return response.json();
//     //     }
//     //     throw new Error('Network response was not ok.');
//     // })
//     // .then(data => {
//     //     if (Array.isArray(data) && data.length > 0) {
//     //         showEverything(data);
//     //     } 
//     // })
//     // .catch(error => {
//     //     console.error('There was a problem with the fetch operation:', error);
//     // });
    
// });

//Most recent
/*
var globdata;

function onClick91(thisproid) {
    $(document).ready(function(){
  $.ajax({
     url: "alamb.php",
     method: "GET",
     data: { proid: thisproid },
     dataType: 'json',
     headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
     success: function(data){
        // Handle the response from the PHP script
        // localStorage.setItem('thisdata', JSON.stringify(data));
        

        
        // showEverything(data);
        localStorage.setItem('myArray', JSON.stringify(data));
        globdata=data;
        
        window.location.href="product-landing-page.html";
        
     }
  });
});

    // window.location = "product-landing-page.html" ;
    // value="115"
    // localStorage.setItem('proid',value);


}*/
/*
function onClick91(thisproid) {
    fetch('alamb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `proid=${thisproid}`, // Include the thisproid parameter in the request body
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        if (Array.isArray(data) && data.length > 0) {
            showEverything(data);
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
*/


var globdata;

function onClick91(thisproid) {
    $(document).ready(function(){
        $.ajax({
            url: "alamb.php",
            method: "GET",
            data: { proid: thisproid },
            dataType: 'json',
            success: function(data){
                

                // Redirect to the product landing page after getting data
                // window.location.href = "product-landing-page.html";
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown);
            }
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

function showEverything() {
    var product = JSON.parse(localStorage.getItem('myArray'));
    alert(product);
    // document.getElementById('productImage-l-p').innerHTML = `<img src="${product.pimage}" loading="lazy" alt="" id="landProduct-image">`;
    //[{"pname":"Spigen Mobile Case","proid":115,"sfname":"Jack","dettype":"fix","price":"600.00","pimage":"IMG_0092.jpg"}]
    if(product.dettypeValue=="fix"){
        document.getElementById('buy-add-button').style.display="block";
        
        document.getElementById("showMOP-norm").style.display = "block";
        
        document.getElementById("product-pricing").style.display = "block";
        document.getElementById("product-pricing").innerHTML = "₹ " + product.price;

    }
    else{
        document.getElementById('bidButton').style.display = 'block';
        document.getElementById('dateEnd').innerHTML = product.tdate;
        
        document.getElementById("showMOP-auct").style.display = "block";
        
        document.getElementById("auction-pricing").style.display = "block";
        document.getElementById("currentBid").innerHTML = "₹ " + product.price;
        document.getElementById("openBid").innerHTML = "₹ " + product.price;
    
    }

    document.getElementById('landProduct-name').innerHTML = product.pname;
    document.getElementById('showCategory').innerHTML = product.category;
    document.getElementById('showPID').innerHTML = product.proid;

    if(product.newold=="new"){
        document.getElementById("showP-Age-new").style.display = block;
    }
    else{
        document.getElementById("showP-Age-mfd").style.display = block;
        document.getElementById("showP-Age-mfd").innerHTML =  product.pyear;
    }

    document.getElementById('l-p-description').innerHTML = product.pdesc;

    document.getElementById('l-p-sellerName').innerHTML = "Seller: "+ product.sfname;
    document.getElementById('l-p-sellerContact').innerHTML = product.scont + "<br>" + product.smail;
    document.getElementById('l-p-sellerAddress').innerHTML = product.saddr;

};




