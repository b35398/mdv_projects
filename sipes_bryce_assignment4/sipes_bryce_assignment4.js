//alert("JavaScript works!");

// Bryce Sipes
// SDI 1303
// Project 4
// Code Library

var codeLibrary = function(){
    var isPhoneNum = function(phoneNumber){ // Checks if string is a phone number pattern
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
    
    var isEmail = function(email){ // Checks if a string is an email patter 
        var emailStr = email;
        var checkEmail;
        
    } // End of is Email function
    
    var strToNum = function(stringNum){  // Turns a string number into a number
        var myStringNum = parseFloat(stringNum);
        var notANum = "That is not a number";
        if (!isNaN(myStringNum)){
            return myStringNum;
        } else {
            return notANum;
        }
    } // End of strToNum function
    
    var isUrl = function(){
        
    } // End of isUrl function
    
    
    // ARRAY FUNCTIONS
    
    var valGreatThan = function(array, number){
        var myArray = array.sort(function(a, b) {return a - b});
        var myNum = number;
        var nextNum;
        for (var i = 0; i < myArray.length; i++){
            if (myNum > myArray[i] && myNum < myArray[i+1]){
                nextNum = myArray[i+1];
            }
        }
        return nextNum;
    }
    
    var totalValue = function(array){ // Finds the total value of numbers in an array
        var myArray = array;
        var myTotal = 0;
        for (var i = 0; i < myArray.length; i++){
            if (typeof(myArray[i]) === "number"){
                myTotal += myArray[i];
            }
        }
        return myTotal;
    } // End of totalValue function
    
    var arraySort = function(array, key){ // Sorts an array by a key value
        var myArray = array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        return myArray;
    } // End of arraySort function
    
    return {
        "isPhoneNum"   : isPhoneNum,
        "isEmail"      : isEmail,
        "isUrl"        : isUrl,
        "strToNum"     : strToNum,
        "valGreatThan" : valGreatThan,
        "totalValue"   : totalValue,
        "arraySort"    : arraySort
      
    }
}

// Main Code
var codeLib = new codeLibrary();

// check isPhoneNum function
var checkPhoneNumber = codeLib.isPhoneNum("555-555-5555");  // true
console.log(checkPhoneNumber);
var checkPhoneNumber = codeLib.isPhoneNum("555-5t5-5555"); // false
console.log(checkPhoneNumber);

// check isEmail function

// check isUrl function


// check stringToNum function
var stringNumber = codeLib.strToNum("22"); // 22
console.log(stringNumber);
var stringNumber = codeLib.strToNum("dog"); // That is not a number.
console.log(stringNumber);

// ARRAY FUNCTIONS

// check valGreatThan function
var anotArray = [1,2,3,5,7,10,9];
var nextGreatest = codeLib.valGreatThan(anotArray, 4); // 5
console.log(nextGreatest);
var anotArray = [1,2,3,5,7,10,9,28];
var nextGreatest = codeLib.valGreatThan(anotArray, 20); // 28
console.log(nextGreatest);

// check totalValue function
var crazyArray = [1, "10", false, "cat", 2, 3, "dog", true, 10, "John", false, "11"];
var totalVal = codeLib.totalValue(crazyArray); // 16
console.log(totalVal); 

// check arraySort function
var keyArray = [{b:3},{b:1},{b:5},{b:4},{b:2}];
var sortedArray = codeLib.arraySort(keyArray,"b");  // b:1, b:2, b:3, b:4, b:5,
console.log(sortedArray);
var keyArray = [{a:3},{a:1},{a:5},{a:4},{a:2}];
var sortedArray = codeLib.arraySort(keyArray,"a");  // a:1, a:2, a:3, a:4, a:5,
console.log(sortedArray);