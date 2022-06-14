import Button from "../js/button.js";

export class Comodin extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Comodin");
    }
  
    create() {
  
      const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Avanzas libremente', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Dado");
    });

    }
  }