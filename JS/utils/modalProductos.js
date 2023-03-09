import { cerrarModalProductos } from "../index.js";

// Elementos del modal productos
const modalDeProducto = document.querySelector(".modal-productos");

// Esta funcion nos ayudara a manejar todos los eventos, de los elementos, dentro de la ventana modal.

const modalProductos = () => {
  modalDeProducto.addEventListener("click", (event) => {
 
    //Si se preciona el boton "x-cerrar". 
    const cerrar = event.target.closest(".contenedor-close-producto");
 
    if ( cerrar ) {

      cerrarModalProductos();

    }

  });
};

export { modalProductos };
