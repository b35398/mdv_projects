
// Bryce Sipes
// SDI 1303
// Project 3
// Zombie Apocalypse


// Global Variables

var date = new Date();
var timeOfDay = date.getHours();
var areaMaP = "abandoned insane asylum";
var weapons = ["handgun", "shotgun", "crowbar"];

// Objects

var playerOne = {
    name        : "Mark",
    weaponArmed : "fists",
    inured      : false,
    getWeapon   : function (weapon){  // Method: Procedure
        weaponArmed = this.weapon;
    },
    //flashlight  : function()
    
};

var group = {
    sizeOfGroup : 0,
    groupSize   : function(survivorsLength){   // Method: Mutator
        this.sizeOfGroup += survivorsLength;
        return this.sizeOfGroup;
    },
    //groupRollCall : function();
};  // End Group Object



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

console.log(timeOfDay);
var peopleInGroup = group.groupSize(json.survivors.length);;
console.log(peopleInGroup);


