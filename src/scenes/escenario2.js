import Button from "../js/button.js";

export class Escenario2 extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Escenario2");
    }
  
    create() {
        const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1, 'Derrota', this, () => {
            // Instrucción para pasar a la escena Play
            this.scene.start("Tablero");
        });
    
        const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2, 'Victoria', this, () => {
            // Instrucción para pasar a la escena Play
            this.scene.start("Dado");
        });  

    }
  }