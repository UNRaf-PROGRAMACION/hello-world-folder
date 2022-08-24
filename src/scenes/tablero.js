let contar;
let number;
let valor;
let distancia;
let boton;
let audio2;
let final;
let sonido;
let musica;

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
      contar=data.contar;
      audio2=data.audio2;
      
  
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

      this.cameras.main.setBounds(0, 0, 1952, 1080);

     
      musica = this.add.image(distancia - 10, this.player.y - 250,"music2").setInteractive()

      .on('pointerdown', () => {

        if(contar===0){
          contar = 1
      
          sonido = this.add.image(distancia - 10, this.player.y - 250,"mute2")
          audio2.pause()
        }else{
          if (contar === 1){
            contar = 0
            sonido.destroy()
            
            audio2.resume()
          }
        }
        
      })

      .on('pointerover', () => {
          musica.setScale(1.1)
          sonido.setScale(1.1)

        
      })

      .on('pointerout', () => {
      
          musica.setScale(1)
          sonido.setScale(1)

      })

      this.physics.add.overlap(this.player, final, this.hitFinal, null, this);

      boton = this.add.image(this.cameras.main.midPoint.x ,this.cameras.main.midPoint.y - 150 ,"dado").setInteractive().setOrigin(0.5)

      .on('pointerdown', () => {
        musica.destroy()
        boton.destroy()
        this.updateTexto()
       
        number = this.add.text(distancia - 10, this.player.y - 170, valor, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' })
        
        setTimeout(() => {
          number.destroy()
          
          this.player.setX(distancia + 128 * valor)
          }, 3000)

        setTimeout(() => {
          this.scene.start("Cartas", { distancia : this.player.x, audio2:audio2, contar:contar  }
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
      musica.destroy();
      setTimeout(() => {
        this.add.image(distancia -400, this.player.y-100, "completo");

        let otro = this.add.image(distancia -410, this.player.y + 25, "botone").setInteractive()
        
        .on('pointerdown', () => {
          
          this.scene.start(
            "Preloads")
        })
      
      .on('pointerover', () => {
          otro.setScale(1.1)
        })
      
      .on('pointerout', () => {
          otro.setScale(1)
        })
         
       }, 3000)

   

    }


    update(){

  }

}