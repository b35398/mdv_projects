
// Bryce Sipes
// SDI 1303
// Project 3
// Zombie Apocalypse


// Global Variables

var date = new Date();
var timeOfDay = date.getHours();
var areaMaP = "abandoned insane asylum";
var weapons = ["handgun", "shotgun", "crowbar"];

// Functions

var useFlashlight = function(time){
    if (time >= 19 || time <= 4){
    playerOne.flashlightOn = true;
    console.log("I should turn my flashlight on.");
    } else {
        console.log("I won't need to use my flashlight at this time of day.");
    }
};

var listWeapons = function(weaponArray){
    var thisWeapon;
    for (var key in weaponArray){
        thisWeapon = weaponArray[key]; 
        console.log("I found a " + thisWeapon + ".");
    }
};

// Objects

var playerOne = {
    name        : "Mark",
    weaponArmed : "fists",
    injuries    : false,
    getWeapon   : function(weapon){
        this.weaponArmed = weapon;
        return this.weaponArmed;
    }
};

// JSON Data

var json = {
    "survivors": [
        {
            "name" : "Chris",
            "age"  : 28
        },
        {
            "name" : "Julie",
            "age"  : 31
        },
        {
            "name" : "Alex",
            "age"  : 17
        },
        {
            "name" : "Rupert",
            "age"  : 52
        }
    ]
};

// Main Code

console.log(playerOne.name + " has found an " + areaMaP + " that looks like it may be a good place to scavenge for supplies.");

useFlashlight(timeOfDay);

console.log(playerOne.name + " quietly makes his way inside the " + areaMaP + " and found a security office that had some weapons.");

listWeapons(weapons);

console.log("Which one should I choose?");






