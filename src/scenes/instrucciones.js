let audio2;
let contar;
let sonido;
export class Instrucciones extends Phaser.Scene {
  constructor() {

    super("Instrucciones");
  }

  create() {
    audio2 = this.sound.add('theme2', {loop: true});
    audio2.play();
    contar=0;
    
  this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "cueva2");
  this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/1.1, "dale");
  let intro = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/0.53, "intro").setInteractive()

  .on('pointerdown', () => {
  
    this.scene.start(
      "Tablero",{distancia : 75,distancia2:75, turno:0, audio2:audio2, contar:contar}
  );
  })

.on('pointerover', () => {
    intro.setScale(1.1)
  })

.on('pointerout', () => {
    intro.setScale(1)
  })

  let musica;
  musica = this.add.image(1830,80,"music").setInteractive()

  .on('pointerdown', () => {

    if(contar===0){
      contar = 1
  
      sonido = this.add.image(1830,80,"mute")
      audio2.pause()
    }else{
      if (contar === 1){
        contar = 0
        sonido.destroy()
        
        audio2.resume()
      }
    }
    
  })

  .on('pointerover', () => {
      musica.setScale(1.1)
      sonido.setScale(1.1)

    
  })

  .on('pointerout', () => {
  
      musica.setScale(1)
      sonido.setScale(1)

  })

  }
}