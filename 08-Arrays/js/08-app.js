const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//OBTENER EL VALOR DEL OBJETO Y DARSELO A UNA VARIABLE

// const nombre = producto.nombre;
// console.log(nombre);

//DESTRUCTING
const { nombre, precio } = producto;

console.log(nombre);

//DESTRUCTURING CON ARREGLOS

const numeros = [10, 20, 30, 40, 50,60,70];

const [primero, , tercero, ...elResto] = numeros;

console.log(primero);
console.log(tercero);
console.log(elResto);
