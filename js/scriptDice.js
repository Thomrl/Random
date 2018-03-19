//  Dice Script

//  JS VAR         =             Class from HTML file
diceDOM = document.querySelector('.dice');

// Roll at the begining
roll();


// Roll function
function roll() {
    dice = Math.floor(Math.random() * 6)+ 1;  //number from 1 to 6
    diceDOM.src = 'img/dice-'+dice+'.png';    //change dice image according to the random number
}

diceDOM.addEventListener('click', roll)  


        window.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            roll(e);
            }
        });

        function validate(e) {
            var text = e.value;
            //validation of the input...
        }

console.log("Program loaded");