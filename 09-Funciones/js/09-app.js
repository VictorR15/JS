const reproductor = {
  reproducir: function (id) {
    console.log(`Reproducir canción en el id ${id}`);
  },
  pausar: function () {
    console.log(`pausando...`);
  },
  borrar: function (id) {
    console.log(`Borrando canción... ${id}`);
  },
  crearPlaylist: function (nombrePlaylist) {
    console.log(`Se creo una playlist con el nombre de ${nombrePlaylist}`);
  },
  reproducirPlaylist: function (nombrePlaylist) {
    console.log(`La playlist ${nombrePlaylist} se esta reproduciendo`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Hola");
reproductor.reproducirPlaylist("Hola");
