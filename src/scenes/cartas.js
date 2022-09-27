let card;
let card2;
let distancia;
let distancia2
let salvado;
let contar;
let audio2;
let turno;
let valor; 

export class Cartas extends Phaser.Scene {
    constructor() {
     
      super("Cartas");
    }

    init(data) {
      
      distancia= data.distancia;
      distancia2= data.distancia2;
      contar=data.contar;
      audio2=data.audio2;
      turno=data.turno;
      valor=data.valor;
    }
    create() {

      
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cueva2");

    
      salvado= Phaser.Math.Between(1,2);
      console.log(salvado);
      
      card = this.add.image(this.cameras.main.centerX/1.1, this.cameras.main.centerY,"carta").setInteractive()

      

      .on('pointerdown', () => {
        if (salvado === 1) {
          card.destroy();
          card2.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartacorrer");
          
          setTimeout(() => {
            audio2.stop();
            this.scene.start("Escenario1", { distancia : distancia, distancia2: distancia2,turno : turno, audio2:audio2, contar:contar, valor:valor  }
     
        )}, 3000); 
          
        }else{
          if (salvado === 2) {
            card.destroy();
            card2.destroy();
            this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartabuena");
            setTimeout(() => {
              this.scene.start("Tablero", { distancia : distancia, distancia2: distancia2,turno : turno, audio2:audio2, contar:contar  }
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
          card.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartacorrer");
          
          setTimeout(() => {
            audio2.stop()
            this.scene.start("Escenario1", { distancia : distancia, distancia2: distancia2,turno : turno, audio2:audio2, contar:contar, valor:valor  }
     
        )}, 3000); 
        }else{

          if (salvado === 1) {
            card2.destroy();
            card.destroy();
            this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cartabuena");
            setTimeout(() => {
              this.scene.start("Tablero", { distancia : distancia,distancia2: distancia2,turno : turno, audio2:audio2, contar:contar  }
       
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

    this.cameras.main.setZoom(2.5);
  }  

  update() {
  
  }
}
