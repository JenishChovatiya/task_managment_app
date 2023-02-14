//Declaring Variables and connecting it with html files
let signUpBtn = document.getElementById('signUpBtn');
let signInBtn = document.getElementById('signInBtn');
let userNameField = document.getElementById('nameField')
let pageTitle = document.getElementById('title')
let reEnterPassword = document.getElementById('reEnterPassword');
let clickToProsess = document.getElementById('clickSignUpBtn');


//Declaring variable for forgotPassword.html page
//let forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
document.getElementById('forgotPasswordBtn').addEventListener('click', passWordReset);


//For Resetting user's password
function passWordReset(){
    alert("Password reset link is sent!, Check your Email please.");
}


//Declaring All the functions that are usefull in the appication

//checking and validaing Admin
function checkValidation(){
    //Declaring static usernames and password for Admin
    const adminEmail = 'jenishchovatiya05@gmail.com';
    const adminEmailPassword = 'Project@01';
        

    let temEmail = document.getElementById('getAdminEmail').value;
    let temPassword = document.getElementById('getAdminPAssword').value;


    if (temEmail == adminEmail && temPassword == adminEmailPassword){
        
        // window.location.href will redirect to new page once admin is sucessfully login
        window.location.href = "adminPannel.html";

    }
    else if(temEmail.length == 0)
    {
        alert("Please Cceck your Email  field!");
    }
    else if(temPassword.length == 0){
        alert("Please check your Password field!");
    }
    else{
        alert("Given Email id and Password is not matching!, Please try again.");
    }

}
