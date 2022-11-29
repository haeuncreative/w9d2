class MovingObject {
    constructor(params) {
        this.pos = params.pos
        this.vel = params.vel
        this.radius = params.radius
        this.color = params.color
    }

    draw = function(context) {
        context.beginPath();
        context.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
        context.fillstyle = this.color;
        context.fill()
    }

    move = function(context) {
        context.pos += context.vel;
    }
}

module.exports = MovingObject;

