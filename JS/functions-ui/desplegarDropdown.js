import { modalPedidos } from '../index.js';
//Desplegamos las opciones de nuestro Dropdown en la pagina de inicio.
const desplegar = document.querySelector(".dropdown-menu"),
    btnDropdown = document.querySelector(".btn-dropdown");

const desplegarDropdown = () => {

btnDropdown.addEventListener("click", () => {
  desplegar.classList.toggle("mostrar-elemento");

  modalPedidos()
  });
};

desplegarDropdown();

export { desplegarDropdown };
