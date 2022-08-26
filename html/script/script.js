"use strict"
let producto = document.getElementById("productosEnStock");
let stock = [1023,1000,560,487,300,150];
let precioUnidad = [670,209,175,324,1750,535];
let total = 0;
let btnComprar = document.getElementById("botonComprar");
btnComprar.addEventListener("click", comprarProducto)

function comprarProducto(){
 for (let i = 0; i < stock.length; i++) {
 total= parseInt(producto[i]) * parseInt(precioUnidad[i]);
     console.log(total);
 } 
}