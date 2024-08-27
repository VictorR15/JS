document.addEventListener("DOMContentLoaded", function () {
  //SELECCIONAMOS LOS COMPONENTES DE LA INTERFAZ
  const inputEmial = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  //ASIGNAR EVENTOS
  inputEmial.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
    } else {
      console.log("Hay algo");
    }
  }

  function mostrarAlerta(mensaje, referencia) {
    //GENERAR ALERTA EN HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2");

    //INYECTAR EL ERROR AL FORMULARIO
    referencia.appendChild(error);
  }
});
