//VARIABLES
const carrito = document.querySelector("#carrito");
//DONDE SE GUARDAN LOS CURSOS DEL CARRITO
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
//SE VACIA EL CARRITO PARA QUE NO APARESCAN OBJETOS REPETIDOS(SE REFRESCA EL CARRITO)
const vaciarCarrtioBtn = document.querySelector("#vaciar-carrito");
//LA LISTA DE DONDE ESTAN TODOS LOS CURSOS
const listaCurso = document.querySelector("#lista-cursos");
//LISTA DE LOS CURSOS EN EL CARRITO
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  //CUANDO AGREGAS UN CURSO PRECIONANDO "Agregar al carrito"
  listaCurso.addEventListener("click", agregarCurso);

  //ELIMINAR CURSOS DEL CARRITO
  carrito.addEventListener("click", eliminarCurso);

  //VACIAR EL CARRITO
  vaciarCarrtioBtn.addEventListener("click", () => {
    articulosCarrito = []; //RESETEAMOS EL CARRITO
    limpiarHTML(); //ELIMINAMOS TODO EL CARRITO
  });
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

//ELIMINA UN CARRITO DEL CURSO
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    //ELIMINA DEL ARREGLO
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    carritoHTML(); //LIMPIAMOS EL CARRITO (REFRESCAMOS EL CARRITO PARA QUE LOS CURSOS ELIMNADOS YA NO APARESCAN )
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

  //REVISAR SI UN ELEMENTO YA EXISTE EN EL CARRITO
  const extiste = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (extiste) {
    //ACTUALIZAMOS LA CANTIDAD
    const curso = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; //RETORNA LOS OBJETOS ACTUALIZADOS
      } else {
        return curso; //RETORNA LOS OBJETOS QUE SON LOS DUPLICADOS
      }
    });
    articulosCarrito = [...curso];
  } else {
    //AGREGAR ELEMETNOS AL ARREGLO DE CARRITO
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
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
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${imagen}" width="100">
      </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
          <a href = "#" class = "borrar-curso" data-id = "${id}"> X </a>
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
