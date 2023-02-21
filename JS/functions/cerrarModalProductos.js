import { ocultarContenedorTotal } from '../index.js';
export const cerrarModalProductos =()=>{
    const modalDeProductos         = document.querySelector(".modal-productos"),
          modalContenedorProductos = document.querySelector(".contenedor-productos"),
          contenedorDelTotal       = document.querySelector('.total-productos');

    modalDeProductos.classList.remove("mostrar");
    modalContenedorProductos.classList.remove("tranformX-0");
    (contenedorDelTotal.classList.contains('mostrar-total'))?
    ocultarContenedorTotal():'';
};