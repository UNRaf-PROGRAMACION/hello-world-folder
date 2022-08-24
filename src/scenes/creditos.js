let retroceso;
let sonido;
let contar;
let audio;

export class Creditos extends Phaser.Scene {
    constructor() {
   
      super("Creditos");
    }
    init(data) {
      
      audio = data.audio;
      contar= data.contar;
  
  
    }

    create() {
      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"cueva");
      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"creditos"); 

      retroceso = this.add.image(this.cameras.main.centerX/1.372,this.cameras.main.centerY/4.09,"volver").setInteractive()

    .on('pointerdown', () => {
        
        this.scene.start("MainMenu")
        
      })
  
    .on('pointerover', () => {
        retroceso.setScale(1.1)
      })
  
    .on('pointerout', () => {
        retroceso.setScale(1)
      })

      let musica;
      musica = this.add.image(1830,80,"music").setInteractive()

      .on('pointerdown', () => {

        if(contar===0){
          contar = 1
          sonido = this.add.image(1830,80,"mute")
          audio.pause()
        }else{
          if (contar === 1){
            contar = 0
            sonido.destroy()
            audio.resume()
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