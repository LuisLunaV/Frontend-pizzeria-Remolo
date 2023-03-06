import { eliminarProductoDelPedido } from '../index.js';

export const tarjetaProductosDelPedido=()=>{

    const tarjetaDelProducto = document.querySelectorAll('.card');

    tarjetaDelProducto.forEach( tarjeta =>{

        tarjeta.addEventListener('click',( event )=>{

            const btnEliminar = event.target.closest('.button-eliminar');
            
            if(btnEliminar) eliminarProductoDelPedido( event );
            

        });
    });
};