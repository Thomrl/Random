//Operators
var operators = ['Maestro', 'Alibi', 'Lion', 'Finka', 'Vigil', 'Dokkaebi', 'Zofia',
 'Ela', 'Ying', 'Lesion', 'Mira', 'Jackal', 'Hibana', 'Echo', 'Caveira', 'Capitão',
  'Blackbeard', 'Valkyrie', 'Buck', 'Frost', 'Mute', 'Sledge', 'Smoke', 'Thatcher',
   'Ash', 'Castle', 'Pulse', 'Thermite', 'Montagne', 'Twitch', 'Doc', 'Rook', 'Jäger',
    'Bandit', 'Blitz', 'IQ', 'Fuze', 'Glaz', 'Tachanka', 'Kapkan'];

var attackers = ['Lion', 'Finka', 'Dokkaebi', 'Zofia', 'Ying', 'Jackal', 'Hibana', 'Capitão',
 'Blackbeard', 'Buck', 'Sledge', 'Thatcher', 'Ash', 'Thermite', 'Montagne', 'Twitch', 'Blitz', 'IQ', 'Fuze', 'Glaz'];

var deffenders = ['Maestro', 'Alibi', 'Vigil', 'Ela', 'Lesion', 'Mira', 'Echo', 'Caveira', 'Valkyrie',
 'Frost', 'Mute', 'Smoke', 'Castle', 'Pulse', 'Doc', 'Rook', 'Jäger', 'Bandit', 'Tachanka', 'Kapkan'];

var chosen = "Maestro";

DOMattacker = document.querySelector("#attacker");
DOMdefender = document.querySelector("#defender");
DOMimg = document.querySelector(".op-img");
DOMbadge = document.querySelector(".op-badge");
DOMname = document.querySelector(".op-name");

function randomAttacker() {
    chosen = attackers[Math.floor(Math.random() * attackers.length)];
    DOMimg.src = "img/R6S/"+chosen+"1"+".png";
    DOMbadge.src = "img/R6S/"+chosen+"2"+".png";
    DOMname.textContent = chosen;
    DOMdefender.classList.remove('dongsActive');
    DOMattacker.classList.add('dongsActive');
    console.log(chosen)
}

function randomDefender() {
    chosen = deffenders[Math.floor(Math.random() * deffenders.length)];
    DOMimg.src = "img/R6S/"+chosen+"1"+".png";
    DOMbadge.src = "img/R6S/"+chosen+"2"+".png";
    DOMname.textContent = chosen;
    DOMdefender.classList.add('dongsActive');
    DOMattacker.classList.remove('dongsActive');
    console.log(chosen)
}


function randomOperator() {
    chosen = operators[Math.floor(Math.random() * operators.length)];
    DOMimg.src = "img/R6S/"+chosen+"1"+".png";
    DOMbadge.src = "img/R6S/"+chosen+"2"+".png";
    DOMname.textContent = chosen;
    console.log(chosen)
}

DOMattacker.addEventListener('click', randomAttacker);
DOMdefender.addEventListener('click', randomDefender);

        function validate(e) {
            var text = e.value;
            //validation of the input...
        }

//Console print
console.log("Program loaded");
