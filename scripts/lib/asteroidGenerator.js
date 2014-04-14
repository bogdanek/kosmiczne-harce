/* global define, setInterval */

define(["asteroid"], function (Asteroid) {
    "use strict";

    var AsteroidGenerator = function (canvas) {
        this.canvas = canvas;
        this.asteroids = [];
    };

    AsteroidGenerator.prototype.ASTEROID_LIMIT = 10;

    AsteroidGenerator.prototype.generate = function () {
        setInterval(function () {
            if (this.asteroids.length < this.ASTEROID_LIMIT) {
                var asteroid = new Asteroid(this.canvas);
                    asteroid.setPosition(this.getRandomPosition());
                    asteroid.render();

                this.asteroids.push(asteroid);
            }
        }.bind(this), 1000);
    };

    AsteroidGenerator.prototype.getRandomPosition = function () {
        return {
            x: Math.floor((Math.random() * this.canvas.width)  + 1),
            y: Math.floor((Math.random() * this.canvas.height) + 1)
        };
    };

    return AsteroidGenerator;
});
