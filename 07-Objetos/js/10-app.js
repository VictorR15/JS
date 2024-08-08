//UNIR DOS OBJETOS
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

console.log(resultado);

//SPREAD OPERATOR O REST OPERATOR
const resultado2 = { ...producto, ...medidas };

console.log(producto);
console.log(producto2);