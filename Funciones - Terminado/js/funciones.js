// funciones simples - funciones con parámetros - funciones con retorno

// function capitalize() {
//     let letraInicial = miNombre.substring(0, 1)
//     let restoPalabra = miNombre.substring(1, miNombre.length)
//     console.log(letraInicial.toUpperCase() + restoPalabra.toLowerCase())
// }

// function capitalize(palabra) {
//     let letraInicial = palabra.substring(0, 1)
//     let restoPalabra = palabra.substring(1, palabra.length)
//     console.log(letraInicial.toUpperCase() + restoPalabra.toLowerCase())
// }

function capitalize(palabra) {
    if (typeof palabra === 'string') {
        let letraInicial = palabra.substring(0, 1)
        let restoPalabra = palabra.substring(1, palabra.length)
        let normalizado = letraInicial.toUpperCase() + restoPalabra.toLowerCase()
            return normalizado
    } else {
        return '⛔️ Error en el valor pasado como parámetro'
    }
}

function saludar(nombre) {
    alert("Hola, " + capitalize(nombre) + ". Bienvenid@!")
}

function calcularPrecioConIVA(importe) {
    if (typeof importe === 'number') {
        let resultado = importe * IVA
            return resultado.toFixed(2)
    } else {
        return '⛔️ Se espera un valor numérico como parámetro.'
    }
}

function calcularImporteFinal() {
    debugger
    let numero = parseFloat(prompt("Ingresa el importe del producto:"))
    if (typeof numero === 'number') {
        let resultado = calcularPrecioConIVA(numero)
        alert("El importe $ " + numero + " con IVA, es de $ " + resultado)
    }
}



function saludarme() {
    let username = "Coderhouse"
    return username
}

console.log("1 - ", username)
console.log("2 - ", saludarme())
console.log("3 - ", username)

