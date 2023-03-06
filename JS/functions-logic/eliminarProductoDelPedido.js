import {
  pedido,
  mostrarCantidadDelPedido,
  sumarTotal,
  cancelarPedido,
  realizarPedido,
  ocultarCantidadPedidos,
  cerrarModalProductos,
} from "../index.js";

export const eliminarProductoDelPedido = (event) => {

  const contenedorDeLasTarjetas = document.querySelector(".productos");

  const tarjetaDelProducto = event.target.closest(".card");
  
  const producto = event.target.closest(".card-contenido");
  const idDelProducto = producto.dataset.value;

  //Eliminamos la tarjeta que contiene el producto del contenedor del DOM
  contenedorDeLasTarjetas.removeChild(tarjetaDelProducto);

  //Eliminamos el producto del arreglo del localStorage
  pedido.eliminarUnProductoDelPedido(idDelProducto);

  //Actualizamos la cantidad del pedido
  mostrarCantidadDelPedido();

  //Actualizamos el total, y si el total es cero limpiamos el localStorage
  if (sumarTotal() == 0) {
    pedido.limpiarLocalStorage();
    ocultarCantidadPedidos();
    cerrarModalProductos();
  }

  //Ejecuta las funciones de los botones realizar y cancelar
  cancelarPedido();
  realizarPedido();
};
