//Declaring Variables and connecting it with html file
let signUpBtn = document.getElementById('signUpBtn');
let signInBtn = document.getElementById('signInBtn');
let userNameField = document.getElementById('nameField')
let pageTitle = document.getElementById('title')
let reEnterPassword = document.getElementById('reEnterPassword');
let clickToProsess = document.getElementById('clickSignUpBtn');

//Changing color of buttons
// signInBtn.onclick = function(){

//     //Removing text and re-enter password feild.
//     userNameField.style.maxHeight = "0";
//     reEnterPassword.style.maxHeight = "0";
    
//     pageTitle.innerHTML = "Sign In";

//     //Actie button color change happening 
//     signUpBtn.classList.add("disable");
//     signInBtn.classList.remove("disable");
   
// }

// signUpBtn.onclick = function(){

//      //Adding text and re-enter password feild.
//     userNameField.style.maxHeight = "60px";
//     reEnterPassword.style.maxHeight = "60px";

//     pageTitle.innerHTML = "Sign Up";

//     //Actie button color change happening
//     signUpBtn.classList.remove("disable");
//     signInBtn.classList.add("disable");
// }


// clickToProsess.onclick = function(){

// }


//Declaring static usernames and password for Admin
const adminEmail = 'jenishchovatiya05@gmail.com';
const adminEmailPassword = 'Project@01';

//checking and validaing Admin
function checkValidation(){
    

    let temEmail = document.getElementById('getAdminEmail').value;
    let temPassword = document.getElementById('getAdminPAssword').value;


    if (temEmail == adminEmail && temPassword == adminEmailPassword){
        
        // window.location.href will redirect to new page once admin is sucessfully login
        window.location.href = "adminPannel.html";

    }
    else
    {
        alert("Please Check Your Email or Password Field!");
    }

}
