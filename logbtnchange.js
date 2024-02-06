document.addEventListener("DOMContentLoaded", function() {
    
    function fetchDataAndUpdateLinkText()
    {
        
    // Use AJAX to fetch data from the PHP script
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "logbtnchange.php", true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            
            //Response
            let name = xhr.responseText;

            // Update the <a> tag text
            document.getElementById("nav-button").innerHTML = name;

            
        }
    };

    

    }

    fetchDataAndUpdateLinkText();

});
