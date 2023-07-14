
console.log("Proceso Inicio")

const Promesa=new Promise((procesoExitoso,procesoFallido)=>{ 
    
    
     procesoFallido("Proceso fallido, no hay ingredientes");
    
    
    
}).then((mensaje)=>{    
    console.log(mensaje);
}).catch((mensaje)=>{
    console.log(mensaje);
});

console.log("Proceso Fin");

 //funciones anonimas
//funciones anonimas