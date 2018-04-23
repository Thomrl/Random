var list1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
var list2 = ["I", "J", "K", "L", "M", "N", "O", "P"];
var clrow = "Hey there!"


result1 = list1[Math.floor(Math.random()*list1.length)];
result2 = list2[Math.floor(Math.random()*list2.length)];
clrow = result1.toLowerCase() + result2.toLowerCase();
coords.textContent = result1 + ", " + result2;
chosen = document.getElementById(clrow);
chosen.classList.toggle("goHere");
pubgResult();

button = document.getElementById('pubgGetResult');
coords = document.getElementById('coords');

button.addEventListener('click', pubgResult);

function pubgResult() {
	chosen.classList.toggle("goHere");
    result1 = list1[Math.floor(Math.random()*list1.length)];
    result2 = list2[Math.floor(Math.random()*list2.length)];
    clrow = result1.toLowerCase() + result2.toLowerCase();
	coords.textContent = result1 + ", " + result2;
	chosen = document.getElementById(clrow);
	chosen.classList.toggle("goHere");
};



