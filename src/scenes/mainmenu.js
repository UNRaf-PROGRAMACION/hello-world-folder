let contar;
let sonido;
let audio;

export class MainMenu extends Phaser.Scene {
  constructor() {

    super("MainMenu");
  }
  init(data) {
      
    audio = data.audio;
    contar= data.contar;


  }

  create() {
 
 
  contar=0;


  let Jugar;
  
  this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"cueva");
  this.add.image(this.cameras.main.centerX/1,this.cameras.main.centerY/1.8,"inicio"); 
  

  Jugar = this.add.image(this.cameras.main.centerX/1.04,this.cameras.main.centerY/0.644,"jugar").setInteractive()
  
  .on('pointerdown', () => {
      audio.stop();
      this.scene.start("Instrucciones")
    })

  .on('pointerover', () => {
      Jugar.setScale(1.1)
    })

  .on('pointerout', () => {
      Jugar.setScale(1)
    })

    let creditos;

    creditos = this.add.image(this.cameras.main.centerX/1.04,this.cameras.main.centerY/0.535,"credito").setInteractive()
  
    .on('pointerdown', () => {
        
        this.scene.start("Creditos", {audio:audio, contar:contar})
      })
  
    .on('pointerover', () => {
        creditos.setScale(1.1)
      })
  
    .on('pointerout', () => {
        creditos.setScale(1)
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
  update(){
    
    
  }
}

  

