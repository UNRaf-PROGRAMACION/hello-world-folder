import Button from "../js/button.js";

export class Tablero extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Tablero");
    }
  
    create() {
  
    const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2.5, 'Carta: Escenario 1', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Escenario1");
    });

    const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1.5, 'Carta: Escenario 2', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Escenario2");
    });

    const boton3 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1.07, 'Carta: Escenario 3', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Escenario3");
  });

    const boton5 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/0.832, 'Carta que te salva', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Comodin");
  });

  const boton4 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/0.579, 'Final', this, () => {
    // Instrucción para pasar a la escena Play
    this.scene.start("Completado");
});
    }
  }