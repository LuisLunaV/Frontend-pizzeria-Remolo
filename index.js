import {modalProductos, obtenerCategorias, PedidosLista, mostrarCantidadDelPedido } from './JS/index.js';

//Mostramos la cantidad de pedidos guardados
mostrarCantidadDelPedido();

//componentes
obtenerCategorias();
modalProductos();


//Class
export const pedido = new PedidosLista();
