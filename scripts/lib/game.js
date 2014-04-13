/* global define */

define(function () {
    "use strict";

    var Game = function (canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext("2d");
    };

    Game.prototype.drawBackground = function (ctx) {
        this.ctx.save();
        this.ctx.fillStyle = "#111";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
    };

    Game.prototype.setSpaceship = function (spaceship) {
        this.spaceship = spaceship;
    };

    Game.prototype.render = function () {
        this.drawBackground();
        this.spaceship.render();
    };

    Game.prototype.start = function () {
        this.render();
    };

    return Game;
});
