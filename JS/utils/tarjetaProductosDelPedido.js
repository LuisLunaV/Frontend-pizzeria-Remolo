export const tarjetaProductosDelPedido=()=>{
    const tarjetaDelProducto = document.querySelectorAll('.card');

    tarjetaDelProducto.forEach( tarjeta =>{
        tarjeta.addEventListener('click',( event )=>{
            const btnEliminar = event.target.closest('.button-eliminar');
            const producto = event.target.closest('.card-contenido');
            const valor = producto.dataset.value;
            if(btnEliminar) console.log( valor )

        });
    });
};