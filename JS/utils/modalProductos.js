import { imprimirPedido, mostrarContenedorTotal, realizarPedido, cerrarModalProductos, abrirModalProductos } from '../index.js';
// Elementos del dropdown y el boton principal responsive
const dropdownMenu       = document.querySelector(".dropdown-menu"),
      btnInputResponsive = document.querySelector(".btn-input-responsive");
// Elementos del modal productos
const modalDeProductos  = document.querySelector(".modal-productos");

/**
 * Nos ayuda a mostrar los items del dropdown, y los pedidos almacenados.
 */
const verPedidos = () => {
  
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
    realizarPedido()
  });

  //mostrar ventana modal con el boton responsive
  btnInputResponsive.addEventListener("click", () => {
    abrirModal();
  });
};

/**
 *Esta funcion nos ayudara a manejar todos los eventos, de los elementos, dentro de la ventana modal.
 */
const ventanaModal = () => {
  
  modalDeProductos.addEventListener("click", (event) => {
    
    const elemento    = event.target,
          cerrarModal = elemento.id;

    if (cerrarModal === "X") {
      cerrarModalProductos();
    }

  });
};


export { verPedidos, ventanaModal };
