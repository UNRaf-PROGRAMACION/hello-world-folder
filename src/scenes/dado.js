import Button from "../js/button.js";

export class Dado extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Dado");
    }
  
    create() {
  
      const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Tirar dados', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Tablero");
    });

    }
  }