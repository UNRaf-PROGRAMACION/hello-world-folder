var player;
var number;
var valor;


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

    
    create() {
      /*
      setTimeout(() => {
        
        this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"instrucciones");
        }, 50000); 
        */
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

      this.cameras.main.setBounds(0, 0, 1920, 1080);

      const spawnPoint = map.findObject("Objetos", (obj) => obj.name === "casilla1");

      this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "dude").setCollideWorldBounds(true);
  
      this.physics.add.collider(this.player, worldLayer);

      this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

      this.cameras.main.setZoom(2);

      const boton = new Button(200, 600, 'Lanzar dado', this, () => {

        number = this.add.text(464, 800, valor, { stroke: 'red', strokeThickness: 5, fontSize: '48px Arial', fill: 'yellow' });
        let tiempo = this.time.elapsed;

        while ( (this.time.elapsed - tiempo) < 5 ){

          console.log(tiempo);
          this.updateTexto();
          tiempo = this.time.elapsed;
        }

        this.player.setX(this.player.x + 128 * valor);
        //number.destroy();
      });

      boton.inputEnabled = false; 
      
    }
    updateTexto(){
      valor = Phaser.Math.Between(1, 6);
      number.setText(valor);
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