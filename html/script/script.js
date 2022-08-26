"use strict"
// alert("bienvenido");
let productos = ["yerba","leche","fideos","gaseosa","pañales","cerveza"];
let stock = [10,20,5,7,3,15];
let precioUnidad = [670, 209, 175, 324, 1750, 535];
let total = 0;

const botonAgregar = document.getElementById("agregarProducto");
botonAgregar.addEventListener("click", agregarProducto);

let detallesCompra = document.querySelector("detallesCompra");

function agregarProducto(){
   for (i = 0; i < stock.length; i ++){
   let producto = document.querySelector(producto).value;
   producto.push(producto);

   let precio = parseInt(document.querySelector(precioUnidad).value);
   precioUnidad.push(precio);

   let cantidad = parseInt(document.querySelector(stock).value);
   stock.push(cantidad);

   let lista = document.createElement("li");
   lista.innerHTML =" Producto " + productos + " Cantidad " + cantidad + " Precio " + precio;
   detallesCompra.appendChild(lista);

   }
}


const btnComprar = document.getElementById("botonComprar");
btnComprar.addEventListener("click", calcularCompra);

function calcularCompra(){
   for(let i = 0; i < productos.length; i++){

       total = total + parseInt((precioUnidad[i] * stock[i]));
   }
   document.querySelector("div").innerHTML = "Total de su compra" + total; 
}
// function comprarProducto() {
//    let detalleCompra = document.getElementById("inputProducto");
//    let listaDetalle = document.getElementById("listaCompra");
//    let nuevoDetalle = document.createElement("li");
//    nuevoDetalle.innerHTML = detalleCompra.value;
//    listaDetalle.appendChild(nuevoDetalle);
// for (let i = 0; i < stock.length; i++) {
   
 
// }

// }