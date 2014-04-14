/* global define, setInterval */

define(["asteroid"], function (Asteroid) {
    "use strict";

    var AsteroidGenerator = function (canvas) {
        this.canvas = canvas;
    };

    AsteroidGenerator.prototype.generate = function () {
        var self = this;

        setInterval(function () {
            new Asteroid(self.canvas).render();
        }, 1000);
    };

    return AsteroidGenerator;
});
