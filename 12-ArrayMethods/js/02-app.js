const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//ENCONTRAR EL INDICE DE UN ARRREGLO
const indece = meses.findIndex(mes => mes === 'Abril');
console.log(indece);

const indece2 = meses.findIndex(mes => mes === 'Diciembre');
console.log(indece2);

const inde3 = carrito.findIndex( producto => producto.nombre === 'Teclado');
console.log(inde3)

