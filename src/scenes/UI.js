//import Phaser from 'phaser'
//import { sharedInstance as events } from './EventCenter'

export  class UI extends Phaser.Scene
{

	constructor()
	{
		super({
			key: 'ui'
		})
	}

	init()
	{
		this.count = 3;

	}

    create(){
        texto = this.add.text(10 - 5, 250 - 125, `Vidas: ${number}`, { stroke: 'black', strokeThickness: 5, fontSize: '54px Arial', fill: 'white' });
    
    
		
        events.on('vida-changed', this.handleVidaChanged, this);
        events.on('vida-finish', this.handleVidaFinish, this);

        this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('vida-finish', this.handleVidaFinish, this);
        })
    }

    handleVidaChanged()
	{
		number = 3 - count;
		texto =  `Vidas: ${number}`
	}

    handleVidaFinish()
	{
		texto.destroy();
	}
}    