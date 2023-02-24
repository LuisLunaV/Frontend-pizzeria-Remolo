import { postPedido } from '../index.js';

export const enviarPedido = async( {Usuario_Id} )=>{

    const pedidosLocal = JSON.parse( localStorage.getItem('pedidos'));

    const pedidos = pedidosLocal.map( pedido =>{
        return {
            "PD_PedidosID":Usuario_Id,
            "PD_ProdID":pedido.Prod_id,
            "PD_Cantidad":pedido.PD_Cantidad,
            "PD_PrecioUnitario":Number(pedido.PD_PrecioUnitario)
        }
    });

    pedidos.forEach( async( pedido ) => {
        await postPedido( pedido );
    });
};




