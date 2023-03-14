let valorFijo = 0
let tipoInmueble = 0
let M2 = 0
let alarma = false
let factorAlarma = 1

let mensajeCotizador = "¿Qué tipo de vivienda deseas cotizar? \n" +
                       "1) Vivienda particular \n" +
                       "2) Local Comercial \n" +
                       "3) Oficinas / Consultorios médicos \n" +
                       " \n" +
                       "Ingresa el nro. de tu interés."

let estoyCotizando = true
while(estoyCotizando) {
    iniciarCotizacion()
    estoyCotizando = confirm("¿Deseas cotizar otro inmueble?")
}

function iniciarCotizacion() {
    tipoInmueble = parseInt(prompt(mensajeCotizador))
    
    if (tipoInmueble !== 1 && tipoInmueble !== 2 && tipoInmueble !== 3) {
        alert("⛔️ Error en el dato ingresado.")
        //se interrumpe la cotización
    } else {
        //Preguntamos si tiene alarma, o no
        alarma = confirm("¿El inmueble tiene alarma?")
        if (alarma === false) {
            factorAlarma = 1.08
        }

        M2 = parseInt(prompt("Ingresa los Metros 2 de la vivienda:"))
        if (M2 !== NaN && M2 > 20 && M2 <= 500) {
            // Si llegamos acá, todos los datos ingresados están OK    
            let cotizacion = 0
            switch(tipoInmueble) {
                case 1: //casa 
                    valorFijo = 33.90
                    cotizacion = M2 * valorFijo * factorAlarma
                    break
                case 2: //Local comercial
                    valorFijo = 41.20
                    cotizacion = M2 * valorFijo * factorAlarma
                    break
                case 3:// empresa o consultorio
                    valorFijo = 46.87
                    cotizacion = M2 * valorFijo * factorAlarma
                    break
                default:
                    console.error("Ingresa un dato válido, por favor.")
                    return 
            }
            alert("El costo mensual de la póliza es de $ " + cotizacion.toFixed(2))
        } else {
            console.error("Ingresa un dato válido, por favor.")
        }
    }
}