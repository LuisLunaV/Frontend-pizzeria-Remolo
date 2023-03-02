import {
  imprimirPedido,
  mostrarContenedorTotal,
  realizarPedido,
  abrirModalProductos
} from "../index.js";


// Nos ayuda a mostrar los items del dropdown, y los pedidos almacenados.
export const modalPedidos = () => {

  const dropdownMenu = document.querySelector(".dropdown-menu");
  
  dropdownMenu.addEventListener("click", (event) => {
    /**
     *Cuando ejecutamos el evento del boton, se hace una nueva busqueda en el localStorage, cada "click"
     es una busqueda independiente de la anterior. Validamos si hay algun producto en el pedido
     */
  const productosDelLocal = JSON.parse(localStorage.getItem('pedidos'));
  if( !productosDelLocal )return alert('No hay productos en el carrito.');

    // ocultamos el menu dropdown
    document.querySelector(".dropdown-menu").classList.add("mostrar-elemento");

    //mostramos la venta modal
    abrirModalProductos();
    imprimirPedido();
    mostrarContenedorTotal();
    realizarPedido();
  });

};
