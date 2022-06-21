var player;
var enemys;
var cursors;
var gameOver;
var count;
//var scoreTime;
//var scoreTimeText;
//var timedEvent;

import Button from "../js/button.js";

export class Escenario1 extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Escenario1");
    }

    preload() {
      this.load.tilemapTiledJSON("map1", "public/assets/tilemaps/map.json");
      this.load.image("tilesBelow1", "public/assets/images/jungla-atlas.png");
      this.load.image("tilesPlatform1", "public/assets/images/floor-atlas.png");
    
    }

    create() {

      this.cameras.main.setBounds(0, 0, 3392, 100);
  
      const map1 = this.make.tilemap({ key: "map1" });

      const tilesetBelow1 = map1.addTilesetImage("jungla-atlas", "tilesBelow1");
  
      const tilesetPlatform1 = map1.addTilesetImage(
        "floor-atlas",
        "tilesPlatform1"
      );
  
      const belowLayer = map1.createLayer("Fondo", tilesetBelow1, 0, 0);
      const worldLayer = map1.createLayer("Plataformas", tilesetPlatform1, 0, 0);
      const objectsLayer = map1.getObjectLayer("Objetos");
  
      worldLayer.setCollisionByProperty({ collides: true });
  
      const spawnPoint = map1.findObject("Objetos", (obj) => obj.name === "dude");

      player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "dude");

      player.setCollideWorldBounds(true);

      this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    
      this.cameras.main.setZoom(4);
      
      if ((cursors = !undefined)) {
        cursors = this.input.keyboard.createCursorKeys();
      }

      enemys = this.physics.add.group();

      const { x = 0, y = 0, name, type } = objData;
      switch (name) {
        case "enemy": {

          var enemy = enemys.create(x, y, "enemy");
          
          break;
        }
      }  

      this.physics.add.collider(player, worldLayer);
      this.physics.add.collider(enemys, worldLayer);
  
      this.physics.add.overlap(player, enemys, this.hitEnemy, null, this);
  
      gameOver = false;
      count = 0;
    }

    update(){

      if (gameOver) {
        return;
      }

      this.player.setVelocity(100);

      //VER ANIMACIONES
      if (cursors.up.isDown && player.body.blocked.down) {
        player.setVelocityY(-330);
  
        player.anims.play("up", true);
        
      }else {
        player.setVelocityX(100);
  
        player.anims.play("turn"); 
      }
    

      hitEnemy(player,enemy) ;{

        count = count + 1;

        setTimeout(() => {
         
          this.physics.pause();
    
          player.setTint(0xff0000);
      
          player.anims.play("turn");
      
        }, 100); 
      }

    if (count === 3){
    
      gameOver= true 

      setTimeout(() => {
         
        this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,);

        const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY/1, 'Derrota', this, () => {
          // Instrucción para pasar a la escena Play
          this.scene.start("Mainmenu");
      });
    
      }, 1000); 

    }
      
    const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY/2, 'Victoria', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Dado");
    });
    }
}