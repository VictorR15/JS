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
const { disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
