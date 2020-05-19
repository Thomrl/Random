//DOM
button = document.getElementById('pubgGetResult');
coords = document.getElementById('coords');

//Marking area size
var markArea = 200;
var mapSize = 620;

//Init
pubgRandom();

//Button click, select random location
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


 //Marking size
 function markSmall() {
	document.querySelector(".goHere").style.height = "50px";
	document.querySelector(".goHere").style.width = "50px";
 }

 function markMedium() {
	document.querySelector(".goHere").style.height = "75px";
	document.querySelector(".goHere").style.width = "75px";
 }

 function markBig() {
	document.querySelector(".goHere").style.height = "100px";
	document.querySelector(".goHere").style.width = "100px";
 }


/*
 function changeMarkSize(size) {
	 document.querySelector("#mark-"size).addEventListener() {
		 mark+size();
}

 };
*/


document.querySelector("#mark-Small").addEventListener("click", function() {
	markSmall();
});

document.querySelector("#mark-Medium").addEventListener("click", function() {
	markMedium();
});

document.querySelector("#mark-Big").addEventListener("click", function() {
	markBig();
});


//Maps

/*
if (mapsToggle == 1) {
	document.getElementById("center").addEventListener("click", function() {
		if (mapsToggle == 1) {
			document.querySelector(".maps").style.display = "none";
			mapsToggle = 0;
		} else {
			document.querySelector(".maps").style.display = "block";
			mapsToggle = 1;
		}
	})
} else {
	console.log("Not active as should be")
}
*/

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
	document.querySelector('.pubgGrid').classList.remove('warzone');
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
	document.querySelector('.pubgGrid').classList.add('warzone');
});

var mapsToggle = 0;

document.getElementById("close-maps").addEventListener("click", function() {
	document.querySelector(".maps").style.display = "none";
	mapsToggle = 0;
})







//START - This works!

//show popup when clicking the trigger
/*
$('#maps-toggle').on('click touch', function(){
	$('#mappicker').show();
  });     
*/

//show popup when clicking the trigger
document.getElementById("maps-toggle").addEventListener("click", function() {
	if (mapsToggle == 1) {
		document.querySelector(".maps").style.display = "none";
		mapsToggle = 0;
	} else {
		document.querySelector(".maps").style.display = "block";
		mapsToggle = 1;
	}
})

//hide it when clicking anywhere else except the popup and the trigger
$(document).on('click touch', function(event) {
	if (!$(event.target).parents().addBack().is('#maps-toggle')) {
	  $('.maps').hide();
	  mapsToggle = 0;
	}
  });
   
  // Stop propagation to prevent hiding "#" when clicking on it
  $('.maps').on('click touch', function(event) {
	event.stopPropagation();
  });

//STOP - This works!
//Git wont sync, just adding to see if it helps



/*
document.querySelector("#center").addEventListener("click", function() {
	document.querySelector(".maps").style.display = "none";
})

document.querySelector("#center").disabled = true;
*/

/*
document.querySelector(".click-area").style.display = "none";

document.querySelector(".click-area").addEventListener("click", function() {
	document.querySelector(".maps").style.display = "none";
})
*/

//If map picker is being opened set mapsToggle = 1


//If map picker is being closed set mapsToggle = 0


//IF map picker is open enable so when clicked outside of the map picker the map picker will be closed.

/*
document.getElementById("maps-toggle").addEventListener("click", function() {
	if (mapsToggle == 1) {
		console.log("nothing")
		document.querySelector(".maps").style.display = "none";
		mapsToggle = 0;
	} else if (mapsToggle == 2) {
		document.querySelector(".maps").style.display = "block";
		mapsToggle = 0;
	} else if (mapsToggle == 0) {
		console.log("Clicked!")
		document.querySelector(".maps").style.display = "block";
		mapsToggle = 1;
		document.getElementById("center").addEventListener("click", function() {
			document.querySelector(".maps").style.display = "none";
			mapsToggle = 1;
		})
	} else {
		document.querySelector(".maps").style.display = "block";
		mapsToggle = 1;
	}
});
*/




/*
document.getElementById("center").addEventListener("click", function() {
	if (mapsToggle == 1) {
		document.querySelector(".maps").style.display = "none";
		mapsToggle = 0;
	} else {
		document.querySelector(".maps").style.display = "block";
		mapsToggle = 1;
	}
});
*/

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