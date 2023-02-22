import {modalProductos, modalPedidos, obtenerCategorias, PedidosLista } from './JS/index.js';

//componentes
obtenerCategorias();
modalProductos();
modalPedidos();


//Class
export const pedido = new PedidosLista();
