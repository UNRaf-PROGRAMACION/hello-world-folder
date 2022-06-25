var player;
var number;


import Button from "../js/button.js";

export class Tablero extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
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

        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.updateTexto, this);
        this.player.setX(this.player.x + 128 * valor);
      });

      boton.inputEnabled = false; 
      
    }

    dado(){
      
    let valor = Phaser.Math.Between(1, 6);

    number = this.add.text(464, 800, valor, { stroke: 'red', strokeThickness: 5, fontSize: '48px Arial', fill: 'yellow' });

    //number.destroy();

    //this.time.events.loop(Phaser.Timer.SECOND, updateTexto, this);
  
    return valor;
  }

  updateTexto(){
    let valor = Phaser.Math.Between(1, 6);
    number = this.add.text(464, 800, valor, { stroke: 'red', strokeThickness: 5, fontSize: '48px Arial', fill: 'yellow' });
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