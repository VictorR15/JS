const reproductor = {
  cancion: "",

  reproducir: (id) => console.log(`Reproducir canción en el id ${id}`),

  pausar: () => console.log(`pausando...`),

  borrar: (id) => console.log(`Borrando canción... ${id}`),

  crearPlaylist: (nombrePlaylist) =>
    console.log(`Se creo una playlist con el nombre de ${nombrePlaylist}`),

  reproducirPlaylist: (nombrePlaylist) =>
    console.log(`La playlist ${nombrePlaylist} se esta reproduciendo`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Hola");
reproductor.reproducirPlaylist("Hola");

reproductor.nuevaCancion = "Holaaaaaaaaaa";
reproductor.obtenerCancion;
