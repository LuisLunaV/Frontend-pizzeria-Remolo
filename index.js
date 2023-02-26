import {modalProductos, modalPedidos, obtenerCategorias, PedidosLista, mostrarCantidadDelPedido } from './JS/index.js';

//Mostramos la cantidad de pedidos guardados
mostrarCantidadDelPedido();

//componentes
obtenerCategorias();
modalProductos();
modalPedidos();


//Class
export const pedido = new PedidosLista();
