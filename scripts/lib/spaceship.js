/* global define */

define(["flyingObject"], function (FlyingObject) {
    "use strict";

    var Spaceship = function (canvas) {
        FlyingObject.apply(this, arguments);

        this.size = {
            'x' : 20,
            'y' : 20
        };

        this.angle = -90 * Math.PI / 180;

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
                  .on(navigation.ARROW_UP,    this.accelerate.bind(this))
                  .on(navigation.ARROW_DOWN,  this.decelerate.bind(this));
    };

    Spaceship.prototype.accelerate = function () {
        var M = Math;
        this.speed.x += M.max(-2, M.min(2, this.ACCELERATION * M.cos(this.angle)));
        this.speed.y += M.max(-2, M.min(2, this.ACCELERATION * M.sin(this.angle)));
    };

    Spaceship.prototype.decelerate = function () {
        var M = Math;
        this.speed.x -= M.max(-2, M.min(2, this.ACCELERATION * M.cos(this.angle)));
        this.speed.y -= M.max(-2, M.min(2, this.ACCELERATION * M.sin(this.angle)));
    };

    Spaceship.prototype.rotateLeft = function () {
        this.angle -= this.AGILITY;
    };

    Spaceship.prototype.rotateRight = function () {
        this.angle += this.AGILITY;
    };

    Spaceship.prototype.draw = function () {
        this.ctx.fillStyle = "#FFF";
        FlyingObject.prototype.draw.call(this);
    };

    return Spaceship;
});
