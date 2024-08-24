//VARIABLES
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrtioBtn = document.querySelector("#vaciar-carrito");
const listaCurso = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  //CUANDO AGREGAS UN CURSO PRECIONANDO "Agregar al carrito"
  listaCurso.addEventListener("click", agregarCurso);
}

//FUNCIONES
//CUANDO EL USUARIO TOCA EL BOTON "Agregar al carrito"
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

//LEE EL CONTENIDO DEL HTML AL QUE LE DIMOS CLICK Y EXTRAER LA INFORMACION DEL CURSO
function leerDatosCurso(curso) {
  //CREAR UN OBJEOT CON EL CONTENIDO DEL CURSO QUE SE SELECCIONO
  const infoCurso = {
    //NO UTILIZAMOS DOCUMENT YA QUE LA UNICA INFO DEL HTML QUE NECESITAMOS ESTA EN EL cursoSeleccionado
    //.src para extraer la direcciona de la imagen
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //AGREGAR ELEMETNOS AL ARREGLO DE CARRITO
  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log(articulosCarrito);

  carritoHTML();
}

//MUESTRA EL CARRITO DE COMPRAS EN EL HTML
function carritoHTML() {
  //LIMPIAR EL HTML
  limpiarHTML();

  //RECORRE EL CARRITO Y GENERA EL HTML
  articulosCarrito.forEach((curso) => {
    //CREAMO CODIGO HTML
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            ${curso.titulo}
        </td>
        `;

    //AGREGAMOS EL HTML DEL CARRITO AL tbody
    contenedorCarrito.appendChild(row);
  });
}

//ELIMINA LOS CURSOS DEL tbody
function limpiarHTML() {
  //innerHTML sirve para acceder al HTML
  //LO QUE HACEMOS ES LIMPIAR EL HTML CADA QUE SE AGREGA UN CURSO
  //FORMA LENTA
  //   contenedorCarrito.innerHTML = "";
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
