import { pedido, htmlPedido, sumarTotal, limpiarModalProductos, tarjetaProductos } from '../index.js';


/**
 * Imprimimos los productos del pedido y el total a pagar.
 */
export const imprimirPedido = async()=>{

    limpiarModalProductos();
   
    const nuevoPedido = pedido.pedidos;
   
    nuevoPedido.forEach( htmlPedido );

    //Esta funcion nos ayuda a capturar los eventos de las tarjetas de producto.
    tarjetaProductos();

    //Imprimimos el total del pedido.
    sumarTotal();
};

