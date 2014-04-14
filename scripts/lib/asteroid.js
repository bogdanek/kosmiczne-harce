/* global define */

define(["flyingObject"], function (FlyingObject) {
    "use strict";

    var Asteroid = function (canvas) {
        FlyingObject.apply(this, arguments);

        this.size = {
            x: 20,
            y: 20
        };
    };

    Asteroid.prototype = Object.create(FlyingObject.prototype);
    Asteroid.prototype.constructor = Asteroid;

    Asteroid.prototype.drawObject = function () {
        this.ctx.fillStyle = "red";
    };

    return Asteroid;
});
