import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Creditos } from "../scenes/creditos.js";
import { Configuraciones } from "../scenes/configuraciones.js";
import { Instrucciones } from "../scenes/instrucciones.js";
import { Tablero } from "../scenes/tablero.js";
import { Escenario1 } from "../scenes/escenario1.js";
import { Dado } from "../scenes/dado.js";



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
      width: 1280,
      height: 720,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 800 },
      debug: false,
    },
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [Preloads, MainMenu, Configuraciones, Instrucciones, Tablero, Escenario1, Dado, Creditos],
};

var game = new Phaser.Game(config);

