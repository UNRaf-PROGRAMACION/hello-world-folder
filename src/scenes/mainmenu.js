import Button from "../js/button.js";

export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  create() {
    // Fondo del menú principal

    this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"inicio")

    const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/0.8, 'Juego', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Escenario1");
      
    });

    const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/0.7, 'Créditos', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Creditos");
      
    });
  }
}
