export default class Precarga extends Phaser.Scene {
    constructor() {
        super("Precarga");
    }
    preload() {
        this.load.image(
            "bg_menu_inicio",
            "public/assets/images/escenas/menu_inicio.png"
        );
        this.load.image(
            "bg_seleccion_personajes",
            "public/assets/images/escenas/seleccion_personajes.png"
        );

        // this.load.image("duck", "public/assets/images/Duck.png");
        this.load.image("duckWhite", "public/assets/images/duck-white.png");

        this.load.atlas(
            "atlas_patos_static",
            "public/assets/images/atlas/atlas_patos_static.png",
            "public/assets/images/atlas/atlas_patos_static.json"
        );
        this.load.atlas(
            "atlas_patos_spritesheet",
            "public/assets/images/atlas/atlas_patos_spritesheet.png",
            "public/assets/images/atlas/atlas_patos_spritesheet.json"
        );
        // this.load.sprite('pato-bruja-spritesheet', '/pato-bruja', {frameWidth: 64, frameHeight: 64})
        this.load.spritesheet(
            "spritesheet-pato-bruja",
            "public/assets/images/spritesheet/spritesheet-pato-bruja.png",
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.spritesheet(
            "spritesheet-pato-galera",
            "public/assets/images/spritesheet/spritesheet-pato-galera.png",
            { frameWidth: 64, frameHeight: 64 }
        );

        this.load.spritesheet(
            "spritesheet-pato-bruja-idle",
            "public/assets/images/spritesheet/spritesheet-pato-bruja-idle.png",
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.spritesheet(
            "spritesheet-pato-galera-idle",
            "public/assets/images/spritesheet/spritesheet-pato-galera-idle.png",
            { frameWidth: 64, frameHeight: 64 }
        );
        // this.load.image("pato-gorro-bruja", "public/assets/images/personajes/pato-gorro-bruja.png");
        // this.load.image("pato-gorro-verde", "public/assets/images/personajes/pato-gorro-verde.png");
        // this.load.image("pato-galera", "public/assets/images/personajes/pato-galera.png");

        this.load.atlas(
            "botones",
            "public/assets/images/atlas/botones-rojos.png",
            "public/assets/images/atlas/botones-rojos_atlas.json"
        );

        // this.load.image("boton-jugar", "public/assets/images/botones/botones-rojos/boton-jugar.png");
        // this.load.image("boton-ayuda", "public/assets/images/botones/botones-rojos/boton-ayuda.png");
        // this.load.image("boton-listo", "public/assets/images/botones/botones-rojos/boton-listo.png");
        // this.load.image("boton-opciones", "public/assets/images/botones/botones-rojos/boton-opciones.png");
        // this.load.image("boton-creditos", "public/assets/images/botones/botones-rojos/boton-creditos.png");
        // this.load.image("btnCerrar", "public/assets/images/botones/botones-rojos/boton-cerrar.png");
        this.load.image(
            "boton-dado",
            "public/assets/images/botones/boton-dado.png"
        );

        this.load.image(
            "lapizEdit",
            "public/assets/images/botones/lapiz-edit.png"
        );
        this.load.image(
            "btnCheck",
            "public/assets/images/botones/boton-check.png"
        );

        this.load.tilemapTiledJSON(
            "map_tablero",
            "public/assets/tilemaps/tablero.json"
        );
        this.load.image(
            "tiledBackground",
            "public/assets/images/fondo-tablero.jpg"
        );
        this.load.image(
            "tiledCasillas",
            "public/assets/images/casillas-atlas.png"
        );
        // this.load.image("casillaVacia", 'public/assets/images/casillas/casilla-vacia.png');
        this.load.image(
            "casillaInvisible",
            "public/assets/images/casillas/casilla-invisible.png"
        );
    }
    create() {
        this.add.text(400, 300, "Cargando!...");

        this.anims.create({
            key: "pato-bruja-idle",
            frames: this.anims.generateFrameNumbers(
                "spritesheet-pato-bruja-idle",
                {
                    start: 0,
                    end: 3,
                }
            ),
            frameRate: 4,
            repeat: -1,
        });
        this.anims.create({
            key: "pato-galera-idle",
            frames: this.anims.generateFrameNumbers(
                "spritesheet-pato-galera-idle",
                {
                    start: 0,
                    end: 3,
                }
            ),
            frameRate: 4,
            repeat: -1,
        });

        this.anims.create({
            key: "pato-bruja-move",
            frames: this.anims.generateFrameNumbers("spritesheet-pato-bruja", {
                start: 0,
                end: 14,
            }),
            frameRate: 15,
            repeat: 0,
        });
        this.anims.create({
            key: "pato-galera-move",
            frames: this.anims.generateFrameNumbers("spritesheet-pato-galera", {
                start: 0,
                end: 12,
            }),
            frameRate: 15,
            repeat: 0,
        });
      setTimeout(() => this.scene.start("Inicio"), 1000);

    }
    
}
