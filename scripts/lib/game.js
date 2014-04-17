/* global define */

define(function () {
    "use strict";

    var Game = function (canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext("2d");
        
        this.flyingObjectsList = [];
    };
    
    Game.prototype.getObjectsCount = function () {
        return this.flyingObjectsList.length;
    };
    
    Game.prototype.push = function (flyingObject) {
        this.flyingObjectsList.push(flyingObject);
    };

    Game.prototype.setAsteroidGenerator = function (asteroidGenerator) {
        this.asteroidGenerator = asteroidGenerator;
    };

    Game.prototype.start = function () {
        var context = this.ctx,
            list = this.flyingObjectsList,
            currentObject;
        
        (function animate () {
            context.clearRect(0,0,800,600);
            for (var i = 0; i < list.length; i++) {
                currentObject = list[i];
                currentObject.recalculate();
                currentObject.render();
            }
            requestAnimationFrame(animate);
        })();
    };

    return Game;
});
