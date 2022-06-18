export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(
        scene,
        x,
        y,
        texture,
        frame,
        name,
        color,
        timeTurn = 15,
        map,
        posJugador
    ) {
        super(scene, x, y, texture);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setTint(color);

        this.timeTurn = timeTurn;
        this.isTurn = false;
        this.canThrowDice = false;
        this.canPlay = true;
        this.canMove = false;
        this.wallet = 0;
        this.canBuy = true;
        this.invetory = {
            slotOne: null,
            slotTwo: null,
        };
        this.name = name;
        this.posJugador = posJugador;
        this.map = map;
        this.nextTurn = true;
        this.countTurn = 0;
        this.afectarContricante = false;
        // this.setScale(0.5)
    }

    get getTimeTurn() {
        return this.timeTurn;
    }
    set setTimeTurn(time) {
        this.timeTurn = time;
    }
    get getCanThrowDice() {
        return this.canThrowDice;
    }
    set setCanThrowDice(bool) {
        this.canThrowDice = bool;
    }
    get getCanPlay() {
        return this.canPlay;
    }
    set setCanPlay(canPlay) {
        this.canPlay = canPlay;
    }
    get getCanMove() {
        return this.canMove;
    }
    set setCanMove(canMove) {
        this.canMove = canMove;
    }
    get getWallet() {
        return this.wallet;
    }
    set setWallet(money) {
        this.wallet = money;
    }
    get getInvetory() {
        return this.invetory;
    }
    set setInvetory(invetory) {
        const { slotOne, slotTwo } = invetory;
        this.invetory = {
            slotOne: slotOne,
            slotTwo: slotTwo,
        };
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getIsTurn() {
        return this.isTurn;
    }
    set setIsTurn(bool) {
        this.isTurn = bool;
    }
    get getPosJugador(){
        return this.posJugador;
    }
    set setPosJugador(num){
        this.posJugador = num;
    }
    get getNextTurn() {
        return  this.nextTurn;
    }
    set setNextTurn(bool){
        this.nextTurn = bool;
    }
    get getCountTurn(){
        return this.countTurn;
    }
    set setCountTurn(num = 1){
        this.countTurn += num;
    }
    get getAfectarContricante(){
        return this.afectarContricante;
    }
    set setAfectarContricante(bool){
        this.afectarContricante = bool;
    }
    mover(dado = 1) {
        this.posJugador += dado;
        if (this.posJugador > 45) {
            // this.numeroDelDado = 0;
            this.posJugador -= dado;
        }
        if (this.posJugador === 45) {
            this.scene.scene.start("Ganador", this);
        }
        let spawnPoint = this.map.findObject(
            "casillas",
            (obj) => obj.name === this.posJugador.toString()
        );
        this.setX(spawnPoint.x + Phaser.Math.Between(0, 34));
        this.setY(spawnPoint.y - Phaser.Math.Between(0, 34));

        this.setIsTurn = false;
        this.setCanThrowDice = false;
    }
    tirarDado(isClick = false) {
        if (this.getCanThrowDice && this.nextTurn) {
            if (isClick) {
                let numeroDelDado = Phaser.Math.Between(1, 6);
                this.mover(numeroDelDado);
                // this.setTimeTurn = this.timeTurn;
                
            } else {
                console.log('Aca toy')
                this.mover(1);
                // this.setTimeTurn = this.timeTurn;
            }
        }
    }

    // moverJugador(dado = 1) {
    //     // console.log("----------------");
    //     // console.log("Posactul ", this.posActual);
    //     // console.log("Dado ", dado);
    //     // console.log("----------------");

    //     this.soloMover(this.posActual);

    //     if (this.casillaDescativadaOverlap) {
    //         this.casillaDescativadaOverlap.enableBody(
    //             true,
    //             this.casillaDescativadaOverlap.x,
    //             this.casillaDescativadaOverlap.y,
    //             true,
    //             true
    //         );
    //     }
    // }
    soloMover(pos) {
        // console.log(typeof pos)
        let spawnPoint = this.map.findObject(
            "casillas",
            (obj) => obj.name === pos.toString()
        );
        this.setX(spawnPoint.x);
        this.setY(spawnPoint.y);
    }
}
