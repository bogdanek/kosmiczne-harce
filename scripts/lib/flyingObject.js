/* global define */

define(function () {
    "use strict";

    var FlyingObject = function (canvas) {
        
        this.ACCELERATION = 0.2;
        this.AGILITY = 5 * Math.PI / 180;
        
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
    
    FlyingObject.prototype.recalculate = function () {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    };
    
    FlyingObject.prototype.transform = function () {
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.angle);
    };
    
    FlyingObject.prototype.draw = function () {
        var size = this.size;
        this.ctx.fillRect(-size.x / 2, -size.y / 2, size.x, size.y);
    };

    FlyingObject.prototype.render = function () {
        this.ctx.save();
        this.transform();
        this.draw();
        this.ctx.restore();
    };

    return FlyingObject;
});
