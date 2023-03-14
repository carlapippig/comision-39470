// let nombre = prompt("Ingresa tu nombre:").trim() // = operador de asignación
//     //nombre = nombre.trim()
// debugger
// if (nombre === "Fer") { // == operador de comparación
//     console.log("Bienvenid@ " + nombre)
// } 

// let respuesta = confirm("¿Desea identificarse?")
// console.log('Valor de la variable:', respuesta)
// if (respuesta === true) {
//     console.log("El usuario pulsó ACEPTAR.")
// } else {
//     console.warn("El usuario no quiere identificase.")
// }

// let numeroA = 1234    //variable tipo NUMBER
// let numeroB = "1234"  //variable tipo STRING
// let resultado = (numeroA === numeroB)

// if (resultado === true) {
//     console.log("Las variables son iguales.")
// } else {
//     console.warn("Las variables son diferentes!")
// }

// let numeroC = 123
// let numeroD = 123.0
// let nuevoResultado = (numeroC == numeroD)

// if (123 > 456) {
//     console.log("Sí, es mayor.")
// } else {
//     console.warn("No, no lo es.")
// }

//AND &&
//OR ||
//NOT ! nombre !== ""
//https://es.wikipedia.org/wiki/Tabla_de_verdad 
let usuario = prompt("Ingresa tu usuario:")
let passwd = prompt("Ingresa tu contraseña:")
let huella = false
//debugger

if ((usuario.trim() === "Fer" && passwd.trim() === "123456") || huella === true) {
    alert("✅ Bienvenid@ " + usuario)
} else {
    console.error("No se reconoce el usuario y/o contraseña.")
}

// if (usuario !== "" && passwd !== "") {

//     if (usuario.trim() === "Fer" && passwd.trim() === "123456") {
//         alert("✅ Bienvenid@ " + usuario)
//     } else {
//         console.error("No se reconoce el usuario y/o contraseña.")
//     }
    
// } else {
//     console.warn("Debe ingresar usuario y contraseña")
// }


/*

String.trim() .toUpperCase() .toLowerCase() .length = devuelve el total de caracteres

nombre.trim() //podar
"Fer"
igual a 
mayor que
menor que
mayor o igual a
distinto de 

*/

// let num1 = parseInt(prompt("Ingresa un número:"))
// let num2 = parseInt(prompt("Ingresa otro número:"))

// console.log('Resultado:', num1 + num2)

// console.log(nombre)
// console.warn(nombre)
// console.error(nombre)

/*

    alert()
    prompt()
    confirm()

    convertir cadenas de texto a valores numéricos
    parseInt()  convierte el string numérico, a un número entero
    parseFloat()  convierte el string numérico, a un número con decimales

*/