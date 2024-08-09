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

const producto3 = {
  nombre: "Teclado",
  precio: 20,
};

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);
