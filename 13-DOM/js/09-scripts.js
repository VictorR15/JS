//ELIMINAR ELEMENTOS

// const primerEnlace = document.querySelector("a");
// primerEnlace.remove();

//ELIMINAR DESDE EL PADRE

const navegacion = document.querySelector(".navegacion");

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);
