//alert("JavaScript works!");

// Bryce Sipes
// SDI 1303
// Project 4
// Code Library

// MAKEUP: code follows logic of flowchart, Project 1

// Global Variables
var anotherArray = [1,2,3,5,7,10,9];  // MAKEUP: variables defined in the way required by the flowchart, Project 1
var anotArray    = [1,2,3,5,7,10,9,28];
var crazyArray   = [1, "10", false, "cat", 2, 3, "dog", true, 10, "John", false, "11"];
var keyArray     = [{b:3},{b:1},{b:5},{b:4},{b:2}];
var nextKeyArray = [{a:3},{a:1},{a:5},{a:4},{a:2}];
var someUrl      = "https://www.someurl.com";
var anotherUrl   = "www.anotherurl.com";
var myEmailAdd   = "example@example.com";
var badEmail     = "a.something@com";
var sillyEmail   = "example@.com";


// Code Library
var codeLibrary = function(){
    // STRING METHODS
    
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
    } // End of isPhoneNumber method
    
    var isEmail = function(email){ // Checks if a string is an email pattern 
        var emailStr = email;
        var checkEmail = false;
        if (emailStr.indexOf("@") > 1 && emailStr.lastIndexOf(".") > (emailStr.indexOf("@") + 1)){
            checkEmail = true;
        }
        return checkEmail;
    } // End of is Email method
    
    var isUrl = function(url){ // Checks if a string starts with http:// or https://
        myUrl = url;
        urlCorrect = false;
        if (myUrl.startsWith("http://") === true || myUrl.startsWith("https://") === true){
            urlCorrect = true;
        }
        return urlCorrect;
    } // End of isUrl method
    
    var titleCase = function(string){ // Title cases a string and returns it
        
    }
    
    var changeSeperator = function(string, seperator, replace){ // Replaces seperators in a string
        
    }
    
    // NUMBER METHODS
    
    var formatNum = function(number, numAfterDec){ // Formats a number to a specific length after decimal
        var num = number;
        return num.toFixed(numAfterDec);
    } //End of formatNum method
    
    var fuzzyNum = function(firstNum, secondNum, percent){ // Finds if a number is within a certain percent of another number
        var firstNumber  = firstNum;
        var secondNumber = secondNum;
        var myPercent    = percent;
        var toPercent    = percent/100;
        var myResult;
        if (firstNumber < secondNumber){
            if (firstNumber >= (secondNumber*toPercent)){
                myResult = firstNumber + " is within " + myPercent + " percent of " +  secondNumber + ".";
            } else {
                myResult = firstNumber + " is not within " + myPercent + " percent of " +  secondNumber + ".";
            }
        } else{
            if (secondNumber >= (firstNumber*toPercent)){
                myResult = secondNumber + " is within " + myPercent + " percent of " +  firstNumber + ".";
            } else {
                myResult = secondNumber + " is not within " + myPercent + " percent of " +  firstNumber + ".";
            }
        }
        return myResult;
    }
    
    var strToNum = function(stringNum){  // Turns a string number into a number
        var myStringNum = parseFloat(stringNum);
        var notANum = "That is not a number.";
        if (!isNaN(myStringNum)){
            return myStringNum;
        } else {
            return notANum;
        }
    } // End of strToNum method
    
    var compareDates = function(firstDate, secondDate, time){ // Finds the difference between 2 dates by either days or hours
        var firstDay   = firstDate;
        var secondDay  = secondDate;
        var timeChoice = time;
        var difference;
        if (timeChoice == "hours"){
            if(firstDay > secondDay){
                difference = (firstday - secondDay) / 3600000;
            } else {
                difference = (secondDay - firstDay) / 3600000;
            }
        }
        if (timeChoice == "days"){
            if(firstDay > secondDay){
                difference = (firstday - secondDay) / 86400000;
            } else {
                difference = (secondDay - firstDay) / 86400000;
            }
        }
        return difference;
    } // End of compareDates method
    
    // ARRAY METHODS
    
    var valGreatThan = function(array, number){ // Finds the next largest number in an array based on the number given
        var myArray = array.sort(function(a, b) {return a - b}); // MAKEUP: needed to use an array method, Project 2
        var myNum = number;
        var nextNum;
        for (var i = 0; i < myArray.length; i++){ // MAKEUP: for loop in flowchart shows logical flow, Project 3
            if (myNum > myArray[i] && myNum < myArray[i+1]){
                nextNum = myArray[i+1];
            }
        }
        return nextNum;
    } // End of valGreatThan method
    
    var totalValue = function(array){ // Finds the total value of numbers in an array
        var myArray = array;
        var myTotal = 0;
        for (var i = 0; i < myArray.length; i++){
            if (typeof(myArray[i]) === "number"){
                myTotal += myArray[i];
            }
        }
        return myTotal;
    } // End of totalValue method
    
    var arraySort = function(array, key){ // Sorts an array by a key value
        var myArray = array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        return myArray; // MAKEUP: return array, Project 2
    } // End of arraySort method
    
    return {
        "isPhoneNum"      : isPhoneNum,
        "isEmail"         : isEmail,
        "isUrl"           : isUrl,
        "titleCase"       : titleCase,
        "changeSeperator" : changeSeperator,
        "formatNum"       : formatNum,
        "fuzzyNum"        : fuzzyNum,
        "compareDates"    : compareDates,
        "strToNum"        : strToNum,
        "valGreatThan"    : valGreatThan,
        "totalValue"      : totalValue,
        "arraySort"       : arraySort
    }
};

// Main Code
var codeLib = new codeLibrary();

// STRING METHODS

// check isPhoneNum method
var checkPhoneNumber = codeLib.isPhoneNum("555-555-5555");  // true
console.log(checkPhoneNumber);
var checkPhoneNumber = codeLib.isPhoneNum("555-5t5-5555"); // false
console.log(checkPhoneNumber);

// check isEmail method
var isEmailValid = codeLib.isEmail(myEmailAdd); // true
console.log(isEmailValid);
var isEmailValid = codeLib.isEmail(badEmail); // false
console.log(isEmailValid);
var isEmailValid = codeLib.isEmail(sillyEmail); // false
console.log(isEmailValid);


// check isUrl method
var checkUrl = codeLib.isUrl(someUrl); // true
console.log(checkUrl);
var checkUrl = codeLib.isUrl(anotherUrl); // false
console.log(checkUrl);

// check

// check

// NUMBER METHODS

// check formatNum method
var myCash = codeLib.formatNum(10000.50000000, 2); //10000.50
console.log(myCash);
var someNumber = codeLib.formatNum(1.1, 2); // 1.10
console.log(someNumber);

//check fuzzyNum method
var checkFuzzy = codeLib.fuzzyNum(91,100,90); // 91 is within 90 percent of 100.
console.log(checkFuzzy);
var checkMoreFuzz = codeLib.fuzzyNum(30,12,30); // 12 is within 30 percent of 30.
console.log(checkMoreFuzz);

// check compareDates method
var daysDifference = codeLib.compareDates(new Date(2013,3,20),new Date(2013,3,27),"days"); // 7
console.log(daysDifference);
var hoursDifference = codeLib.compareDates(new Date(2013,3,26),new Date(2013,3,30),"hours"); // 96
console.log(hoursDifference);

// check stringToNum method
var stringNumber = codeLib.strToNum("22"); // 22
console.log(stringNumber);
var stringNumber = codeLib.strToNum("dog"); // That is not a number.
console.log(stringNumber);

// ARRAY METHODS

// check valGreatThan method
var nextGreatest = codeLib.valGreatThan(anotherArray, 4); // 5
console.log(nextGreatest);
var nextGreatest = codeLib.valGreatThan(anotArray, 20); // 28
console.log(nextGreatest);

// check totalValue method
var totalVal = codeLib.totalValue(crazyArray); // 16
console.log(totalVal); 

// check arraySort method
var sortedArray = codeLib.arraySort(keyArray,"b");  // b:1, b:2, b:3, b:4, b:5,
console.log(sortedArray);
var sortedArray = codeLib.arraySort(nextKeyArray,"a");  // a:1, a:2, a:3, a:4, a:5,
console.log(sortedArray);