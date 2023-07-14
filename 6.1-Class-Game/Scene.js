import {Enemy} from './Enemy'
import {Torret} from './Torret'
class Scene{
    constructor(){
        
    }

    CreateScene(){
        this.#CreateEnemies();    
        this.#CreateTorrets();
    }

    #CreateEnemies(){
        let EnemyBlue=new Enemy("Blue","AngelMonster1","spriteblue.png",3,2,5,{x:15,y:52});
        let EnemyGreen=new Enemy("Green","GreenMonster","spritegreen.png",0,0,10,{x:55,y:102});
    }

    #CreateTorrets(){
        let Torret1=new Torret("Torreta1","Basica","Blue","bluetorret.png",1,1,1,5,0);
        let Torret2=new Torret("Torreta2","Basica","Blue","bluetorret.png",1,1,1,5,1);
        let Torret3=new Torret("Torreta3","Basica","Blue","bluetorret.png",1,1,1,5,2);
        let Torret4=new Torret("Torreta4","Basica","Blue","bluetorret.png",1,1,1,5,3);
        let Torret5=new Torret("Torreta5","Basica","Blue","bluetorret.png",1,1,1,5,4);
    }

}