import Button from "../js/button.js";

export class Seleccion extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Seleccion");
    }
  
    create() {
  
      const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2, 'Un jugador', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Tablero");
    });

    const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1, 'Dos jugadores', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Tablero");

    });

    const boton3 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/0.6, 'Volver', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("MainMenu");

    });
    }
  }