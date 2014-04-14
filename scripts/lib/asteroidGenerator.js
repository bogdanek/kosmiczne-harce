/* global define, setInterval */

define(["asteroid"], function (Asteroid) {
    "use strict";

    var AsteroidGenerator = function (canvas) {
        this.canvas = canvas;
        this.asteroids = [];

        this.quarterSize = {
            x: 100,
            y: 100
        };

        this.generateQuarters();
    };

    AsteroidGenerator.prototype.ASTEROID_LIMIT = 10;
    AsteroidGenerator.prototype.TIME_INTERVAL  = 1000;

    AsteroidGenerator.prototype.generateQuarters = function () {
        var stepX = this.quarterSize.x,
            stepY = this.quarterSize.y,
            x = 0, y = 0;

        this.quarters = [];

        for ( ; x + stepX < this.canvas.width; x += stepX) {
            this.quarters.push({x: x, y: y});
        }

        for ( ; y + stepY < this.canvas.height; y += stepY) {
            this.quarters.push({x: x, y: y});
        }

        for ( ; x - stepX >= 0; x -= stepX) {
            this.quarters.push({x: x, y: y});
        }

        for ( ; y - stepY >= 0; y -= stepY) {
            this.quarters.push({x: x, y: y});
        }
    };

    AsteroidGenerator.prototype.generate = function () {
        setInterval(function () {
            if (this.asteroids.length < this.ASTEROID_LIMIT) {
                var asteroid = new Asteroid(this.canvas);
                    asteroid.setPosition(this.getRandomPosition());
                    asteroid.render();

                this.asteroids.push(asteroid);
            }
        }.bind(this), this.TIME_INTERVAL);
    };

    AsteroidGenerator.prototype.getRandomPosition = function () {
        var quarterId = Math.floor((Math.random() * this.quarters.length)),
            quarter   = this.quarters[quarterId];

        return {
            x: Math.floor((Math.random() * this.quarterSize.x) + quarter.x),
            y: Math.floor((Math.random() * this.quarterSize.y) + quarter.y)
        };
    };

    return AsteroidGenerator;
});
