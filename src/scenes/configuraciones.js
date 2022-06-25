var retroceso;

export class Configuraciones extends Phaser.Scene {
  constructor() {

    super("Configuraciones");
  }

  create() {
    
  this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "inicio2");

  this.add.image(this.cameras.main.centerX/1.07, this.cameras.main.centerY/1.08, "opciones");

  retroceso = this.add.image(this.cameras.main.centerX/1.32,this.cameras.main.centerY/1.39,"volver").setInteractive()

.on('pointerdown', () => {

    this.scene.start("MainMenu")

  })

.on('pointerover', () => {
    retroceso.setScale(1.1)
  })

.on('pointerout', () => {
    retroceso.setScale(1)
  })

var source;
var debug;
var target = new Phaser.Math.Vector2();

source = this.physics.add.image(850, 550, "punto");

debug = this.add.graphics();

this.input.on('pointerdown', function (pointer) {

    target.x = pointer.x;
    target.y = pointer.y;

    this.physics.moveToObject(source, target, 1000);
    
    debug.lineBetween(0, target.y, 800, target.y);
    debug.lineBetween(target.x, 0, target.x, 600);

}, this);

}

}
