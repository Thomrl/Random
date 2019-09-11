//document.body.style.backgroundImage = "url('https://ubistatic19-a.akamaihd.net/resource/en-us/game/rainbow6/siege-v3/r6-siege-v3-bg.jpg')";


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
    nomad: {name: 'Nomad', primaryWeapon: 2, secondaryWeapon: 1},
    gridlock: {name: 'Gridlock', primaryWeapon: 2, secondaryWeapon: 2},
    nøkk: {name: 'Nøkk', primaryWeapon: 2, secondaryWeapon: 2},
    amaru: {name: 'Amaru', primaryWeapon: 2, secondaryWeapon: 2}
}

var Defender = {
    maestro: {name: 'Maestro', primaryWeapon: 2, secondaryWeapon: 2},
    alibi: {name: 'Alibi', primaryWeapon: 2, secondaryWeapon: 2},
    vigil: {name: 'Vigil', primaryWeapon: 2, secondaryWeapon: 2},
    ela: {name: 'Ela', primaryWeapon: 2, secondaryWeapon: 1},
    lesion: {name: 'Lesion', primaryWeapon: 2, secondaryWeapon: 1},
    mira: {name: 'Mira', primaryWeapon: 2, secondaryWeapon: 2},
    echo: {name: 'Echo', primaryWeapon: 2, secondaryWeapon: 2},
    caveira: {name: 'Caveira', primaryWeapon: 2, secondaryWeapon: 1},
    valkyrie: {name: 'Valkyrie', primaryWeapon: 2, secondaryWeapon: 1},
    frost: {name: 'Frost', primaryWeapon: 2, secondaryWeapon: 1},
    mute: {name: 'Mute', primaryWeapon: 2, secondaryWeapon: 1},
    smoke: {name: 'Smoke', primaryWeapon: 2, secondaryWeapon: 2},
    castle: {name: 'Castle', primaryWeapon: 3, secondaryWeapon: 2},
    pulse: {name: 'Pulse', primaryWeapon: 3, secondaryWeapon: 2},
    doc: {name: 'Doc', primaryWeapon: 3, secondaryWeapon: 2},
    rook: {name: 'Rook', primaryWeapon: 3, secondaryWeapon: 2},
    jäger: {name: 'Jäger', primaryWeapon: 2, secondaryWeapon: 1},
    bandit: {name: 'Bandit', primaryWeapon: 2, secondaryWeapon: 1},
    tachanka: {name: 'Tachanka', primaryWeapon: 2, secondaryWeapon: 2},
    kapkan: {name: 'Kapkan', primaryWeapon: 2, secondaryWeapon: 2},
    clash: {name: 'Clash', primaryWeapon: 1, secondaryWeapon: 2},
    kaid: {name: 'Kaid', primaryWeapon: 2, secondaryWeapon: 1},
    mozzie: {name: 'Mozzie', primaryWeapon: 2, secondaryWeapon: 2},
    warden: {name: 'Warden', primaryWeapon: 2, secondaryWeapon: 2},
    goyo: {name: 'Goyo', primaryWeapon: 2, secondaryWeapon: 1}
}


//DOM
DOMattacker = document.querySelector("#attacker");
DOMdefender = document.querySelector("#defender");
DOMimg = document.querySelector(".op-img");
DOMbadge = document.querySelector(".op-badge");
DOMname = document.querySelector(".op-name");


DOMimg.style.width = "352px";

//Action!
DOMattacker.addEventListener('click', randomAttacker);
DOMdefender.addEventListener('click', randomDefender);

function randomAttacker() {
    randomOperator(Object.values(Attacker), Object.values(Defender));
    DOMattacker.classList.add('btns2Active');
    DOMdefender.classList.remove('btns2Active');
}

function randomDefender() {
    randomOperator(Object.values(Defender), Object.values(Attacker));
    DOMdefender.classList.add('btns2Active');
    DOMattacker.classList.remove('btns2Active');
}

var prev1, prev2, prev3 = 0;
function randomOperator(operator) {
    chosen = operator[Math.floor(Math.random() * operator.length)];
    chosenName = chosen.name;
    DOMimg.src = "img/R6S/"+chosenName+"1"+".png";
    DOMbadge.src = "img/R6S/"+chosenName+"2"+".png";
    DOMimg.style.width = "352px";
    DOMname.textContent = chosenName;
    console.log(chosen);
    //primaryWep = chosen.primaryWeapon;
    //secondaryWep = chosen.secondaryWeapon;
    secondaryGad = 2;
    prev1 = loadout(chosen.primaryWeapon, "primaryWeapon", prev1);
    prev2 = loadout(chosen.secondaryWeapon, "secondaryWeapon", prev2);
    prev3 = loadout(secondaryGad, "secondaryGadget", prev3);
}


//loadout
function loadout(weaponAmount, DOMid, previousAmount) {

    //Reset lines
    if(previousAmount > 0) {
        for (i=0; i < previousAmount; i++) {
            document.getElementById(DOMid+[i+1]).remove();
        }
    }

    //Make needed weapon lines
    for (i=0; i < weaponAmount; i++) {
        document.getElementById(DOMid).insertAdjacentHTML('beforeend','<div id='+DOMid+[i+1]+' class="loadoutLines" ></div>');
    }

    //Choose and show
    chosenWep = Math.floor(Math.random() * weaponAmount);
    console.log(DOMid+" = "+(chosenWep+1))
    document.getElementById(DOMid+[chosenWep+1]).classList.add('loadoutActive');

    //Save previous amount to delete on next run
    return weaponAmount;
}

//toggle loadout interface
/*
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


var testOpStatus = 0;
document.getElementById("test-ops").classList.remove("hide");

DOMtestToggle = document.getElementById("test-toggle");
DOMtestToggle.innerHTML = '<i class="fas fa-plus-circle"></i> ON '



document.getElementById("test-toggle").addEventListener("click", function() {
    console.log("testToggle");
    if (testOpStatus == 0) {
        DOMtestToggle.style.backgroundColor = "#FE2020";
        DOMtestToggle.innerHTML = '<i class="fas fa-minus-circle"></i> OFF';
        delete Attacker.amaru
        delete Defender.goyo
        testOpStatus = 1;
    } else {
        DOMtestToggle.style.backgroundColor = "rgb(5, 138, 5";
        DOMtestToggle.innerHTML = '<i class="fas fa-plus-circle"></i> ON ';
        Attacker.amaru = {name: 'Amaru', primaryWeapon: 2, secondaryWeapon: 2};
        Defender.goyo = {name: 'Goyo', primaryWeapon: 2, secondaryWeapon: 1};
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