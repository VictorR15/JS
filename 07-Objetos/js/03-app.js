const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//AGREGAR NUEVAS PROPIEDADES AL OBJETO

producto.imagen = "imagen.jpg";

//ELIMNAR PROPIEDADES DEL OBJETO

delete producto.disponible;

console.log(producto);
