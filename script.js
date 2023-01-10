let item1 = document.getElementById("html");
let item2 = document.getElementById("css");
let item3 = document.getElementById("javascript");
let item4 = document.getElementById('php');
let item5 = document.getElementById('bootstrap');
let item6 = document.getElementById('Laravel');
let item7 = document.getElementById('MySql');
let item8 = document.getElementById('Git/GitHub');
let item9 = document.getElementById('Symfony');
let item10 = document.getElementById('APIRest');

const items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];

for(const item of items){

	function change(){
		item.style.backgroundColor = "#888888";
		item.style.color = "black";
		item.style.fontStyle = "italic";
		item.style.borderRadius = "40%";
	}
	function changeBack(){
		item.style.backgroundColor = "";
		item.style.color = "";
		item.style.fontStyle = "";
		item.style.borderRadius = "";
	}
	
	item.addEventListener("mouseover", change);
	item.addEventListener("mouseleave", changeBack);
}




/*mouse ball animation by Renato Ribeiro*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let w, h, balls = [];
let mouse = {
	x: undefined,
	y: undefined
}
let rgb = [
	[26, 188, 156],
	[46, 204, 113],
	[52, 152, 219],
	[155, 89, 182],
	[241, 196, 15],
	[230, 126, 34],
	[231, 76, 60]
]

function init() {
	resizeReset();
	animationLoop();
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}

function animationLoop() {
	ctx.clearRect(0, 0, w, h);
	if (mouse.x !== undefined && mouse.y !== undefined) {
		balls.push(new Ball());
	}	
	if (balls.length > 200) {
		balls = balls.slice(1);
	}
	drawBalls();
	requestAnimationFrame(animationLoop);
}

function drawBalls() {
	for (let i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].draw();
	}
}

function mousemove(e) {
	mouse.x = e.x;
	mouse.y = e.y;
}

function mouseout() {
	mouse.x = undefined;
	mouse.y = undefined;
}

function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

class Ball {
	constructor() {
		this.x = mouse.x + getRandomInt(-20, 20);
		this.y = mouse.y + getRandomInt(-20, 20);
		this.size = getRandomInt(10, 20);
		this.rgb = rgb[getRandomInt(0, rgb.length - 1)];
		this.style = "rgba("+this.rgb[0]+","+this.rgb[1]+","+this.rgb[2]+",.5)";
	}
	draw() {
		ctx.fillStyle = this.style;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();
	}
	update() {
		if (this.size > 0) {
			let s = this.size - 0.3;
			this.size = (s <= 0) ? 0 : s;
		}
	}
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);

/*FORM*/

