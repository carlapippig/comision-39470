/*
Consigna del desafío: 
    variables
    funciones para estructurar la lógica
    condicionales (if - else - switch)
    uso de un ciclo 

    utilizar PROMPT para que se ingresen datos
    utilizar CONFIRM - ALERT
    ciclo WHILE
    El operador SWITCH

*/
let mensajeCosto = ""
let continuar = true

const mensajeInicial = "Ingresa el código de la prenda a consultar: \n" +
                       "a) Remera rosa \n" +
                       "b) Bermuda Playera \n" +
                       "c) Remera Casual \n" +
                       "d) Pantalón de jean \n" +
                       "e) Camisa Office \n"




function iniciarConsulta() {
    let seleccion = prompt(mensajeInicial).toLowerCase().trim()
    
    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" 
        && seleccion !== "d" && seleccion !== "e" ) {
        alert("⛔️ Debes ingresar un código válido, por favor.")
    } else {
        switch(seleccion) {
            case "a":
                alert("La remera rosa cuesta $ 2700")
                break
            case "b":
                alert("La bermuda playera cuesta $ 1950")
                break
            case "c":
                alert("La Remera casual cuesta $ 2680")
                break
            case "d":
                alert("La Pantalón de jean cuesta $ 8900")
                break
            case "e":
                alert("La Camisa Office cuesta $ 4500")
                break
            default: 
                console.error("Algo se rompió. No debería ver este mensaje.")
        }
    }
}

function preguntarPrecios() {
    while(continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas conocer otro precio?")
    }
}