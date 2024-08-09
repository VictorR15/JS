const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//REGRESA EL NOMBRE DE LOS ATRIBUTOS
console.log(Object.keys(producto));

//REGRESA EL VALOR DE LOS ATRIBUTOS
console.log(Object.values(producto));

//REGRESA TODO
console.log(Object.entries(producto));
