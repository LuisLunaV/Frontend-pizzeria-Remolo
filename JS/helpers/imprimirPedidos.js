import { pedido, htmlPedido, sumarTotal } from '../index.js';

const modal = document.querySelector(".productos");

/**
 * Imprimimos los productos del pedido y el total a pagar.
 */
export const imprimirPedido = async()=>{

    modal.innerHTML = '';
   
    const nuevoPedido = pedido.pedidos;
   
    nuevoPedido.forEach( htmlPedido );

    //Imprimimos el total del pedido.
    sumarTotal();
};

