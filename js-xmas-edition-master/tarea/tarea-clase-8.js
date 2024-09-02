/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

TIP: Las edades no pueden tener decimales.
*/

const $botonConfirmarPaso1 = document.querySelector(
    "#confirmar-nro-integrantes"
  );
  const $cantidadIntegrantes = document.querySelector("#tamanio-grupo-familiar");
  const $botonCalcularEstadisticas = document.querySelector(
    "#calcular-estadisticas"
  );
  
  const $botonAgregarSalarios = document.querySelector("#agregar-salarios");
  
  $botonAgregarSalarios.onclick = function (event) {
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
    borrarSalariosIntegrantesAnteriores();
    agregarSalarios(cantidadIntegrantes);
    event.preventDefault();
  };
  
  const $botonReiniciar = document.querySelector("#reiniciar");
  $botonReiniciar.onclick = reiniciar();
  
  $botonConfirmarPaso1.onclick = function (event) {
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
    borrarIntegrantesAnteriores();
    if (Number.isInteger(cantidadIntegrantes)===true){
      if (cantidadIntegrantes <= 0) {
        alert("Debe ingresar un valor mayor a 0");
        reiniciar();
      } else {
        crearIntegrante(cantidadIntegrantes);
        avanzarAPaso2();
        mostrarBotonAgregarSalario();
      }}
    else {
      alert ("El numero no puede contener decimales");
    }
    event.preventDefault();
  };
  
  $botonCalcularEstadisticas.onclick = function (event) {
    calcularYMostrarEdades();
    calcularYMostrarSalarios();
    ocultarBotonCalculo();
    ocultarBotonAgregarSalario();
    event.preventDefault();
  };
  
  function calcularYMostrarSalarios(){
    const listaSalarios = obtenerSalarios();
    const $resultadosSalarios = document.querySelector("#resultados-salarios");
    const $mayorSalario=document.querySelector("#label-mayor-salario");
    const $menorSalario=document.querySelector("#label-menor-salario");
    const $promedioSalarios=document.querySelector("#label-promedio-salarios");
    if (listaSalarios.length>0){
      const mayorSalario = calcularMayor(listaSalarios);
      const menorSalario = calcularMenor(listaSalarios);
      const promedioSalarios = calcularPromedio(listaSalarios);
      $resultadosSalarios.className="";
      $mayorSalario.textContent=`Mayor salario de la familia: $${mayorSalario}.`
      $menorSalario.textContent=`Menor salario de la familia: $${menorSalario}.`
      $promedioSalarios.textContent=`Salario promedio de la familia: $${promedioSalarios}.`
    }
  }
  
  function calcularYMostrarEdades(){
    const listaEdades = obtenerEdades();
    const mayorEdad = calcularMayor(listaEdades);
    const menorEdad = calcularMenor(listaEdades);
    const promedioEdades = calcularPromedio(listaEdades);
    const $resultadosEdades = document.querySelector("#resultados-edades");
    const $mayorEdad=document.querySelector("#label-mayor-edad");
    const $menorEdad=document.querySelector("#label-menor-edad");
    const $promedioEdades=document.querySelector("#label-promedio-edades");
    $resultadosEdades.className="";
    $mayorEdad.textContent=`Edad integrante de mayor edad: ${mayorEdad} años.`
    $menorEdad.textContent=`Edad integrante de menor edad: ${menorEdad} años.`
    $promedioEdades.textContent=`Edad promedio de la familia: ${promedioEdades} años.`
  }
  
  function borrarIntegrantesAnteriores() {
    const $integrantesAnteriores = document.querySelectorAll(".integrante");
    for (let i = 0; i < $integrantesAnteriores.length; i++) {
      $integrantesAnteriores[i].remove();
    }
  }
  
  function borrarSalariosIntegrantesAnteriores() {
    const $salariosIntegrantesAnteriores = document.querySelectorAll(
      ".salario-integrante"
    );
    for (let i = 0; i < $salariosIntegrantesAnteriores.length; i++) {
      $salariosIntegrantesAnteriores[i].remove();
    }
  }
  
  function crearIntegrante(cantidadIntegrantes) {
    for (let i = 1; i < cantidadIntegrantes + 1; i++) {
      const $divIntegrante = document.createElement("div");
      $divIntegrante.className = "integrante";
      const $labelEdadIntegrante = document.createElement("label");
      $labelEdadIntegrante.textContent = `Edad integrante # ${i}: `;
      $labelEdadIntegrante.className='label-integrante'
      const $inputEdadIntegrante = document.createElement("input");
      $inputEdadIntegrante.type = "number";
      $inputEdadIntegrante.className="edad-integrante"
  
      $divIntegrante.appendChild($labelEdadIntegrante);
      $divIntegrante.appendChild($inputEdadIntegrante);
  
      const $divIntegrantes = document.querySelector("#integrantes");
      $divIntegrantes.appendChild($divIntegrante);
    }
  }
  
  function agregarSalarios(cantidadIntegrantes) {
    for (let i = 1; i < cantidadIntegrantes + 1; i++) {
      const cantidadIntegrantes = Number($cantidadIntegrantes.value);
      const $divSalarioIntegrante = document.createElement("div");
      $divSalarioIntegrante.className = "salario-integrante";
      const $labelSalarioIntegrante = document.createElement("label");
      $labelSalarioIntegrante.textContent = `Salario integrante # ${i}`;
      $labelSalarioIntegrante.className='label-salario-integrante';
      const $inputSalarioIntegrante = document.createElement("input");
      $inputSalarioIntegrante.type = "number";
      $inputSalarioIntegrante.className="salario-integrante"
  
      $divSalarioIntegrante.appendChild($labelSalarioIntegrante);
      $divSalarioIntegrante.appendChild($inputSalarioIntegrante);
      const $divSalariosIntegrantes = document.querySelector(
        "#salarios-integrantes"
      );
      $divSalariosIntegrantes.appendChild($divSalarioIntegrante);
    }
  }
  
  function avanzarAPaso2() {
    cambiarConsignaPaso1a2();
    mostrarBotonCalculo();
    ocultarBotonConfirma();
  }
  
  function obtenerEdades() {
    const $edades = document.querySelectorAll(".integrante input");
    const edades = [];
    for (let i = 0; i < $edades.length; i++) {
      edades.push(Number($edades[i].value));
    }
    return edades;
  }
  
  function obtenerSalarios() {
    const $edades = document.querySelectorAll(".salario-integrante input");
    const edades = [];
    for (let i = 0; i < $edades.length; i++) {
      if (Number($edades[i].value) > 0) {
        edades.push(Number($edades[i].value));
      } else {
        continue;
      }
    }
    return edades;
  }
  
  function calcularMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i <= numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
    return mayor;
  }
  
  function calcularMenor(numeros) {
    let menor = numeros[0];
    for (let i = 1; i <= numeros.length; i++) {
      if (numeros[i] < menor) {
        menor = numeros[i];
      }
    }
    return menor;
  }
  
  function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    promedio = suma / numeros.length;
    return promedio;
  }
  
  function reiniciar() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    cambiarConsignaPaso2a1();
  }
  
  function cambiarConsignaPaso2a1() {
    const $consignaPaso = document.querySelector("#consigna-paso");
    $consignaPaso.textContent =
      "Paso 1: Ingrese la cantidad de integrantes en su grupo familiar";
    $labelCantidadIntegrantes = document.querySelector(
      "#label-cantidad-integrantes"
    );
    $labelCantidadIntegrantes.className = "oculto";
  }
  
  function cambiarConsignaPaso1a2() {
    const $consignaPaso = document.querySelector("#consigna-paso");
    $consignaPaso.textContent = "Paso 2: Complete la edad de cada integrante";
    $labelCantidadIntegrantes = document.querySelector(
      "#label-cantidad-integrantes"
    );
    $labelCantidadIntegrantes.className = "";
    $botonCalcularEstadisticas.className = "";
    $cantidadIntegrantes.disabled = true;
  }
  
  function ocultarBotonConfirma() {
    $botonConfirmarPaso1.className = "oculto";
  }
  
  function ocultarBotonCalculo() {
    $botonCalcularEstadisticas.className = "oculto";
  }
  
  function mostrarBotonCalculo() {
    $botonCalcularEstadisticas.className = "";
  }
  
  function ocultarBotonAgregarSalario() {
    document.querySelector("#agregar-salarios").className = "oculto";
  }
  
  function mostrarBotonAgregarSalario() {
    document.querySelector("#agregar-salarios").className = "";
  }
  
  const cantidadIntegrantes=document.querySelector('#formulario-integrantes-familia')['input-cantidad-integrantes'].value
  function validarCantIntegrantesMayorACero (cantidadIntegrantes){
    if (cantidadIntegrantes>=0){
      return 'Se debe ingresar un valor mayor a 0'
    }
  }
  
  function validarCantIntegrantesEsEntero(cantidadIntegrantes){
    if (Number.isInteger(cantidadIntegrantes)===false){
      return 'El numero no puede contener decimales'
    }
  }
  
  