const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    peso: "1 kg",
    medidas: "1m",
    fabricacion: {
      pais: "China",
    },
  },
};

const { nombre, informacion, informacion: {peso, fabricacion: {pais}} } = producto;

console.log(informacion);
console.log(peso);
console.log(pais);
