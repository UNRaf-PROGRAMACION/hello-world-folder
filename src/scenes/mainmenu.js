import Button from "../js/button.js";

export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  create() {
    // Fondo del menú principal
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "mainmenu_bg"
      )
      .setScale(1.1);

    // Logo de Phaser
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "phaser_logo"
    );

    const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2, 'Juego', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Seleccion");
      
    });

    const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1, 'Créditos', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Creditos");
      
    });
  }
}
