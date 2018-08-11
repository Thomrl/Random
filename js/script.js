        var resultOutput = document.getElementById("resultHere");
        var resultButton = document.getElementById("getResult");

        resultButton.addEventListener("click", getTheResult);

        function getTheResult() {
            var userInput = document.getElementById("uInput").value.toString();
            var splitData = userInput.split(",");
            var findRandom = splitData[Math.floor(Math.random() * splitData.length)];
            resultOutput.textContent = findRandom;
            resultOutput.style.color = "white";
            resultOutput.style.fontSize = "2rem";
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

//Console print
console.log("Program loaded");
