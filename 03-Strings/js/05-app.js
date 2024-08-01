const producto = 'Monitor de 20 Pulgadas';

//.replace PARA REEMPLAZAR 

console.log(producto);
console.log(producto.replace('Pulgadas','"'));

//.slice PARA CORTAR
console.log(producto.slice(0,10));
console.log(producto.slice(8));
//console.log(producto.slice(2,1)); ERROR

//ALTERNATIVA DE .slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

//OBTENER EL PRIMER CARACTER
const usuario = "Victor";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
