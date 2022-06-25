export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  create() {
 /*
  let audio = this.sound.add('theme', {loop: true});
  audio.play();
*/


  var Jugar;
  
  
  this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"inicio"); 
  

  Jugar = this.add.image(this.cameras.main.centerX/1.04,this.cameras.main.centerY/0.644,"jugar").setInteractive()
  
  .on('pointerdown', () => {
  
      this.scene.start("Instrucciones")
    })

  .on('pointerover', () => {
      Jugar.setScale(1.1)
    })

  .on('pointerout', () => {
      Jugar.setScale(1)
    })

    var creditos;

    creditos = this.add.image(this.cameras.main.centerX/1.04,this.cameras.main.centerY/0.535,"credito").setInteractive()
  
    .on('pointerdown', () => {
    
        this.scene.start("Creditos")
      })
  
    .on('pointerover', () => {
        creditos.setScale(1.1)
      })
  
    .on('pointerout', () => {
        creditos.setScale(1)
      })

      var rueda;
      rueda = this.add.image(1830,80,"tuerca").setInteractive()

      .on('pointerdown', () => {
    
        this.scene.start("Configuraciones")
      })
  
      .on('pointerover', () => {
        rueda.setScale(1.1)
      })
  
      .on('pointerout', () => {
        rueda.setScale(1)
      })
  }
  
}
