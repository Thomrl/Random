windowLoc = window.location.href.split("?")[1];
console.log(windowLoc);

if (windowLoc == "RNG") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("decider").style.display = "block";
    document.querySelector(".presets").style.display = "none";
    //document.getElementById("activateYON").style.display = "none";
    document.getElementById("uInput").style.display = "none";
    document.querySelector(".rngElement").style.display = "block";
    document.title = "RNG | Random";
    document.getElementById("about-dice").classList.add("hide");
    document.getElementById("about-PUBG").classList.add("hide");
}

if (windowLoc == "YON") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("decider").style.display = "block";
    document.getElementById("uInput").style.display = "none";
    //document.getElementById("activateYON").style.display = "none";
    document.querySelector(".presets").style.display = "none";
    document.title = "Yes or No | Random";
    document.getElementById("about-dice").classList.add("hide");
    document.getElementById("about-PUBG").classList.add("hide");
}

if (windowLoc == "decider") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("decider").style.display = "block";
    document.querySelector(".presets").style.display = "none"; //PRESETS
    //document.getElementById("activateYON").style.display = "none";
    document.title = "Decider | Random";
    document.getElementById("about-dice").classList.add("hide");
    document.getElementById("about-PUBG").classList.add("hide");
    document.getElementById("deciderItem").style.display = "block";
}



/***************************************************************************

Functionality of:  Decider, Yes or No & RNG

****************************************************************************/


var resultOutput = document.getElementById("resultHere");
var resultButton = document.getElementById("getResult");
resultButton.addEventListener("click", getTheResult);

function getTheResult() {
    if (windowLoc == "RNG") {
        // Random Number Generator. Generate number from user input 1 to user input 2.
        var userInput1 = parseInt(document.getElementById("uInput1").value);
        var userInput2 = parseInt(document.getElementById("uInput2").value);
        var numbers = [];

        for (i=userInput1; i <= userInput2; i++) {
            numbers.push(i);
        }
        var result = numbers[Math.floor(Math.random() * numbers.length)];
        resultOutput.innerHTML = result;
        resultOutput.style.color = "white";
        resultOutput.style.fontSize = "2.5rem";
    } else {
        if (windowLoc == "YON") {
            // Yes Or No. Pick between yer or no, change color and so on.
            document.getElementById("uInput").textContent = "Yes, No";
        }
        var userInput = document.getElementById("uInput").value.toString();
        var splitData = userInput.split(",");
        var findRandom = splitData[Math.floor(Math.random() * splitData.length)];
        

        console.log(findRandom);
        resultOutput.style.color = "white";
        resultOutput.style.fontSize = "2.5rem";

    
        if (findRandom == "Yes") {
            resultOutput.style.color = "#00E500";
            resultOutput.style.fontSize = "3rem";
        } else if (findRandom == " No") {
            resultOutput.style.color = "red";
            resultOutput.style.fontSize = "3rem";
        };
        //resultOutput
        
        resultOutput.textContent = findRandom;
    };
};

//presets
var presetsActive = 0;
document.getElementById("activate-presets").addEventListener("click", function() {
    if (presetsActive == 0) {
        document.querySelector(".presets").style.display = "block";
        presetsActive = 1;
    } else if (presetsActive == 1) {
        document.querySelector(".presets").style.display = "none";
        presetsActive = 0;
    }
})

document.getElementById("pre-YON").addEventListener("click", function() {
    document.getElementById("uInput").value = "Yes, No";
})

document.getElementById("pre-entertainment").addEventListener("click", function() {
    document.getElementById("uInput").value = "Read, TV Show, Movie, Game, YouTube";
})

document.getElementById("pre-tvshows").addEventListener("click", function() {
    document.getElementById("uInput").value = "12 Monkeys, Outlander, Altered Carbon, Fear The Walking Dead, Disenchantment, Wynonna Earp, KillJoys, From Dusk Till Dawn, The Originals, Lucifer, Scorpion, Bates Motel";
})





//Enter
window.addEventListener("keydown", function(e) {
if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    getTheResult(e);
    }
});

function validate(e) {
    var text = e.value;
    //validation of the input...
}



//About
DOMaboutOpen = document.getElementById("about-open");
DOMcloseWindow = document.getElementById("close-window");
DOMcloseWindowButton = document.getElementById("close-window-button");
DOMcloseWindow2 = document.getElementById("close-window2");
DOMcloseWindowButton2 = document.getElementById("close-window-button2");
DOMabout = document.getElementById("about");
//Settings
DOMsettings = document.getElementById("settings");
DOMsettings = document.getElementById("settings");


DOMaboutOpen.addEventListener("click", function() {
    DOMabout.style.display = "block";
    DOMsettings.style.display = "none";
})

document.getElementById("deciderItem").addEventListener("click", function() {
    DOMsettings.style.display = "block";
    DOMabout.style.display = "none";
})

DOMcloseWindow.addEventListener("click", function() {
    DOMabout.style.display = "none";
})

DOMcloseWindowButton.addEventListener("click", function() {
    DOMabout.style.display = "none";
})

//Settings
DOMcloseWindow2.addEventListener("click", function() {
    DOMsettings.style.display = "none";
})

DOMcloseWindowButton2.addEventListener("click", function() {
    DOMsettings.style.display = "none";
})


//Console print
console.log("Program loaded");