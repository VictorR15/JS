const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

let total = 0;

//CON UN FOREACH
carrito.forEach((producto) => (total += producto.precio));
console.log(total);

//CON UN REDUCE
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

//(VARIABLE EN EL QUE SE ACUMULA LA SUMA, OBJETO) => VARIABLE + OBJETO.VALOR A SUMAR, VALOR EN EL QUE SE INICIA A SUMAR
