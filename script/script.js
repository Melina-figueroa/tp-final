"use strict"
// alert("Hola")
//arrays globales//
let productos = ["leche", "yerba", "pañales", "azucar", "galletitas", "gaseosa"];
let precio = [150, 760, 3000, 100, 140, 350];
let stock = [10, 8, 5, 3, 11, 6];
let total = [];

//boton comprar, una vez inicializado entra a la funcion agregarProductos//
const botonComprar = document.getElementById("botonComprar");
const crearProductos = document.getElementById("contenedorProductos");

//funcion donde se cargan los productos y su respetivo precio y cantidad//
function agregarProducto() {
    for (let i = 0; i < stock.length; i ++){
        let nuevoItem = document.createElement("div");
        nuevoItem.id = productos[i];
        let nombreProducto = document.createElement("p");
        nombreProducto.innerHTML = productos[i];
        let precioProducto = document.createElement("p");
        precioProducto.innerHTML = precio[i];
        let cantidad =document.createElement("input");
        cantidad.innerHTML = stock[i];
        cantidad.id = stock[i];
           cantidad.type = "number";
           cantidad.max = String(stock[i]);
           cantidad.min = "0";
           nuevoItem.appendChild(nombreProducto);
           nuevoItem.appendChild(precioProducto)
           nuevoItem.appendChild(cantidad);
           crearProductos.appendChild(nuevoItem);
   
        } 

}

//funcion para calcular la comprar//
function comprar(){
    for (let i = 0; i < stock.length; i++) {
      let cantidad = document.getElementById(stock[i]);
      let cantidadSeleccionada = Number(cantidad.value);
      if (cantidadSeleccionada > 0) {
        total +=   precio[i] * cantidadSeleccionada;
        console.log(
          "Compraste ", (cantidadSeleccionada), "unidades de " ,(productos[i]), "precio $", (precio[i]), "SubTotal $ ",(total++));
       
      }
    }
    if (total > 0) {
      console.log("Total de la compra ", (total));
    } else {
      console.log("Seleccione al menos un producto");
    }
  };
  
  //boton para enviar datos de formulario//

  /*let botonEnviar = document.getElementById("botonContacto");
botonEnviar.addEventListener("click", enviarDatos);

//funcion que envia un alert una vez cargados los datos//

function enviarDatos(){
alert("Gracias por enviar su consulta");
}
*/



//eventos que una vez que se cargue la pagina se mostraran los productos y ejecutaran las funciones//
  window.addEventListener("load", agregarProducto);
  window.onload = agregarProducto();
  botonComprar.addEventListener("click", comprar);

