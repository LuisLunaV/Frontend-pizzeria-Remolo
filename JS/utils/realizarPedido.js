import {
  imprimirFormulario,
  cerrarModalProductos,
  abrirModalFormulario,
  modalFormulario,
} from "../index.js";
/**
 * Cuando damos click en el boton "Pagar", llamamos a las funciones
 * que nos permiten continuar con el pedido.
 */
export const realizarPedido = () => {
  const btnPagar = document.querySelector(".btn-succes");

  btnPagar.addEventListener("click", () => {
    cerrarModalProductos();
    abrirModalFormulario();
    imprimirFormulario();
    modalFormulario();
  });
};
