import {
  alertaCarritoVacio,
  imprimirPedido,
  mostrarContenedorTotal,
  realizarPedido,
  abrirModalProductos,
  cerrarDropDown,
  cancelarPedido,
  tarjetaProductosDelPedido
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
  
  if( !productosDelLocal ){
    
    alertaCarritoVacio()
    return cerrarDropDown();
  }

    cerrarDropDown();

    //mostramos la venta modal junto con los productos del pedido y el total de los mismos
    abrirModalProductos();
    imprimirPedido();
    mostrarContenedorTotal();
    
    //Realiza la funcion del boton eliminar de la tarjeta del producto dentro de los pedidos
    tarjetaProductosDelPedido()
    
    //Ejecuta las funciones de los botones realizar y cancelar
    cancelarPedido();
    realizarPedido();
  });

};
