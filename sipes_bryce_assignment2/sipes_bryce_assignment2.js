
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
        console.log("He has his " + weapon + " ready to fight some fearsome enemies!");
        return true;
    } else {
        console.log("He doesn't have his weapon ready!");
        return false;
    }
};

// Number Function
var armorReady = function(defensePoints){
    var armor = defensePoints;
    while (armor < 20){
        console.log("His defense is only a " + armor + ", so he must make some modifications to his armor.");
        armor += 5;
    }
    console.log("He is done strengthening his armor!");
    return armor;
};

// String Function


// Array Function


// Main Code
readyForAdventure("yes");
var playerWeapon = weaponReady("sword", "yes");
console.log("It is " + playerWeapon + " that he is a fierce warrior!");
var playerArmor = armorReady(7);
console.log("Now his defense points are up to " + playerArmor + " and his armor will be able to withstand might blows!");


