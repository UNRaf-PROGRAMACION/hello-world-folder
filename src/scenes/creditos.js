var retroceso;

export class Creditos extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Creditos");
    }


    create() {

      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"creditos"); 

      retroceso = this.add.image(this.cameras.main.centerX/1.379,this.cameras.main.centerY/4.4,"volver").setInteractive()

    .on('pointerdown', () => {
  
        this.scene.start("MainMenu")
        console.log("hola")
      })
  
    .on('pointerover', () => {
        retroceso.setScale(1.1)
      })
  
    .on('pointerout', () => {
        retroceso.setScale(1)
      })

  }
}