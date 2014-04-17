/* global define */

define(["flyingObject"], function (FlyingObject) {
    "use strict";

    var Asteroid = function (canvas) {
        FlyingObject.apply(this, arguments);

        this.size = {
            x: 20,
            y: 20
        };
        
        this.speed = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
        };
    };

    Asteroid.prototype = Object.create(FlyingObject.prototype);
    Asteroid.prototype.constructor = Asteroid;

    Asteroid.prototype.transform = function () {
        this.ctx.translate(this.position.x, this.position.y);
    };

    Asteroid.prototype.draw = function () {
        this.ctx.fillStyle = "#F00";
        FlyingObject.prototype.draw.call(this);
    };

    return Asteroid;
});
