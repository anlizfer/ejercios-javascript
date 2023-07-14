import {getMaximo} from './funciones.mjs'
//filter => filtros
const arrPrecios=[100,20,30,40,50]

const rest=arrPrecios.filter((valor, indice)=>{
    return (valor<30)
})

//console.log(rest)

const arraPersonas=[
    {
        name:"Angel",
        edad:37,
        telefono:"3211321321",
        hijos:0,
        genero:"M"
    },
    {
        name:"Fabio",
        edad:36,
        telefono:"3211323321",
        hijos:1,
        genero:"M"
    },
    {
        name:"Laura",
        edad:38,
        telefono:"32113333232",
        hijos:2,
        genero:"F"
    }
]

/*const resultPersonas=arraPersonas.filter((item,indice)=>{
    return (item.edad>36 && item.genero=="F")
});*/

const resultPersonas=arraPersonas.filter((item,indice)=>(item.edad>36 && item.genero=="F"));
//console.log(resultPersonas)

//MAP => mapeo

const arraMapPrecios=arrPrecios.map((item)=>{
    return item*10
});
//console.log(arraMapPrecios)


const arraMapPersonas=arraPersonas.map((item)=>{ 
    return `<h1>${item.name=='Angel'?'Federico':item.name}</h1> <div style="background-color:red;"></div>`
});

//console.log(arraMapPersonas)

//reduce 

const resultSumaPrecios=arrPrecios.reduce((sumaPrecio,Item)=>{
    return sumaPrecio+Item
},0);

//console.log(resultSumaPrecios)

const resultSumaEdades=arraPersonas.reduce((sumaEdad,Item)=>{
    return parseFloat(sumaEdad)+parseFloat(Item.edad)
},0);
//console.log(resultSumaEdades)

const resultSumaEdades2=arraPersonas.reduce((sumaEdad,Item)=> parseFloat(sumaEdad)+parseFloat(Item.edad),1000);
//console.log(resultSumaEdades2)


const valorMaximo=arrPrecios.reduce((Valor,Item)=>{
   return Math.max(Valor,Item)
},0);
//console.log(valorMaximo)




const valorMaximo2=arrPrecios.reduce(getMaximo,0);
 console.log(valorMaximo2)