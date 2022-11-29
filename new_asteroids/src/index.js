const MovingObject = require("./moving_object.js");

console.log("Is it working? Hello? Mic check?")

window.MovingObject = MovingObject;

const canvas = document.getElementById('game-canvas') 
canvas.height = 1080;
canvas.width = 1920;
let context = canvas.getContext("2d");
context.fillStyle = "#301934";
context.fillRect(0, 0, 1920, 1080)

let asteroid1 = new MovingObject(([500, 500], 1, 20, "yellow"))
asteroid1.draw(context)