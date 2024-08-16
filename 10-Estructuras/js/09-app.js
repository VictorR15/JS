const autenticado = true;
const puedePagar = true;

console.log(autenticado ? "Puede pagar" : "No puede pagar");

console.log(
  autenticado
    ? puedePagar
      ? "Autenticado pero no puede pagar"
      : "No puede pagar"
    : "No esta autenticado"
);
