import {ventanaModal, verPedidos, obtenerCategorias, PedidosLista } from './JS/index.js';

//componentes
obtenerCategorias();
verPedidos();
ventanaModal();

//Class
export const pedido = new PedidosLista();
