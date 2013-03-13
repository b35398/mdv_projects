
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
    if (ready === "yes" && weapon === "sword"){
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
var battleStrategy = function(area, adjective){
    var fight = "He has decided he will go fight enemies in the " + area + " and that he will fight " + adjective + ".";
    return fight;
};

// Array Function
var fightEnemies = function(attackPoints, enemiesToAttack){
    var hitPoints = 100;
    for (var i = 0; i < enemiesToAttack.length; i++){ 
        console.log("He attacked the " + enemiesToAttack[i] + ".");
        hitPoints -= (i * 10);
        console.log(playerName + " has " + hitPoints + " hit points left.");
    }
    return "He defeated all the enemies!";
};

// Main Code with Returned Values and their Output
readyForAdventure("yes");

var playerWeapon = weaponReady("sword", "yes");
console.log("It is " + playerWeapon + " that he is a fierce warrior!");

var playerArmor = armorReady(7);
console.log("Now his defense points are up to " + playerArmor + " and his armor will be able to withstand mighty blows!");

var battleDetails = battleStrategy("dungeon", "aggressively");
console.log(battleDetails);

var battle = fightEnemies(damageOutput, enemies);
console.log(battle);




