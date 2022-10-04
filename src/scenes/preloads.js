
export class Preloads extends Phaser.Scene {
  constructor() {
 
    super("Preloads");
  }

  preload() {

    this.load.image("cueva", "public/assets/images/cueva1.png");
    this.load.image("cueva2", "public/assets/images/cueva22.png");
    this.load.image("inicio", "public/assets/images/Ruinas del tiempo.png");
    this.load.image("jugar", "public/assets/images/jugar.png");
    this.load.image("credito", "public/assets/images/credi.png");
    this.load.image("creditos", "public/assets/images/Creditos.png");
    this.load.image("music", "public/assets/images/sonido.png");
    this.load.image("mute", "public/assets/images/sin sonido.png");
    this.load.image("music2", "public/assets/images/sonido2.png");
    this.load.image("mute2", "public/assets/images/sin sonido2.png");
    this.load.image("volver", "public/assets/images/retroceso.png");
    this.load.image("dale", "public/assets/images/Intrucciones.png");
    this.load.image("intro", "public/assets/images/saltar intro.png");
    this.load.image("dado", "public/assets/images/dados.png");
    this.load.image("carta", "public/assets/images/carta.png");
    this.load.image("cartabuena", "public/assets/images/carta buena.png");
    this.load.image("cartacorrer", "public/assets/images/carta correr.png");
    this.load.image("completo", "public/assets/images/JUEGO COMPLETADO.png");
    this.load.image("victoria", "public/assets/images/vic.png");
    this.load.image("derrota", "public/assets/images/der.png");
    this.load.image("botone", "public/assets/images/Boton.png");
    this.load.image("banderaTablero", "public/assets/images/Victoria tablero.png");
    this.load.image("banderaEsc", "public/assets/images/Victoria jungla.png");
    this.load.image("roca", "public/assets/images/PIEDRAS2.png");
    this.load.image("roca2", "public/assets/images/PIEDRAS3.png");
    this.load.image("snake", "public/assets/images/snake.png");
    this.load.image("prota", "public/assets/images/prota.png");
    this.load.image("prota2", "public/assets/images/prota2.png");
    this.load.spritesheet("dude", "public/assets/images/spritesheet (5).png", {
      frameWidth: 150,
      frameHeight: 155,
    });

  
    this.load.audio("theme", "public/assets/sounds/musica.mp3");
    this.load.audio("theme2", "public/assets/sounds/tablero.mp3");
    this.load.audio("theme3", "public/assets/sounds/jungla.mp3");

  }

  create() {
    
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 2 }),
      frameRate: 7,
      repeat: -1,
    });
   
    this.anims.create({
      key: "jump",
      frames: [{ key: "dude", frame: 1 }],
      frameRate: 20,
    });
    
    let audio = this.sound.add('theme', {loop: true});
    audio.play();
    this.scene.start("MainMenu", {distancia:75, distancia2:75, turno:0, audio:audio, contar:0}
    );
  }
}
