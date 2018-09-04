
windowLoc = window.location.href.split("?")[1];
console.log(windowLoc);

if (windowLoc == "RNG") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("decider").style.display = "block";
    document.querySelector(".hide-on-yes").style.display = "none";
    document.getElementById("activateYON").style.display = "none";
    document.getElementById("uInput").style.display = "none";
    document.querySelector(".rngElement").style.display = "block";
    document.title = "RNG | Random";
}

if (windowLoc == "YON") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("decider").style.display = "block";
    document.getElementById("uInput").style.display = "none";
    document.getElementById("activateYON").style.display = "none";
    document.querySelector(".hide-on-yes").style.display = "none";
    document.title = "Yes or No | Random";
}

if (windowLoc == "decider") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("decider").style.display = "block";
    document.querySelector(".hide-on-yes").style.display = "none";
    document.getElementById("activateYON").style.display = "none";
    document.title = "Decider | Random";
}


//Decider, Yes or No & RNG
var resultOutput = document.getElementById("resultHere");
var resultButton = document.getElementById("getResult");
resultButton.addEventListener("click", getTheResult);

function getTheResult() {
    if (windowLoc == "RNG") {
        var userInput1 = parseInt(document.getElementById("uInput1").value);
        var userInput2 = parseInt(document.getElementById("uInput2").value);
        var numbers = [];

        for (i=userInput1; i <= userInput2; i++) {
            numbers.push(i);
        }
        var result = numbers[Math.floor(Math.random() * numbers.length)];
        console.log(userInput2);
        resultOutput.innerHTML = result;
        resultOutput.style.color = "white";
        resultOutput.style.fontSize = "2.5rem";
    } else {
        if (windowLoc == "YON") {
            document.getElementById("uInput").textContent = "Yes, No";
        }
        var userInput = document.getElementById("uInput").value.toString();
        var splitData = userInput.split(",");
        var findRandom = splitData[Math.floor(Math.random() * splitData.length)];
        console.log(findRandom);
        resultOutput.textContent = findRandom;
        resultOutput.style.color = "white";
        resultOutput.style.fontSize = "2.5rem";
    
        if (findRandom == "Yes") {
            resultOutput.style.color = "#00E500";
            resultOutput.style.fontSize = "3rem";
        } else if (findRandom == " No") {
            resultOutput.style.color = "red";
            resultOutput.style.fontSize = "3rem";
        };
    };
};


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
DOMabout = document.getElementById("about");


DOMaboutOpen.addEventListener("click", function() {
    DOMabout.style.display = "block";
})

DOMcloseWindow.addEventListener("click", function() {
    DOMabout.style.display = "none";
})

DOMcloseWindowButton.addEventListener("click", function() {
    DOMabout.style.display = "none";
})


//Console print
console.log("Program loaded");