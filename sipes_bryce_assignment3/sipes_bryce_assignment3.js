
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
    getWeapon   : function(weapon){     // Method: Mutator
        this.weaponArmed = weapon;
        return this.weaponArmed;
    }
};

var group = {
    groupSize : 0,
    names     : [],
    rollCall  : function(jsonLength){
        while (this.groupSize !== jsonLength.length){
            this.names.push(jsonLength[this.groupSize].name);
            console.log("Hi, my name is " + jsonLength[this.groupSize].name + ".");
            this.groupSize++;
        }
        return this.names;
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

var myWeapon = playerOne.getWeapon("crowbar");

console.log("I'll choose the " + myWeapon + ", because it's silent and doesn't require ammo.");

console.log(playerOne.name + " makes his way further into the " + areaMaP + " when he hears something. He overhears some whispering and realizes it's other humans. He calls out and asks who's there.");

group.rollCall(json.survivors);

console.log("Glad to see there are other survivors out here. Nice to meet you all. " + group.names[0] + ", " + group.names[1] + ", " + group.names[2] + ", " + group.names[3] + ". I'll try and remember those.");






