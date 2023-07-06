let contador=0
//contador=contador+1; // => contador+=1; contador++;
//contador+=1;
//contador++;
//console.log(contador)

for(let i=0;i<10;i++){
    contador=contador+1;
    console.log(contador)
}

//ACUMULADORES

let arraPrecios=[1500,2500,3500,4500,5800]

let acumuladorSuma=0;
arraPrecios.forEach(element => {
    //acumuladorSuma=acumuladorSuma+element; => acumuladorSuma+=element
    if(element==3500){
        console.log("Bacano llegué a 3500");
    }
    acumuladorSuma+=element;
});
console.log(acumuladorSuma);

let contador2=0;

if(1==1){
    contador2++;//contador2+=1; contador2=contador2+1;
}

if(2==2){
    contador2++;
}

let moneda=15;
if(moneda==15){
    contador2+=15;
}
console.log("Tienes "+contador2+" monedas");

let enemigo=true;
if(enemigo==true){
    contador2-=10;
}
console.log("Ahora Tienes "+contador2+" monedas");