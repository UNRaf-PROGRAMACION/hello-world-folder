import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Seleccion } from "../scenes/seleccion.js";
import { Tablero } from "../scenes/tablero.js";
import { Dado } from "../scenes/dado.js";
import { Escenario1 } from "../scenes/escenario1.js";
import { Escenario2 } from "../scenes/escenario2.js";
import { Escenario3 } from "../scenes/escenario3.js";
import { Comodin } from "../scenes/comodin.js";
import { Creditos } from "../scenes/creditos.js";
import { Completado } from "../scenes/completado.js";

var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [Preloads, MainMenu, Seleccion, Tablero, Dado, Escenario1, Escenario2, Escenario3, Comodin, Creditos, Completado],
};

var game = new Phaser.Game(config);
