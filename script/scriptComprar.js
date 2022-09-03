"use strict"
// alert("Hola")



let productos = ["leche", "yerba", "pañales", "azucar", "galletitas", "gaseosa"];
let precio = [150, 760, 3000, 100, 140, 350];
let stock = [10, 12, 14, 16, 18, 20];
let total = 0;



//boton comprar, una vez inicializado entra a la funcion agregarProductos//
const botonComprar = document.getElementById("botonComprar");


//funcion donde se cargan los productos y su respetivo precio y cantidad//
window.onload = (
  function agregarProducto() {
    const crearProductos = document.getElementById("contenedorProductos");

    for (let i = 0; i < stock.length; i++) {
      let nuevoItem = document.createElement("div");
      nuevoItem.id = productos[i];
      let nombreProducto = document.createElement("p");
      nombreProducto.innerHTML = productos[i];
      let precioProducto = document.createElement("p");
      precioProducto.innerHTML = precio[i];
      let cantidad = document.createElement("input");
      cantidad.innerHTML = stock[i];
      cantidad.id = stock[i];
      cantidad.type = "number";
      cantidad.max = (stock[i]);
      cantidad.min = "0";
      nuevoItem.appendChild(nombreProducto);
      nuevoItem.appendChild(precioProducto);
      nuevoItem.appendChild(cantidad);
      crearProductos.appendChild(nuevoItem);

    }
  }
);
//funcion para calcular la comprar//

function comprar() {
  for (let i = 0; i < stock.length; i++) {
    let cantidad = document.getElementById(stock[i]);
    let cantidadSeleccionada = Number(cantidad.value);
    if (cantidadSeleccionada <= stock[i] && cantidadSeleccionada > 0) {
      let subTotal = precio[i] * cantidadSeleccionada;
      console.log(
        "Compraste ", (cantidadSeleccionada), "unidades de ", (productos[i]), "precio $", (precio[i]), "SubTotal $ ", (subTotal));
      total += precio[i] * cantidadSeleccionada;
    } else if (total > 0) {

      console.log("Total de la compra ", (total));

      console.log("stock faltante de", productos[i], "introduzca una cantidad menor a ", stock[i]);



    } else if (total < 0) {

      console.log("Seleccione al menos un producto");
    }
  }
};
botonComprar.addEventListener("click", comprar);






//eventos que una vez que se cargue la pagina se mostraran los productos y ejecutaran las funciones//
//window.addEventListener("load", agregarProducto);

