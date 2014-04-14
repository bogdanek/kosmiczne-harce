/* global define */

define(["flyingObject"], function (FlyingObject) {
    "use strict";

    var Spaceship = function (canvas) {
        FlyingObject.apply(this, arguments);

        this.size = {
            'x' : 20,
            'y' : 20
        };

        this.angle = 90;

        this.position = {
            'x': this.canvas.width  / 2,
            'y': this.canvas.height / 2
        };
    };

    Spaceship.prototype = Object.create(FlyingObject.prototype);
    Spaceship.prototype.constructor = Spaceship;

    Spaceship.prototype.setNavigation = function (navigation) {
        navigation.on(navigation.ARROW_LEFT,  this.rotateLeft.bind(this))
                  .on(navigation.ARROW_RIGHT, this.rotateRight.bind(this))
                  .on(navigation.ARROW_UP,    this.moveUp.bind(this))
                  .on(navigation.ARROW_DOWN,  this.moveDown.bind(this));
    };

    Spaceship.prototype.moveUp = function () {
        this.clearContext();
        this.position.y--;
        this.render();
    };

    Spaceship.prototype.moveDown = function () {
        this.clearContext();
        this.position.y++;
        this.render();
    };

    Spaceship.prototype.rotateLeft = function () {
        this.clearContext();
        this.angle = (this.angle - 1) % 360;
        this.render();
    };

    Spaceship.prototype.rotateRight = function () {
        this.clearContext();
        this.angle = (this.angle + 1) % 360;
        this.render();
    };

    Spaceship.prototype.drawObject = function () {
        this.ctx.fillStyle = "#FFF";
    };

    return Spaceship;
});
