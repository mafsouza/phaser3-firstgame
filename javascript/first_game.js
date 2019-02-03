"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FirstGame;
(function (FirstGame) {
    var ExampleScene = /** @class */ (function (_super) {
        __extends(ExampleScene, _super);
        function ExampleScene() {
            return _super.call(this, { 'key': 'ExampleScene' }) || this;
        }
        ExampleScene.prototype.preload = function () {
            this.load.image('logo', './assets/Phaser-Logo-Small.png');
        };
        ExampleScene.prototype.create = function () {
            this.logo = this.add.image(Number(FirstGame.InitPhaser.gameRef.config.width) / 2, Number(FirstGame.InitPhaser.gameRef.config.height) / 2, 'logo');
            this.logo.setScale(.5, .5);
            var tween = this.tweens.add({
                targets: this.logo,
                scaleX: { value: 1.0, duration: 2000, ease: 'Back.easeInOut' },
                scaleY: { value: 1.0, duration: 2000, ease: 'Back.easeInOut' },
                yoyo: true,
                repeat: -1
            });
        };
        return ExampleScene;
    }(Phaser.Scene));
    FirstGame.ExampleScene = ExampleScene;
})(FirstGame || (FirstGame = {}));
var FirstGame;
(function (FirstGame) {
    var InitPhaser = /** @class */ (function () {
        function InitPhaser() {
        }
        InitPhaser.initGame = function () {
            var config = {
                type: Phaser.CANVAS,
                width: 480,
                height: 320,
                scene: [FirstGame.ExampleScene],
                banner: true,
                title: 'First Game',
                version: '1.0.0'
            };
            this.gameRef = new Phaser.Game(config);
        };
        return InitPhaser;
    }());
    FirstGame.InitPhaser = InitPhaser;
})(FirstGame || (FirstGame = {}));
window.onload = function () {
    FirstGame.InitPhaser.initGame();
};
//# sourceMappingURL=first_game.js.map