const alumnos = ["Thomas","Daniel", "Jonatha Nuñez", "Carlos David"]
const clases =["Clase 1","Clase 2","Clase 3"]

const AddAlumno=(nombre)=>{
    
    alumnos.push(nombre)
    //console.log(`Agregó al alumno de nombre ${nombre} `);
}

export {alumnos,clases,AddAlumno}