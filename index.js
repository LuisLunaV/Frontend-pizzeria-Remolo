import {ventanaModal, verPedidos, obtenerCategorias, PedidosLista } from './JS/index.js';

//componentes
obtenerCategorias();
verPedidos();
ventanaModal();

//Class
const pedido = new PedidosLista();

export{
    pedido
}