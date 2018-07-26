//Operators
var operators = ['Maestro', 'Alibi', 'Lion', 'Finka', 'Vigil', 'Dokkaebi', 'Zofia',
 'Ela', 'Ying', 'Lesion', 'Mira', 'Jackal', 'Hibana', 'Echo', 'Caveira', 'Capitão',
  'Blackbeard', 'Valkyrie', 'Buck', 'Frost', 'Mute', 'Sledge', 'Smoke', 'Thatcher',
   'Ash', 'Castle', 'Pulse', 'Thermite', 'Montagne', 'Twitch', 'Doc', 'Rook', 'Jäger',
    'Bandit', 'Blitz', 'IQ', 'Fuze', 'Glaz', 'Tachanka', 'Kapkan'];

var attackers = ['Lion', 'Finka', 'Dokkaebi', 'Zofia', 'Ying', 'Jackal', 'Hibana', 'Capitão',
 'Blackbeard', 'Buck', 'Sledge', 'Thatcher', 'Ash', 'Thermite', 'Montagne', 'Twitch', 'Blitz', 'IQ', 'Fuze', 'Glaz'];

var defenders = ['Maestro', 'Alibi', 'Vigil', 'Ela', 'Lesion', 'Mira', 'Echo', 'Caveira', 'Valkyrie',
 'Frost', 'Mute', 'Smoke', 'Castle', 'Pulse', 'Doc', 'Rook', 'Jäger', 'Bandit', 'Tachanka', 'Kapkan'];


//DOM
DOMattacker = document.querySelector("#attacker");
DOMdefender = document.querySelector("#defender");
DOMimg = document.querySelector(".op-img");
DOMbadge = document.querySelector(".op-badge");
DOMname = document.querySelector(".op-name");
DOMprimaryWeapon1 = document.getElementById("primaryWeapon1");
DOMsecondaryWeapon1 = document.getElementById("secondaryWeapon1");
DOMsecondaryGadget1 = document.getElementById("secondaryGadget1");
DOMprimaryWeapon2 = document.getElementById("primaryWeapon2");
DOMsecondaryWeapon2 = document.getElementById("secondaryWeapon2");
DOMsecondaryGadget2 = document.getElementById("secondaryGadget2");


//Action!
DOMattacker.addEventListener('click', randomAttacker);
DOMdefender.addEventListener('click', randomDefender);

function randomAttacker() {
    randomOperator(attackers, defenders);
    DOMattacker.classList.add('dongsActive');
    DOMdefender.classList.remove('dongsActive');
}

function randomDefender() {
    randomOperator(defenders, attackers);
    DOMdefender.classList.add('dongsActive');
    DOMattacker.classList.remove('dongsActive');
}

function randomOperator(operator) {
    chosen = operator[Math.floor(Math.random() * operator.length)];
    DOMimg.src = "img/R6S/"+chosen+"1"+".png";
    DOMbadge.src = "img/R6S/"+chosen+"2"+".png";
    DOMname.textContent = chosen;
    loadout();
    console.log(chosen)
}


//Loadout
function loadout() {
    l1 = Math.floor(Math.random() * 2);
    l2 = Math.floor(Math.random() * 2);
    l3 = Math.floor(Math.random() * 2);
    loadoutCheck(l1, DOMprimaryWeapon1, DOMprimaryWeapon2);
    loadoutCheck(l2, DOMsecondaryWeapon1, DOMsecondaryWeapon2);
    loadoutCheck(l3, DOMsecondaryGadget1, DOMsecondaryGadget2);
}

function loadoutCheck(LR, option1, option2) {
    if (LR == 1) {
        option2.classList.remove('loadoutActive');
        option1.classList.add('loadoutActive');
    } else {
        option1.classList.remove('loadoutActive');
        option2.classList.add('loadoutActive');
    }
}


//toggle loadout interface
var loadoutToggle = 0;

document.getElementById("r6s-toggle-loadout").addEventListener("click", function() {
    console.log("toggle")
    if (loadoutToggle == 0) {
        document.querySelector(".R6SloadOut").style.display = "block";
        loadoutToggle = 1;
    } else {
        document.querySelector(".R6SloadOut").style.display = "none";
        loadoutToggle = 0;  
    }
})


//Console print
console.log("Program loaded");