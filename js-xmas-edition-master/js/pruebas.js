function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El campo nombre debe tener al menos un caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'El campo nombre debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}
function probarValidarCiudad(){
    console.assert(
        validarCiudad('')==='Para poder enviar el formulario es necesario seleccionar una ciudad',
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