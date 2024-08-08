//HACER QUE UN OBJETO ESTE SEAL
//EL UNICO CAMBIO QUE SE PUEDE HACER ES QUE SE PUEDEN SOLO MODIFICAR LOS OBJETOS
"use strict";

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

Object.seal(producto);

producto.disponible = false;
//   producto.imagen = 'imagen.jpg';
//   delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));
