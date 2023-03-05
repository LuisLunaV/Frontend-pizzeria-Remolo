/**
 * Agregamos las clases para mostrar el contenedor del modal.
 */
export const abrirModalProductos = () => {

  const modalDeProductos         = document.querySelector(".modal-productos"),
        modalContenedorProductos = document.querySelector(".contenedor-productos");

    modalDeProductos.classList.add("mostrar");
    modalContenedorProductos.classList.add("tranformX-0");
  
  };