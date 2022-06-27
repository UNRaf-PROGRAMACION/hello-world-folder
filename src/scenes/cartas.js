import Button from "../js/button.js";
var card;
var card2;
var valor;
var distancia;
var salvado;

export class Cartas extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Cartas");
    }

    init(data) {
      // recupera el valor SCORE enviado como dato al inicio de la escena
      distancia= data.distancia;
  
      console.log(distancia);
  
    }
    create() {
      this.cameras.main.setZoom(2.5);
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cueva2");
      salvado= Phaser.Math.Between(1,2);
      console.log(salvado);
      
      card = this.add.image(this.cameras.main.centerX/1.1, this.cameras.main.centerY,"carta").setInteractive()

      .on('pointerdown', () => {
        
        if (salvado === 1) {
          this.scene.start("Escenario1")
        }else{
          if (salvado === 2) {
          this.scene.start("Tablero", { distancia : distancia  }
          )}
        }
          
      })
  
      .on('pointerover', () => {
        card.setScale(1.1)
      })
  
      .on('pointerout', () => {
        card.setScale(1)

    })
   
    card2 = this.add.image(this.cameras.main.centerX/0.95, this.cameras.main.centerY,"carta").setInteractive()

      .on('pointerdown', () => {
       
        if (salvado === 2) {
          this.scene.start("Escenario1")
        }else{
          if (salvado === 1) {
          this.scene.start("Tablero", { distancia : distancia  }
          )}
        }
          
      })
  
      .on('pointerover', () => {
        card2.setScale(1.1)
      })
  
      .on('pointerout', () => {
        card2.setScale(1)

    })
  }  

  update() {
  
  }
}
