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
    this.load.image("inicio2", "public/assets/images/bitmap.png");
    this.load.image("jugar", "public/assets/images/boton jugar.png");
    this.load.image("credito", "public/assets/images/credito.png");
    this.load.image("creditos", "public/assets/images/Creditos.png");
    this.load.image("tuerca", "public/assets/images/tuerca1.png");
    this.load.image("volver", "public/assets/images/retroceso.png");
    this.load.image("dale", "public/assets/images/Intrucciones.png");
    this.load.image("opciones", "public/assets/images/confi1.png");
    this.load.image("punto", "public/assets/images/puntito.png");
    //this.load.image("idioma", "public/assets/images/idiomas.png");
    this.load.image("completo", "public/assets/images/JUEGO COMPLETADO.png");
    
    this.load.spritesheet("dude", "public/assets/images/personaje1.png", {
      frameWidth: 90.5,
      frameHeight: 100,
    });

    this.load.audio("theme", "public/assets/sounds/musica.mp3");

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
    

    this.scene.start("Tablero");
  }
}
