const encabezado = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado);

// console.log(encabezado.innerText); //si en el CSS - visibility: hidden; no lo va a encotrar
// console.log(encabezado.textContent); //si lo va a encotrar
// console.log(encabezado.innerHTML); //se trae el HTML

document.querySelector(".contenido-hero h1").textContent = "Nuevo Heading";

const imagen = document.querySelector(".card img");
imagen.src = 'img/hacer2.jpg';