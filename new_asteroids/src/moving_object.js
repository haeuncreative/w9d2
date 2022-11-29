class MovingObject {
    constructor(params) {
        this.pos = params.pos
        this.vel = params.vel
        this.radius = params.radius
        this.color = params.color
    }

    draw = function(context) {
        // debugger
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
        // context.arc(100, 100, 50, 0, 2*Math.PI, true);
        context.fill()
    }

    move = function(context) {
        context.pos += context.vel;
    }
}

module.exports = MovingObject;

