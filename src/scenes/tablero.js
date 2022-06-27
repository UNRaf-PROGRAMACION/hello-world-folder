var player;
var number;
var valor;
var distancia;
var boton;
var cuadro;


import Button from "../js/button.js";

export class Tablero extends Phaser.Scene {
    constructor() {
      super("Tablero");
    }
    preload() {
      this.load.tilemapTiledJSON("map", "public/assets/tilemaps/tablero.json");
      this.load.image("tilesBelow", "public/assets/images/cueva-atlas.png");
      this.load.image("tilesPlatform", "public/assets/images/casilla-atlas.png");
    }

    init(data) {
      
      distancia = data.distancia;
  
      console.log(distancia);
  
    }

    create() {

      const map = this.make.tilemap({ key: "map" });

      const tilesetBelow = map.addTilesetImage("cueva-atlas", "tilesBelow");
  
      const tilesetPlatform = map.addTilesetImage(
        "casilla-atlas",
        "tilesPlatform"
      );
  
      const belowLayer = map.createLayer("Fondo", tilesetBelow, 0, 0);
      const worldLayer = map.createLayer("Plataformas", tilesetPlatform, 0, 0);
      const objectsLayer = map.getObjectLayer("Objetos");
  
      worldLayer.setCollisionByProperty({ collides: true });


      //const spawnPoint = map.findObject("Objetos", (obj) => obj.name === "casilla1");

      this.player = this.physics.add.sprite(distancia, 862.83, "prota").setCollideWorldBounds(true);
  
      this.physics.add.collider(this.player, worldLayer);
      
      this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

      this.cameras.main.setZoom(2);

      this.cameras.main.setBounds(0, 0, 1920, 1080);

      console.log(this.cameras.main);

      boton = this.add.image(this.cameras.main.midPoint.x ,this.cameras.main.midPoint.y - 200 ,"tirardado").setInteractive().setOrigin(0,5)
      //this.anims.tween({target: this.cameras.main}).onCompleted(()=>{
      //boton.setX()
      //})
      .on('pointerdown', () => {
        boton.destroy()
        this.updateTexto()
        cuadro = this.add.image(478, 830, "cuadro")
        number = this.add.text(464, 800, valor, { stroke: 'black', strokeThickness: 5, fontSize: '48px Arial', fill: 'grey' })
        console.log(distancia)
        setTimeout(() => {
          number.destroy()
          cuadro.destroy()
          this.player.setX(distancia + 128 * valor)
          }, 3000)

        setTimeout(() => {
          this.scene.start("Cartas", { distancia : this.player.x  }
         )}, 5000)
        
        })
        .on('pointerover', () => {
          boton.setScale(1.1)
        })
    
        .on('pointerout', () => {
          boton.setScale(1)
        })
        /*
      const boton = new Button(200, 600, 'Lanzar dado', this, () => {

        this.updateTexto();
        this.add.image(464, 800, "cuadro");
        number = this.add.text(464, 800, valor, { stroke: 'red', strokeThickness: 5, fontSize: '48px Arial', fill: 'yellow' });
        console.log(distancia);
        setTimeout(() => {
          number.destroy();
          this.player.setX(distancia + 128 * valor);
          }, 3000);

        setTimeout(() => {
          number.destroy();
          this.scene.start("Cartas", { distancia : this.player.x  }
      )}, 4500);
        
      }); 

      */
    }
    
    updateTexto(){
      valor = Phaser.Math.Between(1, 6);
      //Wnumber.setText(valor);
    }



    update(){

/*
  const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2.5, 'Carta: Escenario 1', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Escenario1");
  });

  const boton5 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/0.699, 'Carta que te salva', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Comodin");
  });

  const boton4 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/0.579, 'Final', this, () => {
    // Instrucción para pasar a la escena Play
    this.scene.start("Completado");
  });
*/
  }

}