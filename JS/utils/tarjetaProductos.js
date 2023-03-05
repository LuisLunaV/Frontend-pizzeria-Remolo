import { agregarProducto } from "../index.js";

export const tarjetaProductos = () => {
  const cardProducto = document.querySelectorAll(".card");
  /**
   * Realizamos un forEach para seleccionar todas las tarjetas con la clase '.card'
   * y agregarle el evento 'Click' a cada una de ellas.
   */
  cardProducto.forEach((tarjeta) => {
    const cantidadProducto = tarjeta.querySelector(".cantidad-span");

    //La variable contador es la cantidad de productos necesarios.
    let contador = 1;

    tarjeta.addEventListener("click", async (event) => {
      // Obtenemos los elementos de los botones '+','-' y 'Agregar' de la tarjeta del producto.
      const btnPlusMinus = event.target.closest(".button-card");
      const btnAgregar = event.target.closest(".button-agregar");

      /**
       * Validamos que los botones '+'y'-' hayan sido presionado, y dependiendo el boton, se sumara 1 o restara 1 a la
       *  variable contador.
       */
      if (btnPlusMinus) {
        const signo = btnPlusMinus.dataset.value;

        if (signo === "+") {
          contador++;
          cantidadProducto.innerText = contador;
        }

        if (signo === "-") {
          contador--;
          contador = contador < 1 ? 1 : contador;
          cantidadProducto.innerText = contador;
        }
      }

      if (btnAgregar) {
        agregarProducto(event, contador);
      }
    });
  });
};
