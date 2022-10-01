const Nombre = "Igor"
const Apellido = "Gonzalez"
let Username = "@"+"Igonzalez"
let Edad = "35"
let Email = "igosalez@platzi.com"
let mayor = true
let savemony = 1000
let deudas = 200 
const nickname = "go"

const Mellamo =  Nombre + " " + Apellido
let trueMoney = savemony - deudas

console.log(Mellamo)
console.log(trueMoney)

function saludo (Nombre, Apellido, nickname){
    return (console.log("Mi nombre es " + Nombre, Apellido + " pero prefiero que me digas " + nickname + "."))
}

function Messege(Nombre, Apellido, Username){
    const nombreCompleto = CompleteName(Nombre, Apellido);
    return (console.log("Mi nombre es" + Nombre + " " + Apellido + "pero prefiero que me llames por mi nombre de Usuario" + Username + "Sino, soy du daddy" + nombreCompleto));} 

console.log(saludo)

switch (hola){
    case 1:
        console.log("hola");
        break;
    case 2:
        console.log("Huli");
        break;
    case 3:
        console.log("Ulli");
        break;     
}
function hola(i){if (i == "A"){
    console.log("bien")
}if (i == "B"){
    console.log("mal")
}if (i == "C"){
    console.log("chevere")
}}

function lis(o){
    console.log(o[0])
}



const arrayDeSuscripcionII ={
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  };

  function sustype(lista){
    if (arrayDeSuscripcionII[lista]){
        console.log(arrayDeSuscripcionII[lista]);
        return;
    }
    console.warm("Eso no existe")
}