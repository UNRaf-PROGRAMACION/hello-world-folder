import Button from "../js/button.js";

export class Creditos extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Creditos");
    }
  
    create() {
  
      const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Volver', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("MainMenu");
    });

    }
  }