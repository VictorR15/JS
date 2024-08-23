//EVENTO MOUSE

const nav = document.querySelector(".navegacion");

//REGISTRAR UN EVENTO
nav.addEventListener("mouseout", () => {
  console.log("Saliendo de la navegacion");
});

nav.addEventListener("dbclick", () => {
  console.log("Doble click");
});

// mousedown - similar al click
//click
//dbclick - doble click
//mouseup - cuando sueltas el mouse
