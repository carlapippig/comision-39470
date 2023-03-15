function login() {
    let usuario = prompt("Ingresa tu nombre de usuario:")
        if (usuario.trim().length > 4) {
            usuarioLogueado = usuario.trim()
            alert("✅ Bienvenid@ " + usuarioLogueado)
        } else {
            alert("⛔️ Error en el dato ingresado.")
        }
}

//login()

function calcularIVA(importe) {
    if (parseFloat(importe)) {
        let resultado = importe * IVA
        console.log("El importe + IVA es de", resultado)
    }
}

function calcularPrecioFinal() {
    let precioDelProducto = prompt("Ingresa el importe del producto:")
        calcularIVA(precioDelProducto)
}
//calcularPrecioFinal()

function sumar(numA, numB) {
    let resultado = numA + numB
    console.log("Resultado de la suma:", resultado)
}

function concatenar(texto1, texto2) {
    if (texto1.trim() !== "" && texto2.trim() !== "") {
        textoConcatenado = texto1.trim() + texto2.trim()
        return textoConcatenado
    }
}

function independiente() {
    let username = "CameronHowe"
        console.log("La usuario es:", username)
}

console.log("La variable username vale:", username)
independiente()
console.log("Ahora, la variable username vale:", username)


const miFuncion = function(a, b) {
    console.log("Esta es una función anónima")
    return a + b 
}

const miArrowFunction = (a, b)=> {
    console.log("Esta es una función anónima")
    return a + b 
}