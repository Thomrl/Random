/************************************
 * 
 *      OPERATORS
 * 
 ***********************************/
var Attacker = {
    lion: {name: 'Lion', primaryWeapon: 3, secondaryWeapon: 2},
    finka: {name: 'Finka', primaryWeapon: 3, secondaryWeapon: 2},
    dokkaebi: {name: 'Dokkaebi', primaryWeapon: 2, secondaryWeapon: 2},
    zofia: {name: 'Zofia', primaryWeapon: 2, secondaryWeapon: 1},
    ying: {name: 'Ying', primaryWeapon: 2, secondaryWeapon: 1},
    jackal: {name: 'Jackal', primaryWeapon: 3, secondaryWeapon: 2},
    hibana: {name: 'Hibana', primaryWeapon: 2, secondaryWeapon: 2},
    capitão: {name: 'Capitão', primaryWeapon: 2, secondaryWeapon: 1},
    blackbeard: {name: 'Blackbeard', primaryWeapon: 2, secondaryWeapon: 1},
    buck: {name: 'Buck', primaryWeapon: 2, secondaryWeapon: 2},
    sledge: {name: 'Sledge', primaryWeapon: 2, secondaryWeapon: 2},
    thatcher: {name: 'Thatcher', primaryWeapon: 3, secondaryWeapon: 1},
    ash: {name: 'Ash', primaryWeapon: 2, secondaryWeapon: 2},
    thermite: {name: 'Thermite', primaryWeapon: 2, secondaryWeapon: 2},
    montagne: {name: 'Montagne', primaryWeapon: 1, secondaryWeapon: 2},
    twitch: {name: 'Twitch', primaryWeapon: 3, secondaryWeapon: 2},
    blitz: {name: 'Blitz', primaryWeapon: 1, secondaryWeapon: 1},
    iq: {name: 'IQ', primaryWeapon: 3, secondaryWeapon: 2},
    fuze: {name: 'Fuze', primaryWeapon: 3, secondaryWeapon: 2},
    glaz: {name: 'Glaz', primaryWeapon: 1, secondaryWeapon: 2},
    maverick: {name: 'Maverick', primaryWeapon: 2, secondaryWeapon: 1},
    nomad: {name: 'Nomad', primaryWeapon: 2, secondaryWeapon: 1}
}

var Defender = {
    maestro: {name: 'Maestro', primaryWeapon: 2, secondaryWeapon: 2},
    alibi: {name: 'Alibi', primaryWeapon: 2, secondaryWeapon: 2},
    vigil: {name: 'Vigil', primaryWeapon: 2, secondaryWeapon: 2},
    Ela: {name: 'Ela', primaryWeapon: 2, secondaryWeapon: 1},
    Lesion: {name: 'Lesion', primaryWeapon: 2, secondaryWeapon: 1},
    Mira: {name: 'Mira', primaryWeapon: 2, secondaryWeapon: 2},
    Echo: {name: 'Echo', primaryWeapon: 2, secondaryWeapon: 2},
    Caveira: {name: 'Caveira', primaryWeapon: 2, secondaryWeapon: 1},
    Valkyrie: {name: 'Valkyrie', primaryWeapon: 2, secondaryWeapon: 1},
    Frost: {name: 'Frost', primaryWeapon: 2, secondaryWeapon: 1},
    Mute: {name: 'Mute', primaryWeapon: 2, secondaryWeapon: 1},
    Smoke: {name: 'Smoke', primaryWeapon: 2, secondaryWeapon: 2},
    Castle: {name: 'Castle', primaryWeapon: 3, secondaryWeapon: 2},
    Pulse: {name: 'Pulse', primaryWeapon: 3, secondaryWeapon: 2},
    Doc: {name: 'Doc', primaryWeapon: 3, secondaryWeapon: 2},
    Rook: {name: 'Rook', primaryWeapon: 3, secondaryWeapon: 2},
    Jäger: {name: 'Jäger', primaryWeapon: 2, secondaryWeapon: 1},
    Bandit: {name: 'Bandit', primaryWeapon: 2, secondaryWeapon: 1},
    Tachanka: {name: 'Tachanka', primaryWeapon: 2, secondaryWeapon: 2},
    Kapkan: {name: 'Kapkan', primaryWeapon: 2, secondaryWeapon: 2},
    Clash: {name: 'Clash', primaryWeapon: 1, secondaryWeapon: 2},
    Kaid: {name: 'Kaid', primaryWeapon: 2, secondaryWeapon: 1},
}


//DOM
DOMattacker = document.querySelector("#attacker");
DOMdefender = document.querySelector("#defender");
DOMimg = document.querySelector(".op-img");
DOMbadge = document.querySelector(".op-badge");
DOMname = document.querySelector(".op-name");


//Action!
DOMattacker.addEventListener('click', randomAttacker);
DOMdefender.addEventListener('click', randomDefender);

function randomAttacker() {
    randomOperator(Object.values(Attacker), Object.values(Defender));
    DOMattacker.classList.add('dongsActive');
    DOMdefender.classList.remove('dongsActive');
}

function randomDefender() {
    randomOperator(Object.values(Defender), Object.values(Attacker));
    DOMdefender.classList.add('dongsActive');
    DOMattacker.classList.remove('dongsActive');
}

function randomOperator(operator) {
    chosen = operator[Math.floor(Math.random() * operator.length)];
    chosenName = chosen.name
    DOMimg.src = "img/R6S/"+chosenName+"1"+".png";
    DOMbadge.src = "img/R6S/"+chosenName+"2"+".png";
    DOMimg.style.width = "352px";
    DOMname.textContent = chosenName;
    console.log(chosen)
    primarywep = chosen.primaryWeapon
    secondarywep = chosen.secondaryWeapon
    loadout(primarywep, secondarywep);
}


//loadout
var hasbeenrun = 0
function loadout(wep1, wep2) {

    //Reset lines

    if(hasbeenrun == 1) {
        for (i=0; i < previousPrimaryWeaponAmount; i++) {
            document.getElementById('primaryWeapon'+[i+1]+'').remove();
        }
        for (i=0; i < previousSecondaryWeaponAmount; i++) {
            document.getElementById('secondaryWeapon'+[i+1]+'').remove();
        }
        for (i=0; i < 2; i++) {
            document.getElementById('secondaryGadget'+[i+1]+'').remove();
        }
    }

    //Make needed weapon lines

    for (i=0; i < wep1; i++) {
        document.getElementById('primaryWeapon').insertAdjacentHTML('beforeend','<div id="primaryWeapon'+[i+1]+'" class="loadoutLines" ></div>');
    }

    for (i=0; i < wep2; i++) {
        document.getElementById('secondaryWeapon').insertAdjacentHTML('beforeend','<div id="secondaryWeapon'+[i+1]+'" class="loadoutLines" ></div>');
    }

    for (i=0; i < 2; i++) {
        document.getElementById('secondaryGadget').insertAdjacentHTML('beforeend','<div id="secondaryGadget'+[i+1]+'" class="loadoutLines" ></div>');
    }

    //Save previous amount to delete on next run
    hasbeenrun = 1;
    previousPrimaryWeaponAmount = wep1;
    previousSecondaryWeaponAmount = wep2;

    //Choose

    chosenPrimaryWeapon = Math.floor(Math.random() * wep1);
    chosenSecondaryWeapon = Math.floor(Math.random() * wep2);
    chosenSecondaryGadget = Math.floor(Math.random() * 2);

    console.log("Chosen primary weapon = "+(chosenPrimaryWeapon+1))
    console.log("Chosen secondary weapon = "+(chosenSecondaryWeapon+1))
    console.log("Chosen secondary gadget = "+(chosenSecondaryGadget+1))

    document.getElementById('primaryWeapon'+[chosenPrimaryWeapon+1]+'').classList.add('loadoutActive');
    document.getElementById('secondaryWeapon'+[chosenSecondaryWeapon+1]+'').classList.add('loadoutActive');
    document.getElementById('secondaryGadget'+[chosenSecondaryGadget+1]+'').classList.add('loadoutActive');
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

//test operators

/*
var testOpStatus = 0;

DOMtestToggle = document.getElementById("test-toggle");
DOMtestToggle.innerHTML = '<i class="fas fa-plus-circle"></i> ON '



document.getElementById("test-toggle").addEventListener("click", function() {
    console.log("testToggle");
    if (testOpStatus == 0) {
        DOMtestToggle.style.backgroundColor = "#FE2020";
        DOMtestToggle.innerHTML = '<i class="fas fa-minus-circle"></i> OFF';
        attackers.pop();
        defenders.pop();
        testOpStatus = 1;
    } else {
        DOMtestToggle.style.backgroundColor = "rgb(5, 138, 5";
        DOMtestToggle.innerHTML = '<i class="fas fa-plus-circle"></i> ON ';
        attackers.push("Nomad");
        defenders.push("Kaid");
        testOpStatus = 0;
    };
});

document.getElementById("test-toggle").addEventListener("mouseenter", function() {
    DOMtestToggle.style.opacity = "0.7";
})

document.getElementById("test-toggle").addEventListener("mouseleave", function() {
    DOMtestToggle.style.opacity = "1";
})
 */

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