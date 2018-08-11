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
DOMprimaryWeapon3 = document.getElementById("primaryWeapon3");


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
    console.log(chosen)
    primaryCap = 2;
    secondaryCap = 2;
    wepCatCheck(0, chosen);
    wepCatCheck(1, chosen);
    wepCatCheck(2, chosen);
    console.log("Primary Weapon cap is set to: "+primaryCap);
    console.log("Secondary Weapon cap is set to: "+secondaryCap);
    console.log("-----------------------------------------------");
    loadout();
}


//Loadout

var primaryCap = 2;
var secondaryCap = 2;

var wepCat = [['Finka', 'Lion', 'IQ', 'Fuze', 'Twitch', 'Doc', 'Rook', 'Thatcher', 'Jackal'], // 3 Primary Weapons
['Blitz', 'Montagne', 'Glaz'], // 1 Primary Weapon
['Ying', 'Zofia', 'Blitz', 'Mute', 'Lesion', 'Ela', 'Thatcher', 'IQ', 'Jäger', 'Bandit', 'Buck', 'Frost', 'Blackbeard', 'Valkyrie', 'Capitão', 'Caveira']]; // 1 Secondary Weapon

var foundHere = "nowhere";
var boop = 0;

function wepCatCheck(x, chosen) {
    //console.log("The beginning of wepCatCheck!! - Checking: wepCat"+x+" for "+chosen);
    //console.log("Checking in "+wepCat[x]);
    for (var i = 0; i < wepCat[x].length; i++) {
        if (chosen == wepCat[x][i]) {
            foundHere = wepCat[x];
            if (foundHere == wepCat[0]) {
                primaryCap = 3;
                //console.log("Succes!! - Primary set to 3");
            } else if (foundHere == wepCat[1]) {
                primaryCap = 1;
                //console.log("Succes!! - Primary set to 1");
            } else if (foundHere == wepCat[2]) {
                secondaryCap = 1;
                //console.log("Succes!! - Secondary set to 1");
            };
        }
    }
    //console.log("--------------------");
}

function loadout() {
    DOMsecondaryWeapon2.style.display = "inline-block";
    DOMprimaryWeapon2.style.display = "inline-block";
    DOMprimaryWeapon3.style.display = "none";
    if (primaryCap == 1) {
        l1 = 1;
    } else {
        l1 = Math.floor(Math.random() * primaryCap);
    };
    if (secondaryCap == 1) {
        l2 = 1;
    } else {
        l2 = Math.floor(Math.random() * secondaryCap);
    };
    l3 = Math.floor(Math.random() * 2);
    if (primaryCap == 3 && secondaryCap == 1) {
        DOMprimaryWeapon3.style.display = "inline-block";
        DOMsecondaryWeapon2.style.display = "none";
    } else if (primaryCap == 1 && secondaryCap == 1) {
        DOMprimaryWeapon2.style.display = "none";
        DOMsecondaryWeapon2.style.display = "none";
    } else if (primaryCap == 1) {
        DOMprimaryWeapon2.style.display = "none";
    } else if (primaryCap == 3) {
        DOMprimaryWeapon3.style.display = "inline-block";
    } else if (secondaryCap == 1) {
        DOMsecondaryWeapon2.style.display = "none";
    } else {
        boop++
    }
    if (primaryCap == 3) {
        loadoutCheckPlus(l1, DOMprimaryWeapon1, DOMprimaryWeapon2, DOMprimaryWeapon3);
    } else {
        loadoutCheck(l1, DOMprimaryWeapon1, DOMprimaryWeapon2);
    }
    loadoutCheck(l2, DOMsecondaryWeapon1, DOMsecondaryWeapon2);
    loadoutCheck(l3, DOMsecondaryGadget1, DOMsecondaryGadget2);
}

function loadoutCheck(LR, option1, option2) {
    option1.classList.remove('loadoutActive');
    option2.classList.remove('loadoutActive');
    if (LR == 1) {
        option1.classList.add('loadoutActive');
    } else {
        option2.classList.add('loadoutActive');
    }
}

function loadoutCheckPlus(LR, option1, option2, option3) {
    option3.classList.remove('loadoutActive');
    option2.classList.remove('loadoutActive');
    option1.classList.remove('loadoutActive');
    if (LR == 1) {
        option1.classList.add('loadoutActive');
    } else if (LR == 2) {
        option2.classList.add('loadoutActive');
    } else {
        option3.classList.add('loadoutActive');
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