
document.getElementById("menu-decider").addEventListener("click", function(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("decider").style.display = "block";
    document.querySelector(".hide-on-yes").style.display = "none";
    document.getElementById("activateYON").style.display = "none";
    document.title = "Decider | Random";


    //indexSite
})


document.getElementById("menu-YON").addEventListener("click", function(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("decider").style.display = "block";
    window.YONtick = 1;
    getTheResult();
    document.getElementById("uInput").style.display = "none";
    document.getElementById("activateYON").style.display = "none";
    document.querySelector(".hide-on-yes").style.display = "none";


    
    document.title = "Yes or No | Random";




    //indexSite
})






/*
var userInput = "";
var findRandom = "";
*/

//Decider
var resultOutput = document.getElementById("resultHere");
var resultButton = document.getElementById("getResult");
resultButton.addEventListener("click", getTheResult);

function getTheResult() {
    if (YONtick == 1) {
        document.getElementById("uInputReset").innerHTML = '<textarea id="uInput" class="boxboxplease uInput" placeholder="Type different things in here. Use comma , to split them up."></textarea>';
        
        document.getElementById("uInput").textContent = "Yes, No";
        window.YONtick = 0;
    }
    var userInput = document.getElementById("uInput").value.toString();
    var splitData = userInput.split(",");
    var findRandom = splitData[Math.floor(Math.random() * splitData.length)];
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
}

window.addEventListener("keydown", function(e) {
if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    getTheResult(e);
    }
});

function validate(e) {
    var text = e.value;
    //validation of the input...
}

//Yes or No

var YONtick = 0;


document.getElementById("activateYON").addEventListener("click", function(){
    window.YONtick = 1;
    getTheResult();
    
    /*if (YONtick == 1) {
        YONtick = 2;
    } else {
        document.getElementById("uInput").textContent = "Yes, No ";
        YONtick = 1;
    }*/
})











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
