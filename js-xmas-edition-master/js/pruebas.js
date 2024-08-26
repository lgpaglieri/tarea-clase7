function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}
function probarValidarCiudad(){
    console.assert(
        validarCiudad('Selecciona...')==='Para poder enviar el formulario es necesario seleccionar una ciudad',
        'Validar ciudad no validó que no se haya seleccionado ninguna opción'
    )
}

function probarValidarDescripcionRegalo (){
    console.assert(
        validarDescripcionRegalo('')==='Tenes que pedir algo si o si!',
        'Validar Descripcion Regalo no validó que el campo de regalo haya quedado vacío'
    )
}

probarValidarNombre();
probarValidarCiudad();