/* global requirejs, require, document */

requirejs.config({
    baseUrl: "scripts/lib"
});

require([
    "navigation",
    "spaceship",
    "asteroidGenerator",
    "game"
], function (Navigation, Spaceship, AsteroidGenerator, Game) {
    var canvas = document.querySelector(".canvas");

    var navigation = new Navigation(canvas);

    var spaceship = new Spaceship(canvas);
        spaceship.setNavigation(navigation);

    var game = new Game(canvas);
        game.push(spaceship);
        (new AsteroidGenerator(canvas, game)).generate();
        game.start();
});
