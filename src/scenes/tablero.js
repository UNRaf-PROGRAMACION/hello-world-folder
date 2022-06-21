import Button from "../js/button.js";

export class Tablero extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Tablero");
    }
    preload() {
      this.load.tilemapTiledJSON("map", "public/assets/tilemaps/tablero.json");
      this.load.image("tilesBelow", "public/assets/images/jungla-atlas.png");
      this.load.image("tilesPlatform", "public/assets/images/floor-atlas.png");
    }
    create() {
      const map = this.make.tilemap({ key: "map" });

      const tilesetBelow = map.addTilesetImage("jungla-atlas", "tilesBelow");
  
      const tilesetPlatform = map.addTilesetImage(
        "floor-atlas",
        "tilesPlatform"
      );
  
      const belowLayer = map.createLayer("Fondo", tilesetBelow, 0, 0);
      const worldLayer = map.createLayer("Plataformas", tilesetPlatform, 0, 0);
      const objectsLayer = map.getObjectLayer("Objetos");
  
      worldLayer.setCollisionByProperty({ collides: true });
  
      const spawnPoint = map.findObject("Objetos", (obj) => obj.name === "dude");



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

      const botonDado = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Tirar dado', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("");
    });


    }

    update(){

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

  }
}