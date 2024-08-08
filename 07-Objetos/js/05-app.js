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

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.fabricacion.pais);
