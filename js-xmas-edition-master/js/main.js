const ciudad=document.formulario.ciudad.value;
function validarCiudad (ciudad){
    if (ciudad==='Selecciona...'){
        return 'Para poder enviar el formulario es necesario seleccionar una ciudad'
    }
    return '';
}

const descripcionRegalo=document.formulario['descripcion-regalo'].value;
function validarDescripcionRegalo (descripcionRegalo){
    if (descripcionRegalo===''){
        return 'Tenes que pedir algo si o si!'
    }
    return '';
}

const nombre=document.formulario.nombre.value;
function validarNombre(nombre){
    if (nombre.length===0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (nombre.length>50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
}