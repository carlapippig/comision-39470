//2015 (ES6) = CLASES JAVASCRIPT - SYNTACTIC SUGAR
class Producto {
    constructor(id, nombre, importe, stock) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.stock = stock
    }

    importeConIVA() {
        return this.importe * IVA
    }

    obtenerNombre() {
        return this.nombre.toUpperCase()
    }
}