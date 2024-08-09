const carrito = [];

//DEFINIR UN PRODUCTO

const producto = {
  nombre: "Monitor",
  precio: 200,
};

const producto2 = {
  nombre: "Celular",
  precio: 500,
};

//.push AGREGAR AL FINAL DE UN ARREGLO

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 20,
};

carrito.unshift(producto3);

console.table(carrito);
