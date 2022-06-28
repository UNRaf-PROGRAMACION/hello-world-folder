
var number;
var valor;
var distancia;
var boton;
var cuadro;
var final;


import Button from "../js/button.js";

export class Tablero extends Phaser.Scene {
    constructor() {
      super("Tablero");
    }
    preload() {
      this.load.tilemapTiledJSON("map", "public/assets/tilemaps/tablero.json");
      this.load.image("tilesBelow", "public/assets/images/cueva-atlas.png");
      this.load.image("tilesPlatform", "public/assets/images/casilas atlas.png");
    }

    init(data) {
      
      distancia = data.distancia;
  
      console.log(distancia);
  
    }

    create() {

      const map = this.make.tilemap({ key: "map" });

      const tilesetBelow = map.addTilesetImage("cueva-atlas", "tilesBelow");
  
      const tilesetPlatform = map.addTilesetImage(
        "casilas atlas",
        "tilesPlatform"
      );
  
      const belowLayer = map.createLayer("Fondo", tilesetBelow, 0, 0);
      const worldLayer = map.createLayer("Plataformas", tilesetPlatform, 0, 0);
      const objectsLayer = map.getObjectLayer("Objetos");
  
      worldLayer.setCollisionByProperty({ collides: true });


      const spawnPoint = map.findObject("Objetos", (obj) => obj.name === "final");
      final = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "banderaTablero");


      this.player = this.physics.add.sprite(distancia, 862.83, "prota").setCollideWorldBounds(true);
  
      this.physics.add.collider(this.player, worldLayer);
      this.physics.add.collider(final, worldLayer);
      
      this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

      this.cameras.main.setZoom(2);

      this.cameras.main.setBounds(0, 0, 1920, 1080);

      this.physics.add.overlap(this.player, final, this.hitFinal, null, this);

      boton = this.add.image(this.cameras.main.midPoint.x ,this.cameras.main.midPoint.y - 200 ,"dado").setInteractive().setOrigin(0.5)

      .on('pointerdown', () => {
        
        boton.destroy()
        this.updateTexto()
        //cuadro = this.add.image(478, 830, "cuadro")
        number = this.add.text(distancia - 10, this.player.y - 220, valor, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' })
        console.log(distancia)
        setTimeout(() => {
          number.destroy()
          //cuadro.destroy()
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
        
    }
    
    updateTexto(){
      valor = Phaser.Math.Between(1, 6);
     
    }

    hitFinal(player, final){

      boton.destroy();
      setTimeout(() => {
        this.add.image(distancia - 10, this.player.y - 220, "completo").setInteractive()
        .on('pointerdown', () => {
    
          this.scene.start("MainMenu")
        })
     
        }, 3000); 
       
    }


    update(){

  }

}