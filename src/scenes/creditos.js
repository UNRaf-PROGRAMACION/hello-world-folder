
export class Creditos extends Phaser.Scene {
    contar
    constructor() {
   
      super("Creditos");
    }
    init(data) {
      
      this.audio = data.audio;
      this.contar= data.contar;
      console.log(data)
  
  
    }

    create() {
      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"cueva");
      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"creditos"); 

      let retroceso = this.add.image(this.cameras.main.centerX/1.372,this.cameras.main.centerY/4.09,"volver").setInteractive()

    .on('pointerdown', () => {
        
        this.scene.start("MainMenu", {audio:this.audio, contar:this.contar,})
        
      })
  
    .on('pointerover', () => {
        retroceso.setScale(1.1)
      })
  
    .on('pointerout', () => {
        retroceso.setScale(1)
      })

      let iconoSonido= "music"
      if (this.contar === 1) {
        iconoSonido= "mute"
        
      }

      let musica = this.add.image(1830,80,iconoSonido).setInteractive({ useHandCursor: true})

      .on('pointerdown', () => {

        if(this.contar===0){
          //iconoSonido= "mute"
          this.contar = 1
          this.audio.pause()
          this.mute = this.add.image(1830,80,"mute").setInteractive()
          musica.setAlpha(0.5)
          
          
        }else{
          if (this.contar === 1){
            //iconoSonido= "music"
            this.contar = 0
            this.audio.resume()
            this.mute.destroy()
            musica.setAlpha(1)
           
          }
        }
        
      })
  
      .on('pointerover', () => {
        musica.setScale(1.1)
        
      })
  
      .on('pointerout', () => {
        musica.setScale(1)
       
      })
  }
  update(){
    
  }
  
}