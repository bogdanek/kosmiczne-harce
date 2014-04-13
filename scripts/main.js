/* global requirejs, require, document */

requirejs.config({
    baseUrl: "scripts/lib"
});

require(["navigation", "spaceship", "game"], function (Navigation, Spaceship, Game) {
    var canvas = document.querySelector(".canvas");

    var navigation = new Navigation(canvas);

    var spaceship = new Spaceship(canvas);
        spaceship.setNavigation(navigation);

    var game = new Game(canvas);
        game.setSpaceship(spaceship);
        game.start();
});
