class Personas{ 

    constructor(nombre,apellidos,edad){
        this.nombrePersona=nombre;
        this.apellidosPersona=apellidos;
        this.edadPersona=edad;       
    }

    GetName(){
        return this.nombrePersona;
    }

    Jump(){
        //pongo la lógica del juego para saltar
        let y=5;
        y+=15;
        return y;
    }

    
}


const persona1=new Personas("Thomas","Cruz",25);
const persona2=new Personas("Oscar","Uribe",37);

//console.log(persona1.edadPersona)
// console.log(persona2.GetName())
// console.log(persona1.Jump());
// console.log(persona1.GetPassword());
console.log(persona1)


