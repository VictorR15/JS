const numero1 = 20;
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20.2;

//CONVERTIR LOS NUMEROS A INT FLOAT
console.log(numero1);
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));

//REVISAR SI UN NUMERO ES ENTERO O NO

console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero1));
