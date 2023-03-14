function creoID() {
    //Aprovechamos la función random del objeto JS MATH
    return parseInt(Math.random() * 100_000)
}

function listarProductosHTML(array) {
    const tabla = document.querySelector("tbody")
        tabla.innerHTML = ""
        //FOREACH NO RETORNA NINGUN RESULTADO. SOLO ITERA
        array.forEach((producto) => {
            tabla.innerHTML += `<tr>
                                    <td>${producto.id}</td>
                                    <td>${producto.nombre}</td>
                                    <td>$ ${producto.importe.toLocaleString()}</td>
                                <tr>`            
        })
}

function agregarProducto() {
    //objeto literal para dar de alta nuevos productos
    const nuevoProducto = {id: 0, nombre: "", importe: 0, categoria: ""}
        //Tomo el OBJ literal nuevoProducto, lo configuro, y lo agrego al array de productos
        //Pensemos al OBJ literal como una plantilla. Lo configuramos y la copiamos
        nuevoProducto.id = creoID()
        nuevoProducto.nombre = prompt("Ingresa la descripción del producto").toUpperCase()
        nuevoProducto.importe = parseFloat(prompt("Ingresa el importe:"))
        nuevoProducto.categoria = prompt("Ingresa la categoría del producto").toUpperCase()
        productos.push(nuevoProducto)
        listarProductosHTML(productos)
}

listarProductosHTML(productos)

function listarProductos() {
    debugger
    productos.forEach((producto)=> {
        console.log(producto)
    })
}

function buscarProducto() {
    let codigo = prompt("Ingresa el código de producto a buscar:")
    let encontrado = productos.find((producto)=> {
        return producto.id === parseInt(codigo)
    })
    
    if (encontrado === undefined) {
        console.warn("No se encontró producto con ese código.")
    } else {
        console.log(encontrado)
    }
}

function filtrarProductos() {
    let buscoNombre = prompt("Ingresa el nombre del producto a filtrar:").trim().toUpperCase()
    let resultado = productos.filter((producto)=> {
        //return producto.categoria === buscoCategoria
        //return producto.nombre.includes(buscoNombre)
        return producto.nombre.trim().toUpperCase().includes(buscoNombre)
    })
    if (resultado.length > 0) {
        console.table(resultado)
    } else {
        console.warn("No se encontraron coincidencias.")
    }
}

function existeProducto() {
    let codigo = prompt("Ingresa el código de producto a buscar:")
    let existe = productos.some((producto)=> {
        return producto.id === parseInt(codigo)
    })
    
    if (existe === false) {
        alert("⛔️ No se encontró producto con ese código.")
    } else {
        alert("✅ El producto existe en el listado.")
    }
}

function indiceProducto() {
    let codigo = prompt("Ingresa el código de producto a buscar:")
    let indice = productos.findIndex((producto)=> {
        return producto.id === parseInt(codigo)
    })
    
    if (indice === -1) {
        alert("⛔️ No se encontró el producto en el array.")
    } else {
        alert("El producto está en el índice: " + indice)
    }
}

function mapearProductos() {
    //let arrayProductos = productos.map((producto)=> {
    //     return {
    //             nombre: producto.nombre.toUpperCase(),
    //             importe: producto.importe
    //            }
    // })

    let arrayProductos = productos.map((producto)=> {
        return {
                nombre: producto.nombre.toUpperCase(),
                importe: producto.importe,
                incremento7: (producto.importe * 1.07).toFixed(2),
                descuento10: (producto.importe * 0.90).toFixed(2)
               }
    })
    console.table(arrayProductos)
}

carrito.push({id: 2345, nombre: "MACBOOK AIR 13", importe: 249900, unidades: 1})
carrito.push({id: 8901, nombre: "IPAD MINI 7.9", importe: 189900, unidades: 3})
carrito.push({id: 1234, nombre: "NOTEBOOK EXO E17", importe: 129950, unidades: 2})

function calcularTotal() {
    //debugger
    let totalCarrito = carrito.reduce((acumulador, producto)=> acumulador + (producto.importe * producto.unidades), 0)
    console.log("El total del carrito es: ", totalCarrito)
}