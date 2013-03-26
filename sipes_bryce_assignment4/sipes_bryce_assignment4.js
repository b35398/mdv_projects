//alert("JavaScript works!");

// Bryce Sipes
// SDI 1303
// Project 4
// Code Library

var codeLibrary = function(){
    var isPhoneNum = function(phoneNumber){
        var phoneNumStr = phoneNumber;
        var phoneNum;
        if (phoneNumStr.length == 12){
            if (phoneNumStr.charAt(3) == "-" && phoneNumStr.charAt(7) == "-"){
                phoneNum = true;
            }
        } else {
            phoneNum = false;
        }
        return phoneNum;
    }
    
    
    return {
        "isPhoneNum": isPhoneNum
    }
}

var codeLib = codeLibrary();

var phoneNumber = codeLib.isPhoneNum("555-5555555");

console.log(phoneNumber);