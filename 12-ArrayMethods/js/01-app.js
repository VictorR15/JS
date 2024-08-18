const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//COMPROBAR SI UN VALOR EXISTE EN UN ARREGLO

meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log("Existe Enero");
  }
});

//METODO PARA VER SI UN VALOR ESTA EN EL ARRREGLO
//ESTE METODO SOLO REGRESA UN BOOLEAN
const resultado = meses.includes("Enero");
console.log(resultado);

//EN EL ARREGLO DE OBJETOS SE UTILIZA .some
const existe = carrito.some((producto) => {
  return producto.nombre === "Celular";
});
console.log(existe);

//ARREGLO TRADICIONAL CON .some
const existe2 = meses.some((mes) => mes === "Febrero");
console.log(existe2);

//ES COMO UN TIPO IF YA QUE TIENES QUE USAR UN OPERADOR DE COMPARACION PARA VER SI ESTA EN EL ARRAY
