// Javascript file for VFW Project 2
//

window.addEventListener("DOMContentLoaded", function(){
    
    //get element function
    var getElement = function(elementId){
        var myElement = document.getElementById(elementId);
        return myElement;
    }
    
    //save data function
    var saveNotes = function(){
        var id = Math.floor(Math.random() * 1000000);
        //Get all form data and store in object
        //object properties contain array with form label and input properties
        var note = {};
        note.date = ["Date: ", getElement("dates").value];
        note.classNote   = ["Class: ", getElement("class").value];
        note.teacher     = ["Teacher: ", getElement("teacher").value];
        //note.test        = ["Will this be on a quiz: ", testValue];
        note.theNote     = ["Note: ", getElement("theNote").value];
        //note.studyDays = ["Days this week you should study this material: ", studyDaysValue];
        note.importance  = ["How important this note is: ", getElement("importanceRange").value];
        note.password    = ["Password: ", getElement("password").value];
        //save into local storage. use stringify to convert object to string.
        localStorage.setItem(id, JSON.stringify(note));
        alert("Your note has been saved.");
    };
    
    //display data function
    var showNotes = function(){};
    
    //clear data function
    var clearNotes = function(){};
    
    //creates and populates a dropdown option menu
    var makeClasses = function(){
        var formTag = document.getElementsByTagName("form");
        var selectDiv = getElement("select");
        var makeSelect = document.createElement("select");
        makeSelect.setAttribute("id","class");
        for (var i = 0; i < classes.length; i++){
            var makeOption = document.createElement("option");
            var optionText = classes[i];
            makeOption.setAttribute("value", optionText);
            makeOption.innerHTML = optionText;
            makeSelect.appendChild(makeOption);
        }
        selectDiv.appendChild(makeSelect);
    };
    
    
    var classes = ["-Choose A Class-", "Math", "Science", "Art", "Music", "English", "History"];
    makeClasses();
    
    var saveData = getElement("submitButton");
    saveData.addEventListener("click", saveNotes);
    
    var showData = getElement("showNotes");
    showData.addEventListener("click", showNotes);
    
    var clearData = getElement("clearNotes");
    clearData.addEventListener("click", clearNotes);
    
});