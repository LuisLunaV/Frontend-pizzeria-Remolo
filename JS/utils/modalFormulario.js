import { cerrarModalFormulario, enviarFormulario, alertaSalidaDelFormulario } from "../index.js";

/**
 * Agregamos los eventos que nos permiten cerrar el formulario, y el evento que nos permite enviar
 * los datos del formulario a la api.
 */
export const modalFormulario = () => {
  
  const btnCerrar = document.querySelector(".btn-cerrar");
  
  btnCerrar.addEventListener("click", async() => {

  const salir = await alertaSalidaDelFormulario();
    
  if (salir) cerrarModalFormulario();
  
});

  const form = document.querySelector(".form-registro-cli");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    enviarFormulario(form);
    cerrarModalFormulario();
  });
};
