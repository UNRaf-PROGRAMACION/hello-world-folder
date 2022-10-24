let distancia;
let distancia2
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
      this.contar=data.contar;
      audio2=data.audio2;
      turno=data.turno;
      valor=data.valor;
      this.movimiento = data.movimiento;
    }
    create() {

      
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"cueva2");
      
      let texto = this.add.text(this.cameras.main.centerX -180, this.cameras.main.centerY -200, `Elige tu destino...`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });
    
      let salvado= Phaser.Math.Between(1,3);
      console.log(salvado);
      
      let card = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"carta").setInteractive()

      

      .on('pointerdown', () => {
        if (salvado === 1) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartacorrer");
          this.add.text(this.cameras.main.centerX -220, this.cameras.main.centerY -200, `Corre para sobrevivir`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });
          setTimeout(() => {
            audio2.stop();
            this.scene.start("Escenario1", { distancia : distancia, distancia2: distancia2,turno : turno, movimiento : this.movimiento ,audio2:audio2, contar:this.contar, valor:valor  }
          )}, 3000); 
        }

        if (salvado === 2) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartabuena");
          this.add.text(this.cameras.main.centerX -150, this.cameras.main.centerY -200, `Tuviste suerte`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });

          setTimeout(() => {
            this.scene.start("Tablero", { distancia : distancia, distancia2: distancia2,turno : turno, movimiento : this.movimiento ,audio2:audio2, contar:this.contar  }
          )}, 3000); 
          
        }

        if (salvado === 3) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartacorrer");
          this.add.text(this.cameras.main.centerX-220 , this.cameras.main.centerY -200, `Corre para sobrevivir`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });

          setTimeout(() => {
            this.scene.start("Escenario2", { distancia : distancia, distancia2: distancia2,turno : turno, movimiento : this.movimiento ,audio2:audio2, contar:this.contar  }
          )}, 3000); 
        }
      })

      .on('pointerover', () => {
        card.setScale(1.1)
      })
  
      .on('pointerout', () => {
        card.setScale(1)

    })
   
    let card2 = this.add.image(this.cameras.main.centerX - 170, this.cameras.main.centerY+20,"carta").setInteractive()

      .on('pointerdown', () => {
        
        if (salvado === 2) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartacorrer");
          this.add.text(this.cameras.main.centerX-220 , this.cameras.main.centerY -200, `Corre para sobrevivir`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });

          setTimeout(() => {
            audio2.stop()
            this.scene.start("Escenario2", { distancia : distancia, distancia2: distancia2, turno : turno, movimiento : this.movimiento, audio2:audio2, contar:this.contar, valor:valor  }
          )}, 3000); 
        }

        if (salvado === 1) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartabuena");
          this.add.text(this.cameras.main.centerX -150, this.cameras.main.centerY -200, `Tuviste suerte`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });

          setTimeout(() => {
            this.scene.start("Tablero", { distancia : distancia,distancia2: distancia2,turno : turno, movimiento : this.movimiento, audio2:audio2, contar:this.contar  }
       
          )}, 3000); 
        }

        if (salvado === 3) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartacorrer");
          this.add.text(this.cameras.main.centerX -220, this.cameras.main.centerY -200, `Corre para sobrevivir`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });

          setTimeout(() => {
            this.scene.start("Escenario1", { distancia : distancia, distancia2: distancia2,turno : turno, movimiento : this.movimiento ,audio2:audio2, contar:this.contar  }
          )}, 3000); 
        }

      })
  
      .on('pointerover', () => {
        card2.setScale(1.1)
      })
  
      .on('pointerout', () => {
        card2.setScale(1)

    })

    let card3 = this.add.image(this.cameras.main.centerX + 170, this.cameras.main.centerY+20,"carta").setInteractive()

      .on('pointerdown', () => {
        
        if (salvado === 2) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartacorrer");
          this.add.text(this.cameras.main.centerX -220, this.cameras.main.centerY -200, `Corre para sobrevivir`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });

          setTimeout(() => {
            audio2.stop()
            this.scene.start("Escenario1", { distancia : distancia, distancia2: distancia2, turno : turno, movimiento : this.movimiento, audio2:audio2, contar:this.contar, valor:valor  }
          )}, 3000); 

        }

        if (salvado === 1) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartacorrer");
          this.add.text(this.cameras.main.centerX -220, this.cameras.main.centerY -200, `Corre para sobrevivir`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });

          setTimeout(() => {
            this.scene.start("Escenario2", { distancia : distancia,distancia2: distancia2,turno : turno, movimiento : this.movimiento, audio2:audio2, contar:this.contar  }
          )}, 3000); 
        }
        
        if (salvado === 3) {
          texto.destroy()
          card.destroy();
          card2.destroy();
          card3.destroy();
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY+20,"cartabuena");
          this.add.text(this.cameras.main.centerX -150, this.cameras.main.centerY -200, `Tuviste suerte`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });

          setTimeout(() => {
            this.scene.start("Tablero", { distancia : distancia, distancia2: distancia2,turno : turno, movimiento : this.movimiento ,audio2:audio2, contar:this.contar  }
          )}, 3000); 
        }
        
      })
  
      .on('pointerover', () => {
        card3.setScale(1.1)
      })
  
      .on('pointerout', () => {
        card3.setScale(1)

    })

    this.cameras.main.setZoom(2.5);
  }  

  update() {
  
  }
}
