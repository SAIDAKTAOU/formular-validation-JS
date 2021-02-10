// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var prenom = document.contactForm.prenom.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var file1 = document.contactForm.file1.value;
    
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = captchaErr = file1Err= true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please fill in the field");
    } else {
        var regex = /^[a-zA-Z\s-_]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Field must contain letters, dashes and spaces");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

     // Validate prenom
     if(prenom == "") {
        printError("prenomErr", "Please fill in the field");
    } else {
        var regex = /^[a-zA-Z\s-_]+$/;                
        if(regex.test(prenom) === false) {
            printError("prenomErr", "Field must contain letters, dashes and spaces");
        } else {
            printError("prenomErr", "");
            prenomErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please fill in the field");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please fill in the field");
    } else {
        var regex = /^[0-9]+$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Enter a valid phone number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    //File

   var x = document.getElementById("inputGroupFile01");

   if ('files' in x) {
    if (x.files.length == 0) {
        printError("FileErr", "Please Select a file");
    }
      // Check if any file is selected. 
    else{
        var filePath = file1;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if(!allowedExtensions.exec(filePath)){
            printError("FileErr", "Select a file with the extensions .jpeg / .jpg / .png / .gif only"); 

            file1 = '';
        }
    else {
        if(x.files.length > 0){
            for (var i = 0; i <= x.files.length - 1; i++) { 
            
            var fsize = x.files.item(i).size; 
            var file = Math.round((fsize / 1024));

            // The size of the file. 
            if (file >= 4096) { 
                printError("FileErr", "File too large, Select a file of less than 4 MB"); 
            } else if (file < 50) { 
                printError( "FileErr", "File too small, Select a file larger than 50 KB"); 
            } 
            else{
                printError("FileErr", "");
                file1Err = false;
            }
        } 
    
    }
}
}
}

    // Validate country
    if(country == "Country") {
        printError("countryErr", "Select a country");
    } else {
        printError("countryErr", "");
        countryErr = false; 
    }

    //recaptcha

    if (grecaptcha.getResponse() == ""){
        printError("captchaErr" ,"Please check reCAPTCHA" );
        
    } else {
        printError("captchaErr", "");
        captchaErr = false;
    }
    

    // Prevent the form from being submitted if there are any errors
    if((nameErr || prenomErr || emailErr || mobileErr || countryErr || captchaErr || file1Err ) == true) {
       return false;
    }
};
