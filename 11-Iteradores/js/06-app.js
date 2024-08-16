//FOREACH

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

pendientes.forEach((pendiente, index) =>
  console.log(`${index} : ${pendiente}`)
);

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Monitor 27 dfas", precio: 100 },
  { nombre: "Monitor 27 dfasdfasdf", precio: 5100 },
  { nombre: "Monitor 27 df", precio: 53200 },
  { nombre: "Monitor 27 dfs", precio: 5200 },
  { nombre: "Monitor 27 fdasfsadfsadfsa", precio: 503330 },
];

//NO CREA UN ARREGLO NUEVO
const nuevoArreglo = carrito.forEach((producto) => producto.nombre);

//CREA UN ARREGLO NUEVO
const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
