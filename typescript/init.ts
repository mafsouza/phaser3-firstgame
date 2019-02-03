module FirstGame {
    export class InitPhaser {
        static gameRef: Phaser.Game;
        public static initGame(): void {
            let config: GameConfig = {
                type: Phaser.CANVAS,
                width: 480,
                height: 320,
                scene: [ExampleScene],
                banner: true,
                title: 'First Game',
                version: '1.0.0'
            }
            this.gameRef = new Phaser.Game(config);
        }
    }
}
window.onload = () => {
    FirstGame.InitPhaser.initGame();
};
