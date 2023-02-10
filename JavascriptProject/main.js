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




//For Sign up and Login firebase authentication
const firebaseConfig = {
    apiKey: "AIzaSyD5JiYR8U0fZ3SH-aE3bs_azy_tVGCF1fk",
    authDomain: "java-script-project-fe70e.firebaseapp.com",
    projectId: "java-script-project-fe70e",
    storageBucket: "java-script-project-fe70e.appspot.com",
    messagingSenderId: "333637297039",
    appId: "1:333637297039:web:e1e4e9053f3ef7003461fa",
    measurementId: "G-1791Q3L03T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //declarring database variable 
  
  const database = getDatabase(app); 




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






//For Resetting user's password
function passWordReset(){
    alert("Password reset link is sent!, Check your Email please.");
}