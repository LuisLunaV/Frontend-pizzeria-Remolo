import { cerrarModalFormulario, enviarFormulario } from '../index.js';

const btnCerrar = document.querySelector('.btn-cerrar');

export const modalFormulario =()=>{

    btnCerrar.addEventListener('click',()=>{
       cerrarModalFormulario(); 
    });


const form = document.querySelector('.form-registro-cli');

    form.addEventListener('submit',(event)=>{
        event.preventDefault();

        enviarFormulario( form );

    });
};