const playSound = function(cellId) {
	let music = "/sounds/chain1/" + cellId + ".mp3";
	document.getElementById(cellId).setAttribute("style", "background : green");

	let audio = new Audio(music);
	audio.play();
	audio.onended = function() {
		document.getElementById(cellId).setAttribute("style", "background : red");
	};
};
const id = [
	"a0",
	"a1",
	"a2",
	"a3",
	"a4",
	"a5",
	"a6",
	"b0",
	"b1",
	"b2",
	"b3",
	"b4",
	"b5",
	"b6",
	"c0",
	"c1",
	"c2",
	"c3",
	"c4",
	"c5",
	"c6",
	"d0",
	"d1",
	"d2"
];

const createDiv = function(cellId) {
	return (
		"<div " +
		"id = '" +
		cellId +
		"' class = 'allCells'" +
		"onclick='playSound(this.id)'" +
		">" +
		"</div>"
	);
};

const createDivs = function() {
	let multipleDivs = id.map(createDiv).join("");
	let div = document.getElementById("track_panes");
	console.log(div + multipleDivs);
	div.innerHTML = multipleDivs;
};
