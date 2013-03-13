
/*
    Bryce Sipes
    SDI 1303
    Project 2
    A Knight's Adventure
*/

// Global Variables
var playerName = "Sir Blondey von Muscles";
var damageOutput = 15;
var enemies = ["Frost Troll", "Evil Knight", "Dark Wizard"];

// Procedure
var readyForAdventure = function(decision){
    if (decision === "yes"){
        console.log(playerName + " is ready for an adventure!");
    } else {
        console.log(playerName + " is not ready for an adventure");
    }
};

// Boolean Function
var weaponReady = function(weapon, ready){
    if (ready === "yes"){
        console.log("I have my " + weapon + " ready for battle!");
        return true;
    } else {
        console.log("I don't have my weapons ready!");
        return false;
    }
};

// Number Function


// String Function


// Array Function


// Main Code
readyForAdventure(yes);
var playerWeapon = weaponReady("sword", "yes");
console.log("It is " + playerWeapon + " that I am ready for an epic battle!");
