document.addEventListener("DOMContentLoaded", function () {
  //SELECCIONAMOS LOS COMPONENTES DE LA INTERFAZ
  const inputEmial = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");

  //ASIGNAR EVENTOS
  inputEmial.addEventListener("blur", function (e) {
    console.log(e.target.value);
  });
});
