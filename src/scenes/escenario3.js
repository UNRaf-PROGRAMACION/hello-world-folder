import Button from "../js/button.js";

export class Escenario3 extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Escenario3");
    }
  
    preload() {
        this.load.tilemapTiledJSON("map3", "public/assets/tilemaps/map.json");
        this.load.image("tilesBelow3", "public/assets/images/sky2_atlas.png");
        this.load.image("tilesPlatform3", "public/assets/images/2 atlas.png");
      
      }
      create() {
    
        const map3 = this.make.tilemap({ key: "map3" });
  
        const tilesetBelow3 = map3.addTilesetImage("sky2_atlas", "tilesBelow");
    
        const tilesetPlatform3 = map3.addTilesetImage(
          "2 atlas",
          "tilesPlatform"
        );
    
        const belowLayer = map3.createLayer("Fondo", tilesetBelow3, 0, 0);
        const worldLayer = map3.createLayer("Plataformas", tilesetPlatform3, 0, 0);
        const objectsLayer = map3.getObjectLayer("Objetos");
    
        worldLayer.setCollisionByProperty({ collides: true });
    
        const spawnPoint = map3.findObject("Objetos", (obj) => obj.name === "dude");

  
        const { x = 0, y = 0, name, type } = objData;
        switch (name) {
          case "star": {
            // add star to scene
            // console.log("estrella agregada: ", x, y);
            var star = stars.create(x, y, "star");
            star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            break;
          }
        }  
        
        const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1, 'Derrota', this, () => {
          // Instrucción para pasar a la escena Play
          this.scene.start("Tablero");
      });
  
      const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2, 'Victoria', this, () => {
          // Instrucción para pasar a la escena Play
          this.scene.start("Dado");
      });
      }
  }