
// function onClick8(){
//     var inputValue = document.getElementById('search_term').value;
//     localStorage.setItem('myVariable', inputValue);

//     window.location.href = 'product-search-page.html';
// }

function onClick8() {
    var inputValue = document.getElementById('search_term').value;
    localStorage.setItem('myVariable', inputValue);

    console.log('Search Term:', inputValue);

    window.location.href = 'product-search-page.html';
}


function checkSessionStatus(callback) {
    fetch('search-pro-display.php')
        .then(response => response.text())
        .then(status => {
            callback(status.trim() === 'true');
        });
}

function onClick7() {
    const loginButton = document.getElementById("nav-button");

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        checkSessionStatus(function (loggedIn) {
            if (loggedIn==true) {
                window.location.href ="profile.htm"; // Redirect to profile page
            } else {
                onClick2(); // Show the login window
            }
        });
    });
}


// Function to display the login window
function onClick2() {
    var open1 = document.getElementById("loginpage-bg");
    open1.classList.toggle("active");
}

//Signup page

function onClick3(){
    var open1 = document.getElementById("sign-up");

    open1.classList.toggle("active");
}

function onClick4()
{
    document.addEventListener("DOMcontentloaded", function() {
        // Your JavaScript code here
        fetch('logsignt.php')
            .then(response => response.text())
            .then(data => {
                // Update the button text with the fetched username
                document.getElementById('login-button-text').textContent = data;
            })
            .catch(error => console.error('Error:', error));
    });
}
// function editText(){
//     const content_element = document.getElementsByClassName("p-db-content");
//     const edit_button = document.getElementById("edit-button");
//     const end_button = document.getElementById("save-button");

//     content_element.contentEditable = true;
// }
function editText() {
    
    const f_name = document.getElementById("p-name-fn") ;
    const l_name = document.getElementById("p-name-ln") ;
    const e_mail = document.getElementById("p-email") ;
    const phone_no = document.getElementById("p-phone-number") ;
    const p_addr= document.getElementById("p-address") ;
    const p_c_addr= document.getElementById("p-c-address") ;

    const edit_button = document.getElementById("edit-button");
    const save_button = document.getElementById("save-button"); // Changed to save_button for consistency
    const clear_button = document.getElementById("clear-button"); // Changed to save_button for consistency

    // Enable content editing
    f_name.contentEditable = true;
    f_name.focus();
    l_name.contentEditable = true;
    e_mail.contentEditable = true;
    phone_no.contentEditable = true;
    p_addr.contentEditable = true;
    p_c_addr.contentEditable = true;

    // Hide the edit button and show the save button
    edit_button.style.display = "none";
    save_button.style.display = "block";
    clear_button.style.display = "block";

    // Add an event listener to the save button to save the edited content
    save_button.addEventListener("click", function() {
        // Disable content editing
        f_name.contentEditable = false;
        l_name.contentEditable = false;
        e_mail.contentEditable = false;
        phone_no.contentEditable = false;
        p_addr.contentEditable = false;
        p_c_addr.contentEditable = false;

        // Hide the save button and show the edit button
        save_button.style.display = "none";
        clear_button.style.display = "none";
        edit_button.style.display = "block";
        location.reload();
        // Perform any necessary actions to save the edited content, such as sending it to a server or updating a database
        // You can access the edited content using content_element.textContent
        // For example: const editedContent = content_element.textContent;

        // You can also perform additional actions here as needed
    });
    clear_button.addEventListener("click", function() {
        // Disable content editing
        f_name.contentEditable = false;
        l_name.contentEditable = false;
        e_mail.contentEditable = false;
        phone_no.contentEditable = false;
        p_addr.contentEditable = false;
        p_c_addr.contentEditable = false;

        // Hide the save button and show the edit button
        save_button.style.display = "none";
        clear_button.style.display = "none";
        edit_button.style.display = "block";
        location.reload();
    });
}




// end_button.addEventListener("click", function() {
//   content_element.contentEditable = false;
//   content_element.style.backgroundColor = "#ffe44d";
// } )

const profile_page = document.getElementsByClassName("profile-myprofile");
const myorder_page = document.getElementsByClassName("profile-myorders");
const cart_page = document.getElementsByClassName("profile-cart");



function showMyprofile() {
    
    const cont_profile = document.getElementById("my-profile-contents");
    const cont_myorder = document.getElementById("my-orders-content");
    const cont_cart = document.getElementById("cart-order");
    const cont_yourorder = document.getElementById("your-order");

    cont_profile.style.display = "block";
    cont_myorder.style.display = "none";
    cont_cart.style.display = "none";
    cont_yourorder.style.display = "none";
    
};
function showMyorder() {
    
    const cont_profile = document.getElementById("my-profile-contents");
    const cont_myorder = document.getElementById("my-orders-content");
    const cont_cart = document.getElementById("cart-order");
    const cont_yourorder = document.getElementById("your-order");


    cont_profile.style.display = "none";
    cont_myorder.style.display = "block";
    cont_cart.style.display = "none";
    cont_yourorder.style.display = "none";

    
};


function showCart() {
    const cont_profile = document.getElementById("my-profile-contents");
    const cont_myorder = document.getElementById("my-orders-content");
    const cont_cart = document.getElementById("cart-order");
    const cont_yourorder = document.getElementById("your-order");


    cont_profile.style.display = "none";
    cont_myorder.style.display = "none";
    cont_cart.style.display = "block";
    cont_yourorder.style.display = "none";

    
};


function showyourProducts() {
    
        const cont_profile = document.getElementById("my-profile-contents");
        const cont_myorder = document.getElementById("my-orders-content");
        const cont_cart = document.getElementById("cart-order");
        const cont_yourorder = document.getElementById("your-order");

    
        cont_profile.style.display = "none";
        cont_myorder.style.display = "none";
        cont_cart.style.display = "none";
        cont_yourorder.style.display = "block";

        
};
    


function disableEnterKey(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
}
// var count=0;
// function countKey_add(event) {
    
//     if (event.keyCode === 13) {
//         if (count === 2){
//             event.preventDefault();
//         }
//         else{
//             count++;
//         }
        
//     }
//     if (event.keyCode === 8) {
//         if (count > 0 ){
//             count--;
//     }
// }
// }
// var count2=0;
// function countKey_cadd(event) {
    
//     if (event.keyCode === 13) {
//         if (count2 === 2){
//             event.preventDefault();
//         }
//         else{
//             count2++;
//         }
        
//     }
//     if (event.keyCode === 8) {
//         if (count2 > 0 ){
//             count--;
//         }
//     }
// }


