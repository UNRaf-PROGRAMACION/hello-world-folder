import Button from "../js/button.js";
var card;
var card2;
var valor;
var distancia;
var salvado;

export class Cartas extends Phaser.Scene {
    constructor() {
     
      super("Cartas");
    }

    init(data) {
      
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
          card.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartacorrer");
          setTimeout(() => {
            this.scene.start("Escenario1", { distancia : distancia  }
     
        )}, 3000); 
          
        }else{
          if (salvado === 2) {
            card.destroy();
            this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartabuena");
            setTimeout(() => {
              this.scene.start("Tablero", { distancia : distancia  }
          )}, 3000); 
        }
      }})
  
      .on('pointerover', () => {
        card.setScale(1.1)
      })
  
      .on('pointerout', () => {
        card.setScale(1)

    })
   
    card2 = this.add.image(this.cameras.main.centerX/0.95, this.cameras.main.centerY,"carta").setInteractive()

      .on('pointerdown', () => {
       
        if (salvado === 2) {
          card2.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartacorrer");
          setTimeout(() => {
            this.scene.start("Escenario1", { distancia : distancia  }
     
        )}, 3000); 
        }else{

          if (salvado === 1) {
            this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartabuena");
            setTimeout(() => {
              this.scene.start("Tablero", { distancia : distancia  }
       
          )}, 3000); 
          }
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
