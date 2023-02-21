/**
 * Creamos el html que nos apoyara a enviar los datos de entrega del cliente.
 */
const modal = document.querySelector(".contenido-modal");

export const htmlFormulario = () => {
  const html = `
      <!-- Fomularios -->
      <form class="form-registro-cli">
        <div class=" div-contenedor-cli nombre-cliente">
          <label for="nombre-cliente">Nombre completo</label>
          <input type="text" name="Usuario_Nombre" id="nombre-cliente" required>
        </div>
        <div class="div-contenedor-cli telefono_cli">
          <label for="telefono-cliente">Numero de contacto</label>
          <input type="tel" name="Usuario_Telefono" id="telefono-cliente" pattern="[0-9]*" required> 
        </div>
        <div class="div-contenedor-cli direccion_cli">
          <label for="direccion-cliente">Direccion de entrega</label>
          <input type="text" name="Usuario_Direccion" id="direccion-cliente" required>
        </div>

        <div class="div-btn-cliente">
          <input class="btn-crear-cliente" type="submit" value="Guardar" />
        </div>
      </form>`;

  modal.innerHTML = html;
};
