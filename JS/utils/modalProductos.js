import { cerrarModalProductos } from "../index.js";

// Elementos del modal productos
const modalDeProducto = document.querySelector(".modal-productos");

// Esta funcion nos ayudara a manejar todos los eventos, de los elementos, dentro de la ventana modal.

const modalProductos = () => {
  modalDeProducto.addEventListener("click", (event) => {
    const elemento = event.target,
      cerrarModal = elemento.id;

    if (cerrarModal === "X") {
      cerrarModalProductos();
    }
  });
};

export { modalProductos };
