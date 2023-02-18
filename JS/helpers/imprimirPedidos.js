import { pedido, agregarPrecio ,htmlPedido } from '../index.js';

const modal = document.querySelector(".productos");

export const imprimirPedido = async()=>{
    modal.innerHTML = '';
   
    const nuevoPedido = pedido.pedidos;
   
    nuevoPedido.forEach( htmlPedido );

};

