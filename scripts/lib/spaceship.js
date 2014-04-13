/* global define */

define(function () {
    "use strict";

    var Spaceship = function (canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext("2d");

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

    Spaceship.prototype.clearContext = function () {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.angle * Math.PI / 180);
//      To repair the problem with anti-aliasing, we must clear rectangle bigger by 1 pixel of each side
        this.ctx.clearRect((-this.size.x / 2) - 1, (-this.size.y / 2) - 1, this.size.x + 2, this.size.y + 2);
        this.ctx.restore();
    };

    Spaceship.prototype.render = function () {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.angle * Math.PI / 180);
        this.ctx.fillStyle = "#FFF";
        this.ctx.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
        this.ctx.restore();
    };

    return Spaceship;
});
