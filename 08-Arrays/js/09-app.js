const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 dfas", precio: 100 },
  { nombre: "Monitor 27 dfasdfasdf", precio: 5100 },
  { nombre: "Monitor 27 df", precio: 53200 },
  { nombre: "Monitor 27 dfs", precio: 5200 },
  { nombre: "Monitor 27 fdasfsadfsadfsa", precio: 503330 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
