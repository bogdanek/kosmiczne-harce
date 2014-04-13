/* global define */

define(function () {
    "use strict";

    var Spaceship = function (canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext("2d");

        this.position = {
            'x': this.canvas.width  / 2 - 10,
            'y': this.canvas.height / 2 - 10
        };
    };

    Spaceship.prototype.setNavigation = function (navigation) {
        navigation.on(navigation.ARROW_LEFT,  this.rotateLeft.bind(this))
                  .on(navigation.ARROW_RIGHT, this.rotateRight.bind(this))
                  .on(navigation.ARROW_UP,    this.moveUp.bind(this))
                  .on(navigation.ARROW_DOWN,  this.moveDown.bind(this));
    };

    Spaceship.prototype.moveUp = function () {
        console.log('up');
    };

    Spaceship.prototype.moveDown = function () {
        console.log('down');
    };

    Spaceship.prototype.rotateLeft = function () {
        console.log('left');
    };

    Spaceship.prototype.rotateRight = function () {
        console.log('right');
    };

    Spaceship.prototype.render = function () {
        this.ctx.save();
        this.ctx.fillStyle = "#FFF";
        this.ctx.fillRect(this.position.x, this.position.y, 20, 20);
        this.ctx.restore();
    };

    return Spaceship;
});
