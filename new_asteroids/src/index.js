const MovingObject = require("./moving_object.js");

console.log("Is it working? Hello? Mic check?")

window.MovingObject = MovingObject;

const canvas = document.getElementById('game-canvas') 
canvas.height = 1080;
canvas.width = 1920;
let context = canvas.getContext("2d");
// context.fillRect(0, 0, 1920, 1080)

new Asteroid({pos: [200, 200]})


