//CICLO FOR

inicio = 0

//Ciclo por conteo, usualmente con un principio y un fin predeterminados. Esto permite iterar (repetir) N cantidad de veces una tarea específica.
//desde; hasta; incremento
// debugger

//EJEMPLO FOR ESTÁTICO

// for (let i = 0; i < 21 ; i++) {
//     console.log("Iteración con el ciclo FOR Nro:", i)
// }

//EJEMPLO FOR DINÁMICO

// let total = parseInt(prompt("Ingresa un número:"))

// if (total < 0) {
//     console.warn("Agrega por favor, números positivos!")
// } else {
//     for (let i = 0; i < total ; i++) {
//         console.log("Iteración con el ciclo FOR Nro:", i)
//     }
// }

//SPOILER ALERT -- ARRAYS
const paises = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'México', 'Paraguay', 'Perú', 'Uruguay']
//                  0            1          2         3         4         5          6          7        8

//Break = interrumpir la iteración
// for (let i = 0; i < paises.length; i++) {
  
//     console.log(paises[i])
//     if (paises[i] === 'Paraguay') {
//         break
//     }  
// }

//Continue = saltear una iteración, en base a una condición

// for (let i = 0; i < paises.length; i++) {
//     if (paises[i] === 'Brasil') {
//         continue
//     }
//     console.log(paises[i])
// }

//CICLO WHILE
//Estructura de bucle la cual se ejecuta 0 o más veces

// let iterar = true

// while(iterar === true) {
//     console.log("Imprimí este mensaje en la consola.")

//     iterar = confirm("¿Desea seguir el bucle?")
// }

let login = true

// while (login === true) {
//     usuario = prompt("Ingresa tu nombre:")
//     passwd = prompt("Ingresa tu contraseña:")

//     if (usuario === "Coder" && passwd === "house") {
//         alert("✅ Bienvenid@ a la plataforma!")
//         login = false
//         //break 
//     } else {
//         alert("⛔️ No se reconoce usuario y/o contraseña.")
//     }
// }

//do - while, se ejecuta al menos una vez

// let identificarme = false
// let intentos = 1
// do {
//     let usuario = prompt("Ingresa tu nombre de usuario:")
//         if (usuario === null || usuario.trim() === "") {
//             alert("⛔️ El usuario no puede identificarse")
//             identificarme = false
//         } else {
//             passwd = prompt("Ingresa tu contraseña:")
//             if (validacion) {

//             }
//         } 

// }while(identificarme === true)


//console.log("Bienvenid@s a la tienda de ROPA")

let consulta = confirm("¿Te puedo ayudar con lo que buscas?")

if (consulta === true) {
    //quiero una camisa
    //blanco - naranja - verde - azul
    let color = prompt("elige el color de la camisa:").toLowerCase()
    switch(color) {
        case "blanco":
            console.log("Sí, tenemos el color ", color)
            break
        case "naranja":
            console.log("Sí, tenemos el color ", color)
            break
        case "verde":
            console.log("Sí, tenemos el color ", color)
            break
        case "azul":
            console.log("Sí, tenemos el color ", color)
            break
        default:
            console.warn("No tenemos el color", color)
    }
}
