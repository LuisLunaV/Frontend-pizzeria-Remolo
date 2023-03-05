
export const abrirModalFormulario =()=>{
    const modal          = document.querySelector('.modal'),
    contenedorFormulario = document.querySelector('.contenedor');

    modal.classList.add('mostrar');
    contenedorFormulario.classList.add('tranformY-0');
};