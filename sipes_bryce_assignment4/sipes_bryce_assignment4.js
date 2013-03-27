//alert("JavaScript works!");

// Bryce Sipes
// SDI 1303
// Project 4
// Code Library

var codeLibrary = function(){
    var isPhoneNum = function(phoneNumber){     // Start of isPhoneNum function
        var phoneNumStr = phoneNumber;
        var phoneNumArr = [];
        var phoneNum = true;
        
        if (phoneNumStr.length == 12){
            for (var i = 0; i < 12; i++){
                phoneNumArr.push(phoneNumStr.charAt(i));
            }
            
            if (
                isNaN(parseInt(phoneNumArr[0]))  !== true &&
                isNaN(parseInt(phoneNumArr[1]))  !== true &&
                isNaN(parseInt(phoneNumArr[2]))  !== true &&
                phoneNumArr[3]                    == "-"  &&
                isNaN(parseInt(phoneNumArr[4]))  !== true &&
                isNaN(parseInt(phoneNumArr[5]))  !== true &&
                isNaN(parseInt(phoneNumArr[6]))  !== true &&
                phoneNumArr[7]                    == "-"  &&
                isNaN(parseInt(phoneNumArr[8]))  !== true &&
                isNaN(parseInt(phoneNumArr[9]))  !== true &&
                isNaN(parseInt(phoneNumArr[10])) !== true &&
                isNaN(parseInt(phoneNumArr[11])) !== true 
                ){
                phoneNum = true;
            } else {
                phoneNum = false;
            }
        } else {
            phoneNum = false;
        }
        return phoneNum;
    }                                           // End of isPhoneNum function
    
    var isEmail = function(email){              // Start of isEmail function
        var emailStr = email;
        var checkEmail;
        
    }                                           // End of is Email function
    
    return {
        "isPhoneNum": isPhoneNum,
        "isEmail"   : isEmail,
       // "isUrl"     : isUrl
    }
}

var codeLib = codeLibrary();

var phoneNumber = codeLib.isPhoneNum("123-555-789a");

console.log(phoneNumber);
