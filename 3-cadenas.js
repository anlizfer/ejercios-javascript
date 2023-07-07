
//LENGTH => me muestra cuantos caracteres tiene la cadena
let password="ANGE";


if(password.length<=5){
    console.log("Tienes que escribir una contraseña más larga")    
}else{
    console.log("Muy bien, la longitud de la contraseña es la adecuada")    
}

//REPLACE => Reemplazar fracciones de la cadena o la cadena total

let direccion="angel.lizcano.sie@gmail.com@@@@";
let direccionModificada=direccion.replace("@", '*');
console.log(direccionModificada);

//ejemplo: el código fue enviado a ***************.sie@gmail.com


//ChartAt
let apellidos="Lizcano";
let apellidoExtract=apellidos.charAt(0);
//console.log(apellidoExtract);
for(let i=0;i<apellidos.length;i++){
    console.log(apellidos.charAt(i))
}

//Substring
let CorreoElectronico="angel.lizcano.sie@gmail.com";
let correoModificado=CorreoElectronico.substring(6,CorreoElectronico.length);
console.log(correoModificado)

//split
let facturas="fact:001@fact:002@fact:0083@fact:45404";
let arraFacturas=facturas.split("@")
console.log(arraFacturas)
arraFacturas.forEach(element => {
    let arraFact=element.split(":")
    console.log(arraFact[1])
});

let numFacturas="001|Thomas Cruz|125.000|19%|produ1:1500@linea@produ2:3500@linea@produ3:5500";
let arraNumFacts=numFacturas.split("|");

console.log("Factura Número: "+arraNumFacts[0])
console.log("Cliente:  "+arraNumFacts[1])
console.log("Total:  "+arraNumFacts[2])
console.log("IVA:  "+arraNumFacts[3])

let arraLineaProducto=arraNumFacts[4].split("@linea@");

let sumaLineas=0;
arraLineaProducto.forEach(element => {
    let arraLinea=element.split(":")
    sumaLineas+=parseInt(arraLinea[1]);    
});

console.log(sumaLineas)


let PreciosProducto="125|thomas|456|thomas|358";
let arraPreciosProd=PreciosProducto.split("|thomas|");
console.log(arraPreciosProd)



//ToLowerCase && toUpperCase

let nombreCompleto="Angel fernando LIZCANO NoVOa";
console.log(nombreCompleto.toLowerCase())//lo muestra en minúscula 
console.log(nombreCompleto.toUpperCase())//lo muestra en Mayúscula

let banco="BANCO OccidenTE";

if(banco.toLowerCase()=="banco occidente"){
    console.log("Si, este es banco occidente");
}

//TRIM - Eliminar espacios innecesarios

let cadenaTrim=" Angel ";
console.log(cadenaTrim.trim())

if(cadenaTrim.trim()=="Angel"){
    console.log("Bievenido Angel");
}

//Slice() => Extrae una porción de la cadena.

let cadenaSlice="angel.lizcano@gmail.com";
let cadenaModificadaSlice=cadenaSlice.slice(-4);
if(cadenaModificadaSlice==".com"){
    console.log("No se aceptan correos con dominios .com");
}

//TEMPLATE STRING

let numFact="0005";
let clientFact="Oscar Uribe";
let mensajeFactura="El cliente: "+clientFact+" con factura Número: "+numFact+" Ganó una rifa de $1.000.000 USD ";
let mensajeTemplFactura=`El cliente: ${clientFact} con 
                         Factura Número: ${numFact} 
                         Ganó una rifa de $1.000.000 USD`;
console.log(mensajeTemplFactura);
//alt + 123 {   => Alt+124 }



//SEARCH => INCLUDE
let text = "Oscar,Thomas,Angel,Carlos,Leonardo,Daniel";
if(text.toLowerCase().trim().slice(-5).includes("daniel")){
    console.log("Si, Daniel se encuentra");
}