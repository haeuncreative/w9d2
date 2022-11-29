const MovingObject = require("./moving_object.js");
const { randomVec, scale } = require("./util.js");
const Util = require('./util.js')

class Asteroid {
    constructor (pos) {
        this.pos = pos;
        this.COLOR = "#00FF00"
        this.RADIUS = 100;
        MovingObject.call(this, argArray = []);
        this.vel = {
            let vec = Util.randomVec(4)
            Util.scale(vec, 10)
        }
    }

 
}