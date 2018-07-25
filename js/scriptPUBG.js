//Coords
var list1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
var list2 = ["I", "J", "K", "L", "M", "N", "O", "P"];

//DOM
button = document.getElementById('pubgGetResult');
coords = document.getElementById('coords');

//Marking size
var markArea = 200;
var mapSize = 620;


//Init
pubgRandom();

//Button click, select random
button.addEventListener('click', pubgResult);

//Select random
function pubgResult() {
	pubgRandom()
};

function pubgRandom() {
    result1 = Math.floor(Math.random()* markArea);
    result2 = Math.floor(Math.random()* markArea);
	coords.textContent = result1 + ", " + result2;
	document.querySelector(".goHere").style.marginTop = result1+"px";
	document.querySelector(".goHere").style.marginLeft = result2+"px";
}

if ($(window).width() < 620) {
	markArea = 310;
	mapSize = 360;
	document.querySelector(".goHere").style.width = "50px";
	document.querySelector(".goHere").style.height = "50px";
	document.querySelector(".pubgGrid").style.width = mapSize+"px";
	document.querySelector(".pubgGrid").style.height = mapSize+"px";
	document.querySelector(".pubgDiv").style.width = "360px";
    //width: 100px;
    //height: 100px;
 }
 else {
	var markArea = 500;
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