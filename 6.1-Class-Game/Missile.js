import { Bullet } from "./Bullet";

class Missile extends Bullet{
    constructor(RadiusDamage,BulletType,BulletDamage){
        this.RadiusDamage=RadiusDamage;    
        this.BulletType=BulletType;
        this.BulletDamage=BulletDamage;
    }    
}

export {Missile}