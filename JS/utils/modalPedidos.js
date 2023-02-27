import {
  imprimirPedido,
  mostrarContenedorTotal,
  realizarPedido,
  abrirModalProductos,
} from "../index.js";
// Elementos del dropdown y el boton principal responsive
const dropdownMenu = document.querySelector(".dropdown-menu"),
  btnInputResponsive = document.querySelector(".btn-input-responsive");

// Nos ayuda a mostrar los items del dropdown, y los pedidos almacenados.

export const modalPedidos = () => {
  dropdownMenu.addEventListener("click", (event) => {
    //El elemento contiene la clase "abrir-modal" True o False
    const mostrarPedidos = event.target.classList.contains("abrir-modal");

    //Si el elemento es false no hagas nada.
    if (!mostrarPedidos) return;

    // ocultamos el menu dropdown
    document.querySelector(".dropdown-menu").classList.add("mostrar-elemento");

    //mostramos la venta modal
    abrirModalProductos();
    mostrarContenedorTotal();
    imprimirPedido();
    realizarPedido();
  });

  //mostrar ventana modal con el boton responsive
  btnInputResponsive.addEventListener("click", () => {
    abrirModalProductos();
  });
};
