import {Bullet} from './Bullet'
import {Missile} from './Missile'
class Torret{
    constructor(TorretName,TorretType,TorretColor,TorretTexture,TorretLevel=1,TorretCantTubes,TorretPowerDamage,TorretLive,TorretPosition){
        this.TorretName=TorretName;
        this.TorretType=TorretType;
        this.TorretColor=TorretColor;
        this.TorretTexture=TorretTexture;
        this.TorretLevel=TorretLevel;
        this.TorretCantTubes=TorretCantTubes;
        this.TorretPowerDamage=TorretPowerDamage;
        this.TorretLive=TorretLive;
        this.TorretPosition=TorretPosition;
    }

    Shoot(){
        let damage=0;
        if(this.TorretLevel==2){
            damage=2;
        }else{
            damage=1;
        }

        let bullet = new Bullet("Bala",damage);
        let missile= new Missile(15,"Missile",15);
        
        missile.Explosion();

        
    }

    Damage(dmgMonster){
        this.TorretLive-=dmgMonster;
    }

    LevelUp(){
        this.TorretLevel++;
    }

    LevelDown(){
        this.TorretLevel--;
    }
}

export {Torret}