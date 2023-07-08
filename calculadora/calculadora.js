//resultado

let chainNumber="";
let arraNumbers=[];
//FUNCIÓN para el resultado
const ResultFunction=()=>{
    if(chainNumber.trim()==""){
        document.getElementById("resultado").innerHTML="0";
    }else{
        document.getElementById("resultado").innerHTML=chainNumber;
    }
    
}

//FUNCTION: Seleccionar los números
const ConcatNumber=(numberChar)=>{
    chainNumber+=numberChar;    
    ResultFunction();
}

//FUNCTION: Suma
const SumNumbers=()=>{
    AcumValue();
    chainNumber="";
    ResultFunction();
}

//FUNCTION: Resta
const ResultEqual=()=>{
    AcumValue();
    let SumNumb=0;
    
    arraNumbers.forEach(element => {
        SumNumb+=element;
    });
    chainNumber=`${SumNumb}`;
    ResultFunction();
}

//FUNCTION: Acumular valores
const AcumValue=()=>{
    arraNumbers.push(parseFloat(chainNumber));
}