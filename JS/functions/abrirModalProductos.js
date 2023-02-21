/**
 * Agregamos las clases para mostrar el contenedor del modal.
 */
const modalDeProductos         = document.querySelector(".modal-productos"),
      modalContenedorProductos = document.querySelector(".contenedor-productos");

export const abrirModalProductos = () => {
    modalDeProductos.classList.add("mostrar");
    modalContenedorProductos.classList.add("tranformX-0");
  };