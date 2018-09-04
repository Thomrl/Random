//DOM
button = document.getElementById('pubgGetResult');
coords = document.getElementById('coords');

//Marking size
var markArea = 200;
var mapSize = 620;

//Init
pubgRandom();

//Button click, select random
button.addEventListener('click', pubgRandom);

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
 } else {
	var markArea = 500;
 };


//Maps
var map1DOM = document.getElementById('map1');
var map2DOM = document.getElementById('map2');
var map3DOM = document.getElementById('map3');
var map4DOM = document.getElementById('map4');
var map5DOM = document.getElementById('map5');

function removeMaps() {
	document.querySelector('.pubgGrid').classList.remove('pubgE');
	document.querySelector('.pubgGrid').classList.remove('pubgM');
	document.querySelector('.pubgGrid').classList.remove('pubgS');
	document.querySelector('.pubgGrid').classList.remove('fortnite');
	document.querySelector('.pubgGrid').classList.remove('ION');
}


map1DOM.addEventListener('click', function() {
	removeMaps();
	document.querySelector('.pubgGrid').classList.add('pubgE');
});


map2DOM.addEventListener('click', function(){
	removeMaps();
	document.querySelector('.pubgGrid').classList.add('pubgM');
});


map3DOM.addEventListener('click', function(){
	removeMaps();
	document.querySelector('.pubgGrid').classList.add('pubgS');
});


map4DOM.addEventListener('click', function(){
	removeMaps();
	document.querySelector('.pubgGrid').classList.add('fortnite');
});


map5DOM.addEventListener('click', function(){
	removeMaps();
	document.querySelector('.pubgGrid').classList.add('ION');
});

var mapsToggle = 0;

document.getElementById("close-maps").addEventListener("click", function() {
	document.querySelector(".maps").style.display = "none";
	mapsToggle = 0;
})

document.getElementById("maps-toggle").addEventListener("click", function() {
	if (mapsToggle == 1) {
		document.querySelector(".maps").style.display = "none";
		mapsToggle = 0;
	} else {
		document.querySelector(".maps").style.display = "block";
	    mapsToggle = 1;
	}
})


//copyright
DOMshowLessCopyright = document.getElementById("show-less-copyright");
DOMshowMoreCopyright = document.getElementById("show-more-copyright");
DOMshowMoreCopyright.addEventListener("click", function(){
	document.getElementById("more-copyright").style.display = "block";
	DOMshowLessCopyright.style.display = "block";
	document.getElementById("show-more-copyright").style.display = "none";
	document.getElementById("short-copyright").style.display = "none";
})

DOMshowLessCopyright.addEventListener("click", function(){
	document.getElementById("more-copyright").style.display = "none";
	DOMshowLessCopyright.style.display = "none";
	document.getElementById("show-more-copyright").style.display = "inline-block";
	document.getElementById("short-copyright").style.display = "block";
})


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

//Coords (OLD)
var list1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
var list2 = ["I", "J", "K", "L", "M", "N", "O", "P"];