import inquirer from "inquirer";
import fs from "fs";

const tareaPorHacer = JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));
//console.log("Tareas por hacer: " + JSON.stringify(tareaPorHacer));
const tareas = await inquirer.prompt([
    {
        name: "accion",
        type: "list",
        message: "Que deseas hacer?",
        choices: ["Agregar", "Eliminar", "Ver", "Actualizar"],
    },
]);
if (tareas.accion === "Agregar") {
    const { nombreTarea, hacerTarea } = await inquirer.prompt([
        {
            name: "nombreTarea",
            message: "¿cual es la tarea?"
        },
        {
            name: "hacerTarea",
            message: "¿En que consiste la tarea?"
        }
])

 const tarea = {
    nombre: nombreTarea,
    describir: hacerTarea,
  };

tareaPorHacer.push(tarea);
fs.writeFileSync("./tareas.json", JSON.stringify(tareaPorHacer));
console.log(tarea);

} else if (tareas.accion === "Eliminar"){
const { nombreTarea } = await inquirer.prompt([
{
    name: "nombreTarea",
    message: "¿que tarea quieres eliminar?"
},
]);
const indexTarea = tareaPorHacer.findIndex((tarea) => tarea.nombre === nombreTarea);
        if (indexTarea !== -1) {
            tareaPorHacer.splice(indexTarea, 1);
            fs.writeFileSync("./tareas.json", JSON.stringify(tareaPorHacer));
            console.log("Tarea eliminada:", nombreTarea);
}
} else if (tareas.accion === "Ver"){
    tareaPorHacer.forEach((Element) => {
        console.log(Element);
    })
//}

//ESTA SI LA NECESITE COPIAR DE VOS
//NO LOGRE RAZONARLA SOLO
// E INCLUSO DE ESA MANERA ME LA COMPLICO BASTANTE
// Y NO LOGRE HACERLO

//¿DONDE ESTA EL ERROR?
//tambien note que no reconoce la palabra si esta en mayuscula o minuscula
//ejemplo
// dibujar y DIBUJAR no son la misma palabra si quiero eliminar

//else if (tareas.accion === "Actualizar"){
  //  const { nombre } = await inquirer.prompt([
    //    {
      //      name: "nombreTarea",
        //    message: "¿que tarea quieres actualizar?",
        //}
    //])
    //const tarea = tareaPorHacer.find((item) => item.nombreTarea === nombreTarea);
    //if (!tareaActualizada) {
      //  console.log("Tarea no encontrada")
        //return;
   // }

    //const { nombreTarea } = await inquirer.prompt([
      //  {
       //     name:"nombreTarea",
         //   message: `¿cual es la nueva tarea? (actual: ${tareaPorHacer.tarea})`,
        //}       
    //])

//tareaPorHacer.tarea = nombre,
//fs.writeFileSync("./tareas.json", JSON.stringify(tareaPorHacer));
//console.log("tarea actualizada",tarea);
}
