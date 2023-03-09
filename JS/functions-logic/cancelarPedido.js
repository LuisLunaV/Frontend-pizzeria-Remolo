import { pedido,ocultarCantidadPedidos, cerrarModalProductos, limpiarModalProductos, alertaCancelarPedido } from '../index.js';

export const cancelarPedido = () =>{
    
    const btnCancelarPedido = document.querySelector('.btn-danger');
    
    btnCancelarPedido.addEventListener('click',async()=>{
        
        /**
         * Se ejecuta la alerta de cancelar pedido y esperamos si la respuesta es
         * true o false
         */
         const confirmado = await alertaCancelarPedido();
         
        if( confirmado ){
        
        pedido.limpiarLocalStorage();
        ocultarCantidadPedidos();
        cerrarModalProductos();

        setTimeout(()=>{
            limpiarModalProductos();
        },500)
        }
        

    });
};