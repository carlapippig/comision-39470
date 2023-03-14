//recorrerPaises() OK
//agregarPais()    
//buscarPais()
//quitarPais()
//ordenarPaises()

/*
    for(i = 0; i < array.length; i++)

    for(elemento of array)

    array.forEach(elemento) <== winner winner chicken dinner!

*/

// function recorrerPaises() {
//     console.clear()
//     // for (elemento of paises) { //for...of
//     //         console.log(elemento)
//     // }
//     console.table(paises)
// }
// recorrerPaises()

function agregarPais() {
    let nuevoPais = prompt("Ingresa un nuevo país:")
    let resultado = paises.toLowerCase().includes(nuevoPais.trim().toLowerCase())
    if (resultado === false) {
        paises.push(nuevoPais) //> agrega en la última posición
        listarPaisesHTML()
    } else {
        console.warn("No se puede agregar porque el país ya existe en el listado.")
    }
}

function quitarPais() {
    //paises.pop() //quita el último elemento del array
    //paises.shift() //quita el primer elemento del array
    let paisAQuitar = prompt("Ingrese el país a quitar del listado:")
    let indice = paises.indexOf(paisAQuitar) //si no encuentra devuelve -1
    if (indice > -1) {
        listarPaisesHTML()    
    } else {
        console.warn("No se encontró el elemento indicado.")
    }
}

function ordenarPaises() {
    paises.sort().reverse()
    listarPaisesHTML()
}


function listarPaisesHTML() {
    //por ahora no le demos bolilla
    const listado = document.querySelector("ol")
        listado.innerHTML = ""
        for (pais of paises)
            listado.innerHTML += `<li>${pais}</li>`
}
listarPaisesHTML()