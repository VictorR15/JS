function revisarPuntaje() {
  const puntaje = 500;
  if (puntaje > 400) {
    console.log("Exelente");
    return;
  }

  if (puntaje > 350) {
    console.log("Eres muy bueno alch");
    return;
  }
}

revisarPuntaje();
