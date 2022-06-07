import Button from "../js/button.js";

export class Tablero extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Tablero");
    }
  
    create() {
  
    const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2.5, 'Escenario 1', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Escenario1");
    });

    const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1.5, 'Escenario 2', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Escenario2");
    });

    const boton3 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1, 'Escenario 3', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Escenario3");
  });

  const boton4 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/0.8, 'Final', this, () => {
    // Instrucción para pasar a la escena Play
    this.scene.start("MainMenu");
});
    }
  }