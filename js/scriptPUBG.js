//Coords
var list1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
var list2 = ["I", "J", "K", "L", "M", "N", "O", "P"];

//DOM
button = document.getElementById('pubgGetResult');
coords = document.getElementById('coords');

//Init
pubgRandom();

//Button click, select random
button.addEventListener('click', pubgResult);

//Select random
function pubgResult() {
	pubgRandom()
};

function pubgRandom() {
    result1 = Math.floor(Math.random()* 500);
    result2 = Math.floor(Math.random()* 500);
	coords.textContent = result1 + ", " + result2;
	document.querySelector(".goHere").style.marginTop = result1+"px";
	document.querySelector(".goHere").style.marginLeft = result2+"px";
}




//Maps
var map1DOM = document.getElementById('map1');
var map2DOM = document.getElementById('map2');
var map3DOM = document.getElementById('map3');

map1DOM.addEventListener('click', function() {
	document.querySelector('.pubgGrid').classList.remove('pubgE');
	document.querySelector('.pubgGrid').classList.remove('pubgM');
	document.querySelector('.pubgGrid').classList.remove('pubgS');
	document.querySelector('.pubgGrid').classList.add('pubgE');
});


map2DOM.addEventListener('click', function(){
	document.querySelector('.pubgGrid').classList.remove('pubgE');
	document.querySelector('.pubgGrid').classList.remove('pubgM');
	document.querySelector('.pubgGrid').classList.remove('pubgS');
	document.querySelector('.pubgGrid').classList.add('pubgM');
});


map3DOM.addEventListener('click', function(){
	document.querySelector('.pubgGrid').classList.remove('pubgE');
	document.querySelector('.pubgGrid').classList.remove('pubgM');
	document.querySelector('.pubgGrid').classList.remove('pubgS');
	document.querySelector('.pubgGrid').classList.add('pubgS');
});