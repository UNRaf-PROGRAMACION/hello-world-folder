var player;
var enemys;
var snakes;
var cursors;
var gameOver;
var count;
var isJumping;
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
      this.load.tilemapTiledJSON("map1", "public/assets/tilemaps/esc1.json");
      this.load.image("tilesBelow1", "public/assets/images/jungla-atlas.png");
      this.load.image("tilesPlatform1", "public/assets/images/plataforma.png");
    
    }

    create() {

      
  
      const map1 = this.make.tilemap({ key: "map1" });

      const tilesetBelow1 = map1.addTilesetImage("jungla-atlas", "tilesBelow1");
  
      const tilesetPlatform1 = map1.addTilesetImage(
        "plataforma",
        "tilesPlatform1"
      );
  
      const belowLayer = map1.createLayer("Fondo", tilesetBelow1, 0, 0);
      const worldLayer = map1.createLayer("Plataformas", tilesetPlatform1, 0, 0);
      const objectsLayer = map1.getObjectLayer("Objetos");
  
      worldLayer.setCollisionByProperty({ collides: true });
  
      const spawnPoint = map1.findObject("Objetos", (obj) => obj.name === "dude");

      player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "dude")
      .setCircle(50, 40, 40)
      

      //player.setCollideWorldBounds(true);
      player.anims.play("run");
      
      
      isJumping = false

      this.cameras.main.startFollow(player, true, 0.08, 0.08);
    
      this.cameras.main.setZoom(1.5);
      this.cameras.main.setBounds(0, 0, 3200, 1080);

      cursors = this.input.keyboard.createCursorKeys();
    

      enemys = this.physics.add.group();
      snakes = this.physics.add.group();

      objectsLayer.objects.forEach((objData) => {

      const { x = 0, y = 0, name, type } = objData;
      switch (name) {
        case "enemy": {

          var enemy = enemys.create(x, y, "roca");
          
          break;
        }
        case "snake": {

          var snake = snakes.create(x, y, "snake");
          
          break;
        }
      } 
    });

       
      this.physics.add.collider(player, worldLayer);
      this.physics.add.collider(enemys, worldLayer);
      this.physics.add.collider(snakes, worldLayer);
  
      this.physics.add.overlap(player, enemys, this.hitEnemy, null, this);
      this.physics.add.overlap(player, snakes, this.hitSnake, null, this);
  
      gameOver = false;
      count = 0;
    }

    hitEnemy(player,enemy) {
      enemy.destroy();
      count = count + 1;

      this.physics.pause();
  
      player.setTint(0xff0000);
    
      player.anims.play("jump");
      console.log(count);
      setTimeout(() => {

        this.physics.resume();
  
        player.clearTint();
        
        player.anims.play("run");
        console.log(count);

      }, 1000); 
    }

    hitSnake(player,snake) {
      snake.destroy();
      count = count + 1;

      this.physics.pause();
  
      player.setTint(0xff0000);
    
      player.anims.play("jump");
      console.log(count);
      setTimeout(() => {

        this.physics.resume();
  
        player.clearTint();
        
        player.anims.play("run");
        console.log(count);

      }, 1000); 
    }

  update(){
    
    player.setVelocityX(100);

    if (gameOver) {
      return;
    };

    if (cursors.up.isDown && player.body.blocked.down) {
      player.setVelocityY(-570);
      player.setVelocityX(200);
      player.anims.play("jump");
      isJumping = true;
    } else {
      if (isJumping && player.body.blocked.down) {
        player.anims.play("run");
        player.setVelocityX(100);
        isJumping = false;
      }
    }

    if (count === 3){
    
      gameOver= true 

      setTimeout(() => {
        this.scene.start("Tablero");
        this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,);
   
      }, 1000); 
    }
  }
}