/* global define, setInterval */

define(["asteroid"], function (Asteroid) {
    "use strict";

    var AsteroidGenerator = function (canvas) {
        this.canvas = canvas;
        this.asteroids = [];
    };

    AsteroidGenerator.prototype.ASTEROID_LIMIT = 10;
    AsteroidGenerator.prototype.quarters = [
        {x: 0,   y: 0},
        {x: 200, y: 0},
        {x: 400, y: 0},
        {x: 600, y: 0},
        {x: 0,   y: 200},
        {x: 600, y: 200},
        {x: 0,   y: 400},
        {x: 200, y: 400},
        {x: 400, y: 400},
        {x: 600, y: 400}
    ];

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
        var quarterId = Math.floor((Math.random() * this.ASTEROID_LIMIT) + 1),
            quarter   = this.quarters[quarterId];

        return {
            x: Math.floor((Math.random() * 200) + quarter.x),
            y: Math.floor((Math.random() * 200) + quarter.y)
        };
    };

    return AsteroidGenerator;
});
