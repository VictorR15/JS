iniciarApp();

function iniciarApp() {
  console.log("Iniciando App...");

  seguandaFuncion();
}

function seguandaFuncion() {
  console.log("Desde la segunda funcion");

  usuarioAutenticado("Victor");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario... espere...");
  console.log(`Usuario autenticado exitosamente: ${usuario}`);
}
