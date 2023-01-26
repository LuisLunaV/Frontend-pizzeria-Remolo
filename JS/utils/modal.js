  const dropdownMenu = document.querySelector(".dropdown-menu"),
        modal        = document.querySelector(".modal"),
     modalContenedor = document.querySelector(".contenedor"),
  btnInputResponsive = document.querySelector(".btn-input-responsive");

/**
 * Nos ayuda a mostrar los items del dropdown, y los pedidos almacenados.
 */
const verPedidos = () => {

  dropdownMenu.addEventListener("click", (event) => {
    //El elemento contiene la clase "abrir-modal" True o False
    const mostrarPedidos = event.target.classList.contains("abrir-modal");

    //Si el elemento es false no hagas nada.
    if (!mostrarPedidos) return;

    // ocultamos el menu dropdown
    document.querySelector(".dropdown-menu").classList.add("mostrar-elemento");

    //mostramos la venta modal
    abrirModal();
  });

  //mostrar ventana modal con el boton responsive
  btnInputResponsive.addEventListener("click", () => {
    abrirModal();
  });
};

/**
 *Esta funcion nos ayudara a manejar todos los eventos, de los elementos, dentro de la ventana modal.
 */
const ventanaModal = () => {

  modal.addEventListener("click", (event) => {

    const elemento = event.target,
       cerrarModal = elemento.id;

    if (cerrarModal === "X") {
      modal.classList.remove("mostrar");
      modalContenedor.classList.remove("tranform-0");
    }
  });
};

/**
 * Agregamos las clases para mostrar el contenedor del modal.
 */
const abrirModal = () => {
  modal.classList.add("mostrar");
  modalContenedor.classList.add("tranform-0");
};

export { abrirModal, verPedidos, ventanaModal };
