window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect();

  if (ubicacion.top < 768) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("Aun no, da mas scroll");
  }
});
