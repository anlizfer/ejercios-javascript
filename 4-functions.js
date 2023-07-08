function GetName(){    
    return 'Hola mundo';
}

const mensaje=GetName();
console.log(mensaje)

//ARROW FUNCTION

function suma(a,b){
    return a+b;
}

const resultadoSuma=suma(1,3);
console.log(resultadoSuma)


const sum =(a,b)=> a+b;

const resultSum=sum(1,5);
console.log(resultSum)


//MULTIPLICACIÓN
//FAT ARROW FUNCTIONS
//Buena practica: Separación de Responsabilidad
const FuncionMultiplicar = (valor1,valor2)=>{
    const resultMult=valor1*valor2;        
    return resultMult;
}


console.log(resultMult)
