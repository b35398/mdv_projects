//alert("JavaScript works!");

// Bryce Sipes
// SDI 1303
// Project 4
// Code Library

var codeLibrary = function(){
    var isPhoneNum = function(phoneNumber){ // Start of isPhoneNumber function
        var phoneNumberString = phoneNumber;
        var phoneNumberArray = [];
        var isCorrect = true;
        if (phoneNumberString.length === 12){
            for (var i = 0; i < 12; i++){
                phoneNumberArray.push(phoneNumberString.charAt(i));
                if (isNaN(parseInt(phoneNumberArray[i])) !== true){ // MAKEUP: ! comparison operator, project 2
                    continue;
                } else if ((i == 3 && phoneNumberArray[i] == "-") || (i == 7 && phoneNumberArray[i] == "-")){ 
                    continue;
                } else {
                    isCorrect = false;
                }
            }
        } else {
            isCorrect = false;
        }
        return isCorrect;
    } // End of isPhoneNumber function
    
    var isEmail = function(email){ // Start of isEmail function
        var emailStr = email;
        var checkEmail;
        
    } // End of is Email function
    
    return {
        "isPhoneNum": isPhoneNum,
        "isEmail"   : isEmail,
      //  "isUrl"     : isUrl
    }
}

var codeLib = codeLibrary();

