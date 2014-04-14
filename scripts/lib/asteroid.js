/* global define */

define(["flyingObject"], function (FlyingObject) {
    "use strict";

    var Asteroid = function (canvas) {
        FlyingObject.apply(this, arguments);

        this.size = {
            x: 20,
            y: 20
        };

        this.position = {
            x: Math.floor((Math.random() * this.canvas.width)  + 1),
            y: Math.floor((Math.random() * this.canvas.height) + 1)
        };
    };

    Asteroid.prototype = Object.create(FlyingObject.prototype);
    Asteroid.prototype.constructor = Asteroid;

    Asteroid.prototype.drawObject = function () {
        this.ctx.fillStyle = "red";
    };

    return Asteroid;
});
