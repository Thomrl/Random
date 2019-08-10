windowLoc = window.location.href.split("?")[1];
console.log(windowLoc);

document.querySelector(".presets").style.display = "none";

if (windowLoc === "" || windowLoc === undefined) { //index / front
    document.getElementById("menu").style.display = "block";
}

if (windowLoc == "YON") {
    document.getElementById("decider").style.display = "block";
    document.title = "Yes or No | Random";
    document.getElementById("about-dice").classList.add("hide");
    document.getElementById("about-PUBG").classList.add("hide");
}

if (windowLoc == "RNG") {
    document.getElementById("decider").style.display = "block";
    document.querySelector(".rngElement").style.display = "block";
    document.title = "RNG | Random";
    document.getElementById("about-dice").classList.add("hide");
    document.getElementById("about-PUBG").classList.add("hide");
}

if (windowLoc == "decider") {
    document.getElementById("decider").style.display = "block";
    document.getElementById("uInput").style.display = "block";
    document.getElementById("activate-presets").style.display = "block";
    document.querySelector(".presets").style.display = "none"; //PRESETS
    fetchLocalPresets()
    document.title = "Decider | Random";
    document.getElementById("about-dice").classList.add("hide");
    document.getElementById("about-PUBG").classList.add("hide");
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
/*
document.getElementById("pre-YON").addEventListener("click", function() {
    document.getElementById("uInput").value = "Yes, No";
})

document.getElementById("pre-entertainment").addEventListener("click", function() {
    document.getElementById("uInput").value = "Read, TV Show, Movie, Game, YouTube";
})

document.getElementById("pre-tvshows").addEventListener("click", function() {
    document.getElementById("uInput").value = "12 Monkeys, Outlander, Fear The Walking Dead, From Dusk Till Dawn, The 100, Orange Is The New Black, Sabrina";
})

document.getElementById("pre-watchlist").addEventListener("click", function() {
    document.getElementById("uInput").value = "Altered Carbon, Disenchantment, Wynonna Earp, KillJoys, The Originals, Lucifer, Scorpion, Bates Motel";
})
*/


/*
for(i=0; i < localStorage.length; i++) {
    var currentKey = localStorage.key(i)
    var currentValue = localStorage.getItem(currentKey)
    document.getElementById("pre-watchlist").insertAdjacentHTML("afterend", '<a id="pre-'+currentKey+'" class="btns2 unselectable presets">'+currentKey+'</a>');
    document.getElementById("pre-"+currentKey+"").addEventListener("click", function() {
        document.getElementById("uInput").value = currentValue;
    });
    
    console.log(currentKey+" - "+currentValue);
}

*/

//<a id="pre-watchlist" class="btns2 unselectable presets">TV Watchlist</a>

//save preset
document.getElementById("save-preset").addEventListener("click", function() {
    //Get value from the page
    let nameOfPreset = document.getElementById("name-preset").value
    let valueOfPreset = document.getElementById("uInput").value
    console.log(nameOfPreset)

    //Check if preset name already exists
    if (localStorage.hasOwnProperty(nameOfPreset) == true) {
        console.log("Already exists");
        document.getElementById("pre-"+nameOfPreset).remove();
    } else {
        console.log("Unique Name")
    }

    //Save preset
    localStorage.setItem(document.getElementById("name-preset").value, document.getElementById("uInput").value);

    //Show preset on page
    document.getElementById("pre-watchlist").insertAdjacentHTML("afterend", '<a id="pre-'+nameOfPreset+'" class="btns2 unselectable presets jspresets">'+nameOfPreset+'</a>'); 
    document.getElementById("pre-"+nameOfPreset).addEventListener("click", function() { 
        document.getElementById("uInput").value = valueOfPreset;
    });
})


//fetch presets
function fetchLocalPresets() {
    for(i=0; i < localStorage.length; i++) {
        let currentKey = localStorage.key(i) //let <3
        let currentValue = localStorage.getItem(currentKey) //let <3
        document.getElementById("pre-watchlist").insertAdjacentHTML("afterend", '<a id="pre-'+currentKey+'" class="btns2 unselectable presets jspresets">'+currentKey+'</a>'); 
        document.getElementById("pre-"+currentKey).addEventListener("click", function() { 
            document.getElementById("uInput").value = currentValue;
            document.getElementById("name-preset").value = currentKey;
        });
        console.log(currentKey+" - "+currentValue); 
    }
}

//delete preset
document.getElementById("delete-preset").addEventListener("click", function() {
    var keyToDelete = document.getElementById("name-preset").value
    localStorage.removeItem(keyToDelete);
    document.getElementById("pre-"+keyToDelete).remove();
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


DOMaboutOpen.addEventListener("click", function() {
    DOMabout.style.display = "block";
    //DOMsettings.style.display = "none";
})

/*
document.getElementById("deciderItem").addEventListener("click", function() {
    DOMsettings.style.display = "block";
    DOMabout.style.display = "none";
})
*/

DOMcloseWindow.addEventListener("click", function() {
    DOMabout.style.display = "none";
})

DOMcloseWindowButton.addEventListener("click", function() {
    DOMabout.style.display = "none";
})

//Settings
/*
DOMcloseWindow2.addEventListener("click", function() {
    DOMsettings.style.display = "none";
})

DOMcloseWindowButton2.addEventListener("click", function() {
    DOMsettings.style.display = "none";
})
*/

//Console print
console.log("Program loaded");