export class MainMenu extends Phaser.Scene {
  constructor() {

    super("MainMenu");
  }
  init(data) {
      
    this.audio = data.audio;
    this.contar= data.contar;
    

  }

  create() {
 
  let Jugar;
  
  this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"cueva");
  this.add.image(this.cameras.main.centerX/1,this.cameras.main.centerY/1.7,"inicio"); 
  

  Jugar = this.add.image(this.cameras.main.centerX/1.04,this.cameras.main.centerY/0.644,"jugar").setInteractive()
  
  .on('pointerdown', () => {
      this.audio.stop();
      this.scene.start("Instrucciones",{contar:this.contar})
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
        
        this.scene.start("Creditos", {audio:this.audio, contar:this.contar})
      })
  
    .on('pointerover', () => {
        creditos.setScale(1.1)
      })
  
    .on('pointerout', () => {
        creditos.setScale(1)
      })

      let iconoSonido= "music"
      if (this.contar === 1) {
        iconoSonido= "mute"
      }

      let musica = this.add.image(1830,80,iconoSonido).setInteractive()

      .on('pointerdown', () => {
        
        if(this.contar===0){
          iconoSonido= "mute"
          this.contar = 1
          this.audio.pause()
          musica.setTexture("mute")
        }else{
          if (this.contar === 1){
            iconoSonido= "music"
            this.contar = 0
            this.audio.resume()
            musica.setTexture("music")
          }
        }
        
      })
  
      .on('pointerover', () => {
        musica.setScale(1.1)
        //sonido.setScale(1.1)
      })
  
      .on('pointerout', () => {
        musica.setScale(1)
        //sonido.setScale(1)
      })
      
  }
  update(){
    
    
  }
}

  

