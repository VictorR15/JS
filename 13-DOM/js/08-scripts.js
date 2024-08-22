//CON .children RECORES DESDES EL PADRE AL HIJO

const navegacion = document.querySelector("nav");

console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); //LOS ESPACIOS EN BLANCO SON CONSIDERADOS ELEMENTOS
// console.log(navegacion.children); //LOS ESPACIOS EN BLANCO NO SON CONSIDERADOS ELEMENTOS

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector(".card");

// card.children[1].children[1].textContent =
//   "Nuevo heading desde traversing te dom";

// console.log(card.children[1].children[1].textContent);

//CON .parentElement RECORES DESDE EL HIJO AL PADRE

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

// console.log(card);
// console.log(card.nextElementSiblingt);
// console.log(card.nextElementSibling.nextElementSibling);

//REGRESA AL VALOR PREVIO QUE SE LE DIO

// const ultimoCard = document.querySelector(".card:nth-child(4)");
// console.log(ultimoCard.previousElementSibling);
