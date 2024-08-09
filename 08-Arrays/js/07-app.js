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

//ELIMINAR ULTIMO ELEMENTO DEL ARREGLO

// carrito.pop();
// console.table(carrito);

//ELIMINAR EL PRIMER ELEMENTO DEL ARREGLO

// carrito.shift();
// console.table(carrito);

//ELIMAR UN CIERTA CANTIDAD DE ELEMENTOS
carrito.splice(3, 1);
console.table(carrito);
