const producto = '          Monitor de 20 pulgadas              ';

console.log(producto);
console.log(producto.length);

//ELIMINAR DEL INICIO... 
console.log(producto.trimStart());

//ELIMINAR DEL FINAL
console.log(producto.trimEnd());

//ELIMINAR TODO CONCATENANDO METODOS
console.log(producto.trimStart().trimEnd());

//ELIMINAR TODOS LOS ESPACIOS
console.log(producto.trim())