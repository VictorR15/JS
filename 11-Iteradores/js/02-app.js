// for (let i = 0; i < 10; i++) {
//   console.log(`Numero: ${i}`);
//   if (i === 5) {
//     console.log("Fin");
//     break;
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log("Fin");
//     continue;
//   }
//   console.log(`Numero: ${i}`);
// }

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 dfas", precio: 100 },
  { nombre: "Monitor 27 dfasdfasdf", precio: 5100, descuento: true },
  { nombre: "Monitor 27 df", precio: 53200 },
  { nombre: "Monitor 27 dfs", precio: 5200 },
  { nombre: "Monitor 27 fdasfsadfsadfsa", precio: 503330 },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
    continue;
  }
  console.log(carrito[i].nombre);
}
