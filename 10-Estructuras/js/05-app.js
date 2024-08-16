const metodoPago = "Efectivo";

switch (metodoPago) {
  case "Efectivo":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log(
      "Aun no has seleccionado un método de pago o método de pago no soportado"
    );
    break;
}
