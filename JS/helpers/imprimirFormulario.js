import { htmlFormulario } from '../components/formulario.js';

const modal = document.querySelector(".contenido-modal");

export const imprimirFormulario = () => {

    modal.innerHTML = '';
    htmlFormulario();

};