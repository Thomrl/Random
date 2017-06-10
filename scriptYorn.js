//  Yes or No Script.

//  JS VAR         =                          ID from HTML file
var yornResultHere = document.getElementById("yornResultHere");
var yornGetResult = document.getElementById("yornGetResult");

yornGetResult.addEventListener("click", getYornResult);

function getYornResult() {
    var yesOrNo = [Math.floor(Math.random() *2 )];
    if (yesOrNo == true) {
        yornResultHere.className = "yes";
        yornResultHere.innerHTML = "Yes";
    } else {
        yornResultHere.innerHTML = "No";
        yornResultHere.className = "no";
    }
}



        window.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            getYornResult(e);
            }
        });

        function validate(e) {
            var text = e.value;
            //validation of the input...
        }





console.log("Program loaded");