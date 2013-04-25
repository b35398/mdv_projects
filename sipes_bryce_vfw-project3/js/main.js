// Javascript file for VFW Project 3

window.addEventListener("DOMContentLoaded", function(){
    
    //get element function
    var getElement = function(elementId){
        var myElement = document.getElementById(elementId);
        return myElement;
    }
    
    //find the selected radio button
    var getTestValue = function(){
        var radio = document.forms[0].test;
        for(var i = 0; i < radio.length; i++){
            if (radio[i].checked){    
                testValue = radio[i].value;
            }
        }
    };
    
    //get the checkbox values
    var getStudyDays = function(){
        var daysToStudy = document.forms[0].study;
        for (var i = 0; i < daysToStudy.length; i++){
            if(daysToStudy[i].checked && studyDaysValue === undefined){
                studyDaysValue = daysToStudy[i].value;
            } else {
                studyDaysValue + " " + daysToStudy[i].value + " ";
            }
        }
    };
    
    //save data function
    var saveNote = function(){
        var id = Math.floor(Math.random() * 1000000);
        getTestValue();
        getStudyDays();
        //Get all form data and store in object
        //object properties contain array with form label and input properties
        var note = {};
        note.date = ["Date: ", getElement("date").value];
        note.classNote   = ["Class: ", getElement("class").value];
        note.teacher     = ["Teacher: ", getElement("teacher").value];
        note.test        = ["Will this be on a quiz: ", testValue];
        note.theNote     = ["Note: ", getElement("theNote").value];
        note.studyDays = ["Days this week you should study this material: ", studyDaysValue];
        note.importance  = ["How important this note is: ", getElement("importanceRange").value];
        note.password    = ["Password: ", getElement("password").value];
        
        //save into local storage. use stringify to convert object to string.
        localStorage.setItem(id, JSON.stringify(note));
        alert("Your note has been saved.");
    };
    
    //display data function. write data from local storage to browser.
    var showNotes = function(){
        toggleControls("on");
        if (localStorage.length === 0){
            alert("You don't have any notes saved.");
            window.location.reload();
            return false;
        }
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id","notes");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        getElement("notes").style.display = "block";
        for(var i = 0; i < localStorage.length; i++){
            var makeLi = document.createElement("li");
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //convert the string from local storage value back to object
            var obj = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeLi.appendChild(makeSubList);
            for (var n in obj){
                var makeSubLi = document.createElement("li");
                makeSubList.appendChild(makeSubLi);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubLi.innerHTML = optSubText;
            }
        }
    };
    
    //clear data function
    var clearNotes = function(){
        if (localStorage.length === 0){
            alert("There are no notes to clear.");
        } else {
            localStorage.clear();
            alert("All notes have been cleared.");
            window.location.reload();
            return false;
        }
    };
    
    var toggleControls = function(n){
        switch(n){
            case "on":
                getElement("noteForm").style.display = "none";
                getElement("clearNotes").style.display = "inline";
                getElement("showNotes").style.display = "none";
                getElement("addNew").style.display = "inline";
                break;
            
            case "off":
                getElement("noteForm").style.display = "block";
                getElement("clearNotes").style.display = "inline";
                getElement("showNotes").style.display = "inline";
                getElement("addNew").style.display = "none";
                getElement("notes").style.display = "none";
                break;
            
            default:
                return false;
        }
    };
    
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
    
    
    var classes = ["-Choose A Class-", "Math", "Science", "Art", "Music", "English", "History"],
        testValue,
        studyDaysValue;
    
    makeClasses();
    
    var saveData = getElement("noteSave");
    saveData.addEventListener("click", saveNote);
    
    var showData = getElement("showNotes");
    showData.addEventListener("click", showNotes);
    
    var clearData = getElement("clearNotes");
    clearData.addEventListener("click", clearNotes);
    
});