import { cerrarModalFormulario, enviarFormulario } from "../index.js";

/**
 * Agregamos los eventos que nos permiten cerrar el formulario, y el evento que nos permite enviar
 * los datos del formulario a la api.
 */
const btnCerrar = document.querySelector(".btn-cerrar");

export const modalFormulario = () => {
  btnCerrar.addEventListener("click", () => {
    const salir = confirm("¿Esta seguro que desea salir del formulario?");

    if (salir) cerrarModalFormulario();
  });

  const form = document.querySelector(".form-registro-cli");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    enviarFormulario(form);
    cerrarModalFormulario();
  });
};
