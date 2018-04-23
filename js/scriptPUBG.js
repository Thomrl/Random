//Coords
var list1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
var list2 = ["I", "J", "K", "L", "M", "N", "O", "P"];

//DOM
button = document.getElementById('pubgGetResult');
coords = document.getElementById('coords');

//Init
pubgRandom();
chosen.classList.toggle("goHere");

//Button click, select random
button.addEventListener('click', pubgResult);

//Select random
function pubgResult() {
	chosen.classList.toggle("goHere");
	pubgRandom()
	chosen.classList.toggle("goHere");
};

function pubgRandom() {
    result1 = list1[Math.floor(Math.random()*list1.length)];
    result2 = list2[Math.floor(Math.random()*list2.length)];
    clrow = result1.toLowerCase() + result2.toLowerCase();
	coords.textContent = result1 + ", " + result2;
	chosen = document.getElementById(clrow);
}



//Themes
var map1DOM = document.getElementById('map1');
var map2DOM = document.getElementById('map2');

map1DOM.addEventListener('click', function() {
	document.querySelector('.pubgGrid').classList.remove('pubgE');
	document.querySelector('.pubgGrid').classList.remove('pubgM');
	document.querySelector('.pubgGrid').classList.add('pubgE');
});


map2DOM.addEventListener('click', function(){
	document.querySelector('.pubgGrid').classList.remove('pubgE');
	document.querySelector('.pubgGrid').classList.remove('pubgM');
	document.querySelector('.pubgGrid').classList.add('pubgM');
});