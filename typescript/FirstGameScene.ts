module FirstGame {
    export class ExampleScene extends Phaser.Scene {
        private logo: Phaser.GameObjects.Image | undefined;
        public constructor() {
            super({ 'key': 'ExampleScene' });
        }

        public preload(): void {
            this.load.image('logo', './assets/Phaser-Logo-Small.png');
        }

        public create(): void {
            this.logo = this.add.image(Number(FirstGame.InitPhaser.gameRef.config.width) / 2,
                Number(FirstGame.InitPhaser.gameRef.config.height) / 2, 'logo');
            this.logo.setScale(.5, .5);
            let tween = this.tweens.add({
                targets: this.logo,
                scaleX: { value: 1.0, duration: 2000, ease: 'Back.easeInOut' },
                scaleY: { value: 1.0, duration: 2000, ease: 'Back.easeInOut' },
                yoyo: true,
                repeat: -1
            });
        }
    }
}