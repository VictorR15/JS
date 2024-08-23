const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validadFormulario);

function validadFormulario(e) {
  e.preventDafault();

  console.log("Consultar una api");
  console.log(e.target.action);
}
