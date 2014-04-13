/* global define */

define(function () {
    "use strict";

    var Game = function (canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext("2d");
    };

    Game.prototype.setSpaceship = function (spaceship) {
        this.spaceship = spaceship;
    };

    Game.prototype.render = function () {
        this.spaceship.render();
    };

    Game.prototype.start = function () {
        this.render();
    };

    return Game;
});
