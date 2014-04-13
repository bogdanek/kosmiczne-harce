/* global define, document */

define(function () {
    "use strict";

    var Navigation = function (canvas) {
        this.listeners = {};

        var self = this;

        canvas.setAttribute("tabindex", 0);
        canvas.addEventListener('keydown', function (event) {
            switch(event.keyCode) {
                case 37:
                    self.emit(self.ARROW_LEFT);
                    break;
                case 39:
                    self.emit(self.ARROW_RIGHT);
                    break;
                case 38:
                    self.emit(self.ARROW_UP);
                    break;
                case 40:
                    self.emit(self.ARROW_DOWN);
                    break;
            }

            event.preventDefault();
        }, false);
    };

    Navigation.prototype.ARROW_LEFT  = "arrow-left";
    Navigation.prototype.ARROW_RIGHT = "arrow-right";
    Navigation.prototype.ARROW_UP    = "arrow-up";
    Navigation.prototype.ARROW_DOWN  = "arrow-down";

    Navigation.prototype.on = function (event, callback) {
        if (this.listeners[event] === undefined) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);

        return this;
    };

    Navigation.prototype.emit = function (event) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(function (callback) {
                callback();
            });
        }

        return this;
    };

    return Navigation;
});
