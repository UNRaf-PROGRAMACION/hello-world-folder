export class Instrucciones extends Phaser.Scene {
  constructor() {

    super("Instrucciones");
  }

  create() {

  this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "cueva2");
  this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "dale");

  setTimeout(() => {
    this.scene.start(
        "Tablero",{distancia : 72}
    );
    }, 1000); 
}
}
