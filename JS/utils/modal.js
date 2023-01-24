const dropdownMenu = document.querySelector('.dropdown-menu'),
             modal = document.querySelector('.modal'),
   modalContenedor = document.querySelector('.contenedor'),
btnInputResponsive = document.querySelector('.btn-input-responsive');

const mostrarModal =()=>{
    dropdownMenu.addEventListener('click',( event )=>{ 
        //El elemento con tiene la clase "abrir-modal" True o False
        const abrirModal = event.target.classList.contains('abrir-modal');
        
        //Si el elemento es false no hagas nada. 
        if( !abrirModal )return;

        // ocultamos el menu dropdown
        document.querySelector('.dropdown-menu').classList.add('mostrar-elemento');
        
        //mostramos la venta modal
        modal.classList.add('mostrar');
        modalContenedor.classList.add('tranform-0');
    });

    btnInputResponsive.addEventListener('click',()=>{
        modal.classList.add('mostrar');
        modalContenedor.classList.add('tranform-0');
    });
};

const ventanaModal =()=>{
    modal.addEventListener('click',( event )=>{
        const elemento = event.target,
           cerrarModal = elemento.id;
        
           if( cerrarModal === 'X'){
            modal.classList.remove('mostrar');
            modalContenedor.classList.remove('tranform-0');
           }
    });
};

export{
    mostrarModal,
    ventanaModal
}