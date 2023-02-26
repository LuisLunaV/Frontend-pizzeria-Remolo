import { postPedido, pedido } from '../index.js';

export const enviarPedido = async( {Usuario_Id} )=>{

    const pedidosLocal = JSON.parse( localStorage.getItem('pedidos'));

    const pedidos = pedidosLocal.map( pedido =>{
        return {
            PD_PedidosID: Usuario_Id,
            PD_ProdID: pedido.Prod_id,
            PD_Cantidad: pedido.PD_Cantidad,
            PD_PrecioUnitario: Number(pedido.PD_PrecioUnitario)
        }
    });

/**
 *  Con for...of iteramos sobre el array de pedidos y esperamos a que se complete cada
    solicitud antes de continuar con la siguiente, y de esta manera  postPedido espera 
    a que se complete antes de continuar con el siguiente pedido
 */
    for (const pedido of pedidos) {
        await postPedido(pedido);
      }

     pedido.limpiarLocalStorage();
    
    };

/**
 * Nota: La función forEach no espera a que se completen todas las operaciones asíncronas antes de continuar con la siguiente iteración, 
 * por lo que podría haber una superposición de solicitudes que provoque que algunas no se completen.
 */


