const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//ES COMO UN TIPO AND Y REGRESA UN BOOLEAN
const resultado = carrito.every((producto) => producto.precio < 500);
console.log(resultado);
//ES COMO UN TIPO OR Y REGRESA UN BOOLEAN
const resultado2 = carrito.some((producto) => producto.precio < 500);
console.log(resultado2);
