const contenedorDelTotal = document.querySelector(".total-productos");

const mostrarContenedorTotal = () => {
  contenedorDelTotal.classList.remove("ocultar-total");
  contenedorDelTotal.classList.add("mostrar-total");
};

const ocultarContenedorTotal = () => {
  setTimeout(() => {
    contenedorDelTotal.classList.add("ocultar-total");
    contenedorDelTotal.classList.remove("mostrar-total");
  }, 500);
};

export { mostrarContenedorTotal, ocultarContenedorTotal };
