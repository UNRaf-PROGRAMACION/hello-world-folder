import Button from "../js/button.js";

export class Completado extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Completado");
    }
  
    create() {
  
      const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'listo', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("MainMenu");
    });

    }
  }