/* global define */

define(function () {
    "use strict";

    var FlyingObject = function (canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext("2d");

        this.size = {
            x: 0,
            y: 0
        };

        this.angle = 0;

        this.position = {
            x: 0,
            y: 0
        };

        this.speed = {
            x: 0,
            y: 0
        };
    };

    FlyingObject.prototype.setSize = function(size) {
        this.size = size;
    };

    FlyingObject.prototype.setAngle = function (angle) {
        this.angle = angle;
    };

    FlyingObject.prototype.setPosition = function (position) {
        this.position = position;
    };

    FlyingObject.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };

    FlyingObject.prototype.clearContext = function () {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.angle * Math.PI / 180);
//      To repair the problem with anti-aliasing, we must clear rectangle bigger by 1 pixel of each side
        this.ctx.clearRect((-this.size.x / 2) - 1, (-this.size.y / 2) - 1, this.size.x + 2, this.size.y + 2);
        this.ctx.restore();
    };

    FlyingObject.prototype.drawObject = function () {

    };

    FlyingObject.prototype.render = function () {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.angle * Math.PI / 180);
        this.drawObject();
        this.ctx.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
        this.ctx.restore();
    };

    return FlyingObject;
});
