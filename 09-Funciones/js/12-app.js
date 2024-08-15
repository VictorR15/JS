const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 dfas", precio: 100 },
  { nombre: "Monitor 27 dfasdfasdf", precio: 5100 },
  { nombre: "Monitor 27 df", precio: 53200 },
  { nombre: "Monitor 27 dfs", precio: 5200 },
  { nombre: "Monitor 27 fdasfsadfsadfsa", precio: 503330 },
];

//RECORE TODO EL ARRAY Y NO CREA OTRO ARREGLO

carrito.forEach(producto => `${producto.nombre} - Precio: ${producto.precio}`);

//.map CREA UN NUEVO ARREGLO

carrito.map((producto) => {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
