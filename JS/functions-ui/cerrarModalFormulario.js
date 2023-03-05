export const cerrarModalFormulario =()=>{
    const modal          = document.querySelector('.modal'),
    contenedorFormulario = document.querySelector('.contenedor');

    modal.classList.remove('mostrar');
    contenedorFormulario.classList.remove('tranformY-0');
};