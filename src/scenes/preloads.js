// Clase Preloads, para separar los preloads y tener mejor orden
import Button from "../js/button.js";
// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Preloads extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {

    this.load.image("fondoJungla", "public/assets/images/jungla.png");
    this.load.image("inicio", "public/assets/images/dibujo.png");
    this.load.image("seleccion", "public/assets/images/Seleccion de personaje.png");
    this.load.image("configuracion", "public/assets/images/Configuración.png");
    this.load.image("idioma", "public/assets/images/idiomas.png");
    this.load.image("completo", "public/assets/images/JUEGO COMPLETADO.png");
    
    this.load.spritesheet("dude", "public/assets/images/personaje.png", {
      frameWidth: 259.25,
      frameHeight: 300,
    });
    

  }

  create() {
    
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 2 }),
      frameRate: 20,
      repeat: -1,
    });
   
    this.anims.create({
      key: "jump",
      frames: [{ key: "dude", frame: 3 }],
      frameRate: 20,
    });
    

    this.scene.start("MainMenu");
  }
}
