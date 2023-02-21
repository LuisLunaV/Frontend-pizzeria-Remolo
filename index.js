import {modalProductos, modalPedidos, obtenerCategorias, PedidosLista } from './JS/index.js';

//componentes
obtenerCategorias();
modalPedidos();
modalProductos();

//Class
export const pedido = new PedidosLista();
