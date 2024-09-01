function validarCiudad(ciudad) {
  if (ciudad === "") {
    return "Para poder enviar el formulario es necesario seleccionar una ciudad";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo === "") {
    return "Tenes que pedir algo si o si!";
  }
  return "";
}

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "El campo nombre debe tener al menos un caracter";
  }
  if (nombre.length > 50) {
    return "El campo nombre debe tener menos de 50 caracteres";
  }
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };
  borrarListaErrores();

  const esExito = manejarErrores(errores) === 0;
  
  if (esExito){
  mostrarTextoExito();
  ocultarFormulario();
  redireccionarAWishlist();
  }

  event.preventDefault();
}

function borrarListaErrores(){
    const $listaErrores=document.querySelectorAll('#errores>li')
    for (let i=0;i<$listaErrores.length;i++){
        $listaErrores[i].remove();
    }
  }

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores=document.querySelector('#errores');
  let cantidadErrores=0;

  keys.forEach(function (key) {
    const error = errores[key];
    if (error) {
      $form[key].className = "error";
      
      const $error=document.createElement('li');
      $error.innerText=error;
      $errores.appendChild($error);

      cantidadErrores++;

    } else {
      $form[key].className = "";
    }
  });
  console.log(cantidadErrores);
  return cantidadErrores;
}

function ocultarFormulario(){
        $form.className="oculto";
}

function mostrarTextoExito(){
    const $exito=document.querySelector('#exito');
        $exito.className="";
}

function redireccionarAWishlist() {
        setTimeout(function() {
        window.location.href = "wishlist.html";
        }, 5000);
  }



const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
