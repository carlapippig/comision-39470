const IVA = 1.15 //17%

//EVOLUCIÓN DE OBJETOS EN JS

//1999 - 2000 = OBJETO LITERAL
// const Operador1 = {
//     nombre: 'Julian',
//     apellido: 'Conti',
//     cargo: 'Servicio Técnico',
//     ingreso: '2005-08-30' //formato ISO
// }

// const Operador2 = {
//     nombre: 'Nicolas',
//     apellido: 'Moon',
//     edad: 26,
//     cargo: 'Team Manager',
//     enSucursal: true,
//     ingreso: '1996-07-14' //formato ISO
// }

//2009 (ES5) = FUNCIONES CONSTRUCTORAS ???
//PRODUCTOS

// function Producto(id, nombre, importe, stock) {
//     this.id = id
//     this.nombre = nombre 
//     this.importe = importe 
//     this.stock = stock

//     this.importeConIVA = function() {
//         return this.importe * IVA
//     }

//     this.obtenerNombre = function() {
//         return this.nombre.toUpperCase()
//     }
// }

const producto1 = new Producto(123, 'NoteBOOk LeNOVo', 150_000, 25)
const producto2 = new Producto(456, 'Macbook Air', 760_000, 32)

//  DOMINEN OBJETOS JS
//  propiedades estáticas
//  métodos estáticos
//  getter y setter 
//  _ "underscore" antepuesto en el nombre de cada propiedad
