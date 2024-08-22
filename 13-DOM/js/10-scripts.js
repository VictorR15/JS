// const enlace = document.createElement("a");

// //AGREGANDOLE EL TEXTO
// enlace.textContent = "Nuevo Enlace";

// //AÑADIENDO HREF
// enlace.href = "/nuevo-enlace";

// //AÑADIENDO TARGET_BLANCK
// enlace.target = "_black";

// console.log(enlace);

// // enlace.onclick = miFuncion;

// //SELECCIONAR LA NAVEGACION
// const navegacion = document.querySelector(".navegacion");
// // navegacion.appendChild(enlace);
// navegacion.insertBefore(enlace, navegacion.children[1]);

// function miFuncion() {
//   alert("Diste Click");
// }

//CREAR UN CARD DESDE EL DOM

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 pro persona";
parrafo3.classList.add("precio");

//CREAMOS EL DIV CON LA CLASE DE INFO

const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//CREAMOS LA IMAGEN
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

//CREAMOS EL CARD (EL DIV PADRE)
const card = document.createElement("div");
card.classList.add("card");

//ASIGANAR LA IMAGEN
card.appendChild(imagen);

//ASIGNAR INFO
card.appendChild(info);

//INSERTAR EN EL HTML
const contenedor = document.querySelector(".hacer .contenedor-cards");
// contenedor.appendChild(card);
contenedor.insertBefore(card, contenedor.childNodes[0]);
