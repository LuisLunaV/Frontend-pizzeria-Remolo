import { pedido, htmlProducto } from '../index.js';

const modal = document.querySelector(".productos");

export const imprimirPedido =()=>{

    modal.innerHTML = '';
   pedido.pedidos.forEach( htmlProducto );

};

