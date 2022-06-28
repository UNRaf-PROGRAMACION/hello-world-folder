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

    this.load.image("cueva", "public/assets/images/cueva1.PNG");
    this.load.image("cueva2", "public/assets/images/cueva22.png");
    //this.load.image("inicio", "public/assets/images/dibujo.png");
    this.load.image("inicio", "public/assets/images/Ruinas del tiempo.png");
    //this.load.image("inicio2", "public/assets/images/bitmap.png");
    //this.load.image("jugar", "public/assets/images/boton jugar.png");
    this.load.image("jugar", "public/assets/images/jugar.png");
    //this.load.image("credito", "public/assets/images/credito.png");
    this.load.image("credito", "public/assets/images/credi.png");
    //this.load.image("creditos", "public/assets/images/Creditos.png");
    this.load.image("creditos", "public/assets/images/Creditos.png");
    this.load.image("tuerca", "public/assets/images/tuerca1.png");
    this.load.image("volver", "public/assets/images/retroceso.png");
    this.load.image("dale", "public/assets/images/Intrucciones.png");
    //this.load.image("opciones", "public/assets/images/confi1.png");
    //this.load.image("punto", "public/assets/images/puntito.png");
    this.load.image("cueva", "public/assets/images/cueva.png");
    //this.load.image("tirardado", "public/assets/images/tirardado.png");
    this.load.image("dado", "public/assets/images/dados.png");
    this.load.image("cuadro", "public/assets/images/cuadro2.jpg");
    this.load.image("carta", "public/assets/images/carta.png");
    this.load.image("cartabuena", "public/assets/images/carta buena.png");
    this.load.image("cartacorrer", "public/assets/images/carta correr.png");
    this.load.image("completo", "public/assets/images/JUEGO COMPLETADO.png");
    this.load.image("victoria", "public/assets/images/vic.png");
    this.load.image("derrota", "public/assets/images/der.png");
    this.load.image("boton", "public/assets/images/Boton.png");
    this.load.image("banderaTablero", "public/assets/images/Victoria tablero.png");
    this.load.image("banderaEsc", "public/assets/images/Victoria jungla.png");
    this.load.image("roca", "public/assets/images/PIEDRAS2.png");
    this.load.image("roca2", "public/assets/images/PIEDRAS3.png");
    this.load.image("snake", "public/assets/images/snake.png");
    //this.load.image("roca", "public/assets/images/PIEDRAS.png");
    this.load.image("prota", "public/assets/images/prota.png");
    this.load.spritesheet("dude", "public/assets/images/spritesheet11.png", {
      frameWidth: 150,
      frameHeight: 155,
    });

  
    this.load.audio("theme", "public/assets/sounds/musica.mp3");

  }

  create() {
    
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });
   
    this.anims.create({
      key: "jump",
      frames: [{ key: "dude", frame: 1 }],
      frameRate: 10,
    });
    

    this.scene.start("MainMenu", {distancia:72}
    );
  }
}
