//  Dice Script

var theme = 'img';
theme = 'img/orange';

//  JS VAR         =             Class from HTML file
diceDOM = document.querySelector('.dice');

// Roll at the begining
roll();


// Roll function
function roll() {
    dice = Math.floor(Math.random() * 6)+ 1;  //number from 1 to 6
    diceDOM.src = theme+'/dice-'+dice+'.png';    //change dice image according to the random number
}

diceDOM.addEventListener('click', roll)  

// themes
document.querySelector('#color1').addEventListener('click', function() {
    theme = 'img/orange';
    diceDOM.src = theme+'/dice-'+dice+'.png';
});

document.querySelector('#color2').addEventListener('click', function() {
    theme = 'img';
    diceDOM.src = theme+'/dice-'+dice+'.png';
});


//Enter to roll
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