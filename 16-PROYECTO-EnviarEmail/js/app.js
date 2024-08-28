document.addEventListener("DOMContentLoaded", function () {
  const datosUser = {
    email: "",
    asunto: "",
    mensaje: "",
  };

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
      return;
    }
    if (e.target.id === "email" && !validarCorreo(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      return;
    }

    limpiarAlerta(e.target.parentElement);

    //ASIGNAR LOS VALORES
    datosUser[e.target.name] = e.target.value.trim().toLowerCase();

    //COMPROBAR EL EMAIL
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    //GENERAR ALERTA EN HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2");

    //INYECTAR EL ERROR AL FORMULARIO
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    //COMPROBAR SI YA EXISTE UNA ALERTA
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarCorreo(email) {
    //EL regax ES UNA EXPRESION REGULAR
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }
  function comprobarEmail() {
    console.log(Object.values(email).includes(""));
  }
});
