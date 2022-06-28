import Button from "../js/button.js";
var card;
var card2;
var distancia;
var salvado;
var contar;
var sonido;
var audio2;

export class Cartas extends Phaser.Scene {
    constructor() {
     
      super("Cartas");
    }

    init(data) {
      
      distancia= data.distancia;
      contar=data.contar;
      audio2=data.audio2;
      console.log(distancia);
  
    }
    create() {
      this.cameras.main.setZoom(2.5);
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cueva2");

      var musica;
      musica = this.add.image(this.cameras.main.centerX/0.75, this.cameras.main.centerY/1.4,"music").setInteractive()

      .on('pointerdown', () => {

        if(contar===0){
          contar = 1
      
          sonido = this.add.image(this.cameras.main.centerX/0.75, this.cameras.main.centerY/1.4,"mute")
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

      salvado= Phaser.Math.Between(1,2);
      console.log(salvado);
      
      card = this.add.image(this.cameras.main.centerX/1.1, this.cameras.main.centerY,"carta").setInteractive()

      .on('pointerdown', () => {
        musica.destroy()
        if (salvado === 1) {
          card.destroy();
          card2.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartacorrer");
          
          setTimeout(() => {
            audio2.stop()
            this.scene.start("Escenario1", { distancia : distancia  }
     
        )}, 3000); 
          
        }else{
          if (salvado === 2) {
            card.destroy();
            card2.destroy();
            this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartabuena");
            setTimeout(() => {
              this.scene.start("Tablero", { distancia : distancia, audio2:audio2, contar:contar  }
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
        musica.destroy()
        if (salvado === 2) {
          card2.destroy();
          card.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartacorrer");
          
          setTimeout(() => {
            audio2.stop()
            this.scene.start("Escenario1", { distancia : distancia  }
     
        )}, 3000); 
        }else{

          if (salvado === 1) {
            card2.destroy();
            card.destroy();
            this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartabuena");
            setTimeout(() => {
              this.scene.start("Tablero", { distancia : distancia, audio2:audio2, contar:contar  }
       
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
