
let item1 = document.getElementById("html");
let item2 = document.getElementById("css");
let item3 = document.getElementById("javascript");
let item4 = document.getElementById('php');
let item5 = document.getElementById('bootstrap');


function change1(){
    item1.style.backgroundColor = "#888888";
    item1.style.color = "black";
    item1.style.fontStyle = "italic";
}
function changeBack1(){
    item1.style.backgroundColor = "";
    item1.style.color = "";
    item1.style.fontStyle = "";
}

item1.addEventListener("mouseover", change1);
item1.addEventListener("mouseleave", changeBack1);

function change2(){
    item2.style.backgroundColor = "#888888";
    item2.style.color = "black";
    item2.style.fontStyle = "italic";
}
function changeBack2(){
    item2.style.backgroundColor = "";
    item2.style.color = "";
    item2.style.fontStyle = "";
}

item2.addEventListener("mouseover", change2);
item2.addEventListener("mouseleave", changeBack2);

function change3(){
    item3.style.backgroundColor = "#888888";
    item3.style.color = "black";
    item3.style.fontStyle = "italic";
}
function changeBack3(){
    item3.style.backgroundColor = "";
    item3.style.color = "";
    item3.style.fontStyle = "";
}

item3.addEventListener("mouseover", change3);
item3.addEventListener("mouseleave", changeBack3);

function change4(){
    item4.style.backgroundColor = "#888888";
    item4.style.color = "black";
    item4.style.fontStyle = "italic";
}
function changeBack4(){
    item4.style.backgroundColor = "";
    item4.style.color = "";
    item4.style.fontStyle = "";
}

item4.addEventListener("mouseover", change4);
item4.addEventListener("mouseleave", changeBack4);

function change5(){
    item5.style.backgroundColor = "#888888";
    item5.style.color = "black";
    item5.style.fontStyle = "italic";
}
function changeBack5(){
    item5.style.backgroundColor = "";
    item5.style.color = "";
    item5.style.fontStyle = "";
}

item5.addEventListener("mouseover", change5);
item5.addEventListener("mouseleave", changeBack5);


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