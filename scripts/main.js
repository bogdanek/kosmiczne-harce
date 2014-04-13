/* global requirejs, require, document */

requirejs.config({
    baseUrl: "scripts/lib"
});

require(["game", "spaceship"], function (Game, Spaceship) {
    var canvas = document.querySelector(".canvas");

    var game = new Game(canvas);
        game.setSpaceship(new Spaceship(canvas));
        game.start();
});
