//Javascript file for VFW Project 3
//Bryce Sipes
//Project 3
//4/25/13
//VFW 1304

window.addEventListener("DOMContentLoaded", function(){
    
    //get element function
    var getElement = function(elementId){
        var myElement = document.getElementById(elementId);
        return myElement;
    };
    
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
    var saveNote = function(key){
        if (!key){
            var id = Math.floor(Math.random() * 1000000);
        } else {
            id = key;
        }
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
            var linksLi = document.createElement("li");
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
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi); //creates the edit and delete links for the notes
        }
    };
    
    //makes the edit and delete links for the notes
    var makeItemLinks = function(key, linksLi){
        //adds edit note link
        var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Note";
        editLink.addEventListener("click", editNote);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);
        
        //add line break
        var lineBreak = document.createElement("br");
        linksLi.appendChild(lineBreak);
        
        //adds delete note link
        var deleteLink = document.createElement("a");
        deleteLink.href = "a";
        deleteLink.key = key;
        var deleteText = "Delete Note";
        deleteLink.addEventListener("click", deleteNote);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
    };
    
    //edit note function
    var editNote = function(){
        //get data from note from local storage
        var noteValue = localStorage.getItem(this.key);
        var note = JSON.parse(noteValue);
        
        toggleControls("off");
        
        //populate the form with the saved note data
        getElement("date").value = note.date[1];
        getElement("class").value = note.classNote[1];
        getElement("teacher").value = note.teacher[1];
        
        var testRadios = document.forms[0].test;
        for(var i = 0; i < testRadios.length; i++){
            if (testRadios[i].value === "Yes" && note.test[1] === "Yes"){
                testRadios[i].setAttribute("checked", "checked");
            } else if (testRadios[i].value === "No" && note.test[1] === "No"){
                testRadios[i].setAttribute("checked", "checked");
            }
        }
        
        getElement("theNote").value = note.theNote[1];
        getElement("importanceRange").value = note.importance[1];
        getElement("password").value = note.password[1];
        
        //remove listener from saveData function
        saveData.removeEventListener("click", saveNote);
        
        //change submit button to say save edited contact
        getElement("noteSave").value = "Save Edited Contact";
        var editSubmit = getElement("noteSave");
        
        //save the key value so it can be used when the data is saved
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
    };
    
    //delete note function
    var deleteNote = function(){
        var confirmMessage = confirm("Are you sure you want to delete this note?");
        if (confirmMessage){
            localStorage.removeItem(this.key);
            alert("The note was deleted.");
            window.location.reload();
        }
    };
    
    // validate form fields function
    var validate = function(eventData){
        
        //define the fields to be checked
        var classesDropDown = getElement("class");
        var note = getElement("theNote");
        
        //reset error messages
        errMsg.innerHTML = "";
        classesDropDown.style.border = "1px solid black";
        note.style.border = "1px solid black";
        
        //get error messages
        var errorMessages = [];
        
        //class validation
        if (classesDropDown.value === "-Choose A Class-"){
            var classError = "Please choose a class.";
            classesDropDown.style.border = "1px solid red";
            errorMessages.push(classError);
        }
        
        //note validation
        if (note.value === "" || note.value === "*Put your note here."){
            var noteError = "Please enter a note.";
            note.style.border = "1px solid red";
            errorMessages.push(noteError);
        }
        
        //display error messages if there were any
        if (errorMessages.length >= 1){
            for (var i = 0; i < errorMessages.length; i++){
                var errorText = document.createElement("li");
                errorText.innerHTML = errorMessages[i];
                errMsg.appendChild(errorText);
            }
            eventData.preventDefault();
            return false;
        } else {
            saveNote(this.key);
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
        errMsg = getElement("errors"),
        testValue,
        studyDaysValue;
    
    makeClasses();
    
    var saveData = getElement("noteSave");
    saveData.addEventListener("click", validate);
    
    var showData = getElement("showNotes");
    showData.addEventListener("click", showNotes);
    
    var clearData = getElement("clearNotes");
    clearData.addEventListener("click", clearNotes);
    
});