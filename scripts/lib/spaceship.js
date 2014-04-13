/* global define */

define(function () {
    "use strict";

    var Spaceship = function (canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext("2d");
    };

    Spaceship.prototype.render = function () {
        this.ctx.save();
        this.ctx.fillStyle = "#FFF";
        this.ctx.fillRect(this.canvas.width / 2 - 10, this.canvas.height / 2 - 10, 20, 20);
        this.ctx.restore();
    };

    return Spaceship;
});
