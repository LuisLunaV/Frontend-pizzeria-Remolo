import { pedido, htmlPedido, sumarTotal, limpiarModalProductos } from '../index.js';


/**
 * Imprimimos los productos del pedido y el total a pagar.
 */
export const imprimirPedido = async()=>{

    limpiarModalProductos();
   
    const nuevoPedido = pedido.pedidos;
   
    nuevoPedido.forEach( htmlPedido );

    //Imprimimos el total del pedido.
    sumarTotal();
};

