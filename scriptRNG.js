        var resultOutput = document.getElementById("resultHere");
        var resultButton = document.getElementById("getResult");

        resultButton.addEventListener("click", getTheResult);

        function getTheResult() {
            var userInput = parseInt(document.getElementById("uInput").value);
            var userInput2 = parseInt(document.getElementById("uInput2").value);
            var numbers = [];

            for (i=userInput; i <= userInput2; i++) {
                numbers.push(i);
                var result = numbers[Math.floor(Math.random() * numbers.length)]
            }
            resultOutput.innerHTML = result;
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
