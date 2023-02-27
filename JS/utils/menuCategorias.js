import { imprimirProducto, abrirModalProductos } from "../index.js";

/**
 * Craaremos los eventos "Click" para cada uno de los items de las categorias que se mostraran en el menu al cliente.
 */
const listaDeCategorias = document.querySelector(".ulList");

listaDeCategorias.addEventListener("click", async (event) => {
  const opcion = event.target.closest(".item-pizza");

  if (!opcion) {
    return;
  }

  const dataValue = opcion.dataset.value;

  //Mostramos los productos relacionados al ID de la categoria.
  abrirModalProductos();
  imprimirProducto(dataValue);
});

export { listaDeCategorias };
