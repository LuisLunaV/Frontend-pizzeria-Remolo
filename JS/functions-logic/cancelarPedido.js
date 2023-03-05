import { pedido,ocultarCantidadPedidos, cerrarModalProductos, limpiarModalProductos } from '../index.js';

export const cancelarPedido = () =>{
    
    const btnCancelarPedido = document.querySelector('.btn-danger');
    
    btnCancelarPedido.addEventListener('click',()=>{
        
        const cancelarPedido = confirm('¿Esta seguro de cancelar su pedido?')
        
        if( cancelarPedido ){
        
        pedido.limpiarLocalStorage();
        ocultarCantidadPedidos();
        cerrarModalProductos();

        setTimeout(()=>{
            limpiarModalProductos();
        },500)
        }
        

    });
};