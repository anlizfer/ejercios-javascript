class Enemy{
    constructor(EnemyType,EnemyName,EnemyTexture,EnemyEyes,EnemyHands,EnemyLive,Position){
        this.EnemyType=EnemyType;
        this.EnemyName=EnemyName;
        this.EnemyTexture=EnemyTexture;
        this.EnemyEyes=EnemyEyes;
        this.EnemyHands=EnemyHands;
        this.EnemyLive=EnemyLive;
        this.Position=Position;
        

    }

    Walk(){
        //aqui va caminar
        this.Position.y+=1;
    }

    Run(){
        //aqui va a correr        
        this.Position.y+=5;
    }

    Damage(){
        //recibe daños el enemigo
        this.EnemyLive--;
    }
}

export {Enemy}


