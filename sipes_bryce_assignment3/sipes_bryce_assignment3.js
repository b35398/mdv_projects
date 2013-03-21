
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

var joinGroup = function(namesArray){
    var newGroup = {
        names   : namesArray,
        healthy : true,
    }
    return newGroup;
};

// Objects

var playerOne = {
    name        : "Mark",
    weaponArmed : "fists",
    getWeapon   : function(weapon){
        this.weaponArmed = weapon;
        return this.weaponArmed;
    },
    assessThreat : function(threat){
        if (threat === true){
            console.log("Get ready, these are going to be some tough zombies to take down!");
        } else {
            console.log("These zombies shouldn't be too hard to take down.");
        }
    },
    attackZombies : function(zombiesToFight){
        var zombiesLeft = zombiesToFight.zombies;
        var zombiesKilled= 0
        while (zombiesKilled != zombiesLeft){
            zombiesKilled++
            for (var key in json.survivors){
                zombiesKilled++
            }
        }
        return zombiesKilled;
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

var zombieGroup = {
    zombies      : 5,
    daysDeceased : 39,
    isThreat  : function(){
        if (this.zombies > 3){
            if (this.daysDeceased < 60){
                this.isThreat = true;
                return this.isThreat;
            } else {
                this.isThreat = false;
                return this.isThreat;
            }
        } else {
            this.isThreat = false;
            return this.isThreat;
        }
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

var survivorNames = group.rollCall(json.survivors);

console.log("Glad to see there are other survivors out here. Nice to meet you all. " + survivorNames[0] + ", " + survivorNames[1] + ", " + survivorNames[2] + ", " + survivorNames[3] + ". I'll try and remember those.");

console.log(playerOne.name + " heard some more noise during the introductions. He asked if there was anyone else and the group replied, \"no.\" It must be....ZOMBIES!");

playerOne.assessThreat(zombieGroup.isThreat());

var numOfZombiesKilled = playerOne.attackZombies(zombieGroup);

console.log("We killed " + numOfZombiesKilled + " zombies. This group really has their stuff together, I should join them.");

var improvedGroup = joinGroup(["Mark", "Julie", "Rupert", "Chris", "Alex"]);

console.log("Now the new group is: " + improvedGroup.names + ".");

console.log("This place isn't safe, anymore. We better get out of here.");






