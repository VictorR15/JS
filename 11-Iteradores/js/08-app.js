const automovil = {
  modelo: "Camaro",
  year: 1969,
  motor: 6.0,
};
// for (let pendiente in pendientes) {
//   console.log(pendiente);
// }

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(llave);
  console.log(valor);
}
