import Button from "../js/button.js";

export class Escenario2 extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Escenario2");
    }

    preload() {
        this.load.tilemapTiledJSON("map2", "public/assets/tilemaps/map.json");
        this.load.image("tilesBelow2", "public/assets/images/sky2_atlas.png");
        this.load.image("tilesPlatform2", "public/assets/images/2 atlas.png");
      
      }
      create() {
    
        const map2 = this.make.tilemap({ key: "map2" });
  
        const tilesetBelow2 = map2.addTilesetImage("sky2_atlas", "tilesBelow");
    
        const tilesetPlatform2 = map2.addTilesetImage(
          "2 atlas",
          "tilesPlatform"
        );
    
        const belowLayer = map2.createLayer("Fondo", tilesetBelow2, 0, 0);
        const worldLayer = map2.createLayer("Plataformas", tilesetPlatform2, 0, 0);
        const objectsLayer = map2.getObjectLayer("Objetos");
    
        worldLayer.setCollisionByProperty({ collides: true });
    
        const spawnPoint = map2.findObject("Objetos", (obj) => obj.name === "dude");
  
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