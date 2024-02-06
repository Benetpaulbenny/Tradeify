// Don't delete the content it's actually being used in the project


document.addEventListener("DOMContentLoaded", function() {
    
    function fetchDataAndUpdateLinkText1()
    {
        
    /// Use AJAX to fetch data from the PHP script
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "profiledisplay.php", true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse the JSON response
            let data = JSON.parse(xhr.responseText);
            //let name = xhr.responseText;

            // Update the <a> tag text
            //document.getElementById("nav-button").innerHTML = name;

            // Update the <span> tags with the fetched data
            document.getElementById("p-name-fn-h4").textContent = data.fname;
            document.getElementById("p-name-fn").textContent = data.fname;
            document.getElementById("p-name-ln").textContent = data.lname;
            document.getElementById("p-email").textContent = data.mailid;
            document.getElementById("p-phone-number").textContent = data.mob;
            document.getElementById("p-address").textContent = data.homeaddr;
            document.getElementById("p-c-address").textContent = data.companyaddr;

        }
        //xhr.send();
    };
    

    }

    fetchDataAndUpdateLinkText1();

});



