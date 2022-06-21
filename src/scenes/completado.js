import Button from "../js/button.js";

export class Completado extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Completado");
    }
  
    create() {
      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"completo");

      const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Volver al Menú', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("MainMenu");
      });

       const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2, 'Volver a Jugar', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Tablero");  
    });

    }
}