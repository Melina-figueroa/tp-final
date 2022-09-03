"use strict"
/*boton para enviar datos de formulario
*/

let botonEnviar = document.getElementById("botonContacto");




function enviarDatos() {
    let inputNombre = document.getElementById("nombre").value;
    let inputEmail = document.getElementById("email").value;
    alert(inputNombre + " " + "Gracias por enviar su consulta, responderemos a la brevedad a " + inputEmail);
}


botonEnviar.addEventListener("click", enviarDatos);

//funcion que envia un alert una vez cargados los datos//
