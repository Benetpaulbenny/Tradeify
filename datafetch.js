document.addEventListener('DOMContentLoaded', function() {
const jsonFileUrl = 'data.json';

// Fetch the JSON file
fetch(jsonFileUrl)
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON in the response
    return response.json();
  })
  .then(data => {
    // Use the extracted data
    var elements = data[0];
    
    document.getElementById('productImage-l-p').innerHTML = `<img src="${elements.pimage}" loading="lazy" alt="" id="landProduct-image">`;
    
    if(elements.dettype=="fix"){
        document.getElementById('buy-add-button').style.display='block';
        
        document.getElementById("showMOP-norm").style.display = "inline";
        
        document.getElementById("product-pricing").style.display = "block";
        document.getElementById("l-p-productPrice").innerHTML = "₹ " + elements.price;

    }
    else{
        document.getElementById('bidButton').style.display='block';
        document.getElementById('dateEnd').innerHTML = elements.tdate;
        
        document.getElementById("showMOP-auct").style.display = "inline";
        
        document.getElementById("auction-pricing").style.display = "block";
        document.getElementById("currentBid").innerHTML = "₹ " + elements.price;
        document.getElementById("openBid").innerHTML = "₹ " + elements.price;
    
    }

    document.getElementById('landProduct-name').innerHTML = elements.pname;
    document.getElementById('showCategory').innerHTML = elements.category;
    document.getElementById('showPID').innerHTML = elements.proid;

    if(elements.newold=="new"){
        document.getElementById("showP-Age-new").style.display = "inline";
    }
    else{
        document.getElementById("showP-Age-mfd").style.display = "inline";
        document.getElementById("showP-Age-mfd").innerHTML =  elements.pyear;
    }

    document.getElementById('l-p-description').innerHTML = elements.pdesc;

    document.getElementById('l-p-sellerName').innerHTML = "Seller: "+ elements.sfname +" "+ elements.slname;
    document.getElementById('l-p-sellerContact').innerHTML = elements.scont + "<br>" + elements.smail;
    document.getElementById('l-p-sellerAddress').innerHTML = elements.saddr;
    // document.write(elem.pname);

    // Example: Accessing a specific property in the JSON
    // const specificData = data.propertyName;
    // console.log(specificData);
  })
  .catch(error => {
    // Handle errors during the fetch or JSON parsing
    console.error('Error:', error);
  });

});
