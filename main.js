alert ("bienvenidos a COMPUMERCADO");
alert ("listo para comprar?");

let productos = [
    {nombre : "computadora portatil", precio: 3500},
    {nombre : "computadora de escritorio", precio: 1500},
    {nombre : "silla gamer" ,precio: 800},
    {nombre : "silla comun",precio: 400},
    {nombre : "teclado y mouse inalambricos" ,precio: 1000},
    {nombre : "teclado y mouse con cable",precio: 600},
    {nombre : "auriculares inalambricos",precio: 800},
    {nombre : "auriculares con cable",precio: 400}

];

let ingreso = prompt("ingrese su busqueda");
const consulta = productos.filter((productos) => productos.nombre.includes(ingreso));
console.log(consulta);