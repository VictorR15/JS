// for (let i = 0; i < 10; i++) {
//   console.log(`Numero: ${i}`);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`El numero ${i} es par`);
//   } else {
//     console.log(`El numero ${i} no es par`);
//   }
// }

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 dfas", precio: 100 },
  { nombre: "Monitor 27 dfasdfasdf", precio: 5100 },
  { nombre: "Monitor 27 df", precio: 53200 },
  { nombre: "Monitor 27 dfs", precio: 5200 },
  { nombre: "Monitor 27 fdasfsadfsadfsa", precio: 503330 },
];
for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}
