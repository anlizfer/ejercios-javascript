//variables var-let-const -  SCOPE -Alcance
//console.log(Estudiantes);
// Vamos a usar Siempre Let y Const

var Personaje="Batman";
GetCharacters();


function GetCharacters(){
    Personaje="Superman";    
    var personaje2="Flash";//mutables    
    if(1==1){
        let personaje3="Aquaman";//mutables var/let
        personaje3="Pantera Negra";
        personaje3="Ironman";

        const personaje4="Hulk";//inmutable const
       
        
    }
}


//tipos de variables
let edad=37;
let nombre="Hola mundo";
let estado=true;
let peso=98.5;
let personajes={};
let arraPersonajes=[];



const pi=3.141516;
const val1=3;
const val2=5;
let suma=val1+val2;
suma=val1-val2;


if(val1 % 2){// a==1 a==true  a
    console.log("Es par");
}else{
    console.log("Es impar");
}

let Vida=true;
if(Vida){
    console.log("Estoy Vivo");
}
