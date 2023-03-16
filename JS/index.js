//index
export { pedido } from "../index.js";
//Clase Lista de pedidos
export { PedidosLista } from "../class/pedidos-lista.class.js";
//Alertas
export { alertaCarritoVacio } from './components-alert/alertaCarritoVacio.js';
export { alertaCancelarPedido } from './components-alert/alertaCancelarPedido.js';
export { alertaSalidaDelFormulario } from './components-alert/alertaSalidaFormulario.js';
export { alertaDeFormularioEnviado } from './components-alert/alertaFormularioEnviado.js';
// Utilidades de los componentes
export { listaDeCategorias } from "./utils/menuCategorias.js";
export { modalProductos } from "./utils/modalProductos.js";
export { modalPedidos } from "./utils/modalPedidos.js";
export { modalFormulario } from "./utils/modalFormulario.js";
export { tarjetaProductos } from "./utils/tarjetaProductos.js";
export { tarjetaProductosDelPedido } from "./utils/tarjetaProductosDelPedido.js";
export { realizarPedido } from "./utils/realizarPedido.js";

//Componentes
export { obtenerCategorias } from "./components/categorias.js";
export { htmlProducto } from "./components/productos.js";
export { htmlPedido } from "./components/pedidos.js";
export { htmlFormulario } from "./components/formulario.js";
export { htmlTotal } from "./components/total.js";
//Helpers
export { imprimirProducto } from "./helpers/imprimirProducto.js";
export { imprimirPedido } from "./helpers/imprimirPedidos.js";
export { imprimirFormulario } from "./helpers/imprimirFormulario.js";
export { agregarPrecio } from "./helpers/agregarPrecio.js";
export { limpiarModalProductos } from "./helpers/limpiarModalProductos.js";

//logic-funciones
export { enviarFormulario } from "./functions-logic/enviarFormulario.js";
export { enviarPedido } from "./functions-logic/enviarPedido.js";
export { sumarTotal } from "./functions-logic/sumarTotal.js";
export { cancelarPedido } from "./functions-logic/cancelarPedido.js";
export { agregarProducto } from "./functions-logic/agregarProducto.js";
export { eliminarProductoDelPedido } from './functions-logic/eliminarProductoDelPedido.js';

//ui-functions
export { abrirModalFormulario } from "./functions-ui/abrirModalFormulario.js";
export { abrirModalProductos } from "./functions-ui/abrirModalProductos.js";
export { cerrarModalProductos } from "./functions-ui/cerrarModalProductos.js";
export { cerrarModalFormulario } from "./functions-ui/cerrarModalFormulario.js";
export { ocultarCantidadPedidos } from "./functions-ui/ocultarCantidadPedidos.js";
export { mostrarCantidadDelPedido } from "./functions-ui/mostrarCantidadPedido.js";
export { desplegarDropdown } from "./functions-ui/desplegarDropdown.js";
export { cerrarDropDown } from "./functions-ui/cerrarDropDown.js";
import {
  mostrarContenedorTotal,
  ocultarContenedorTotal,
} from "./functions-ui/contenedorTotal.js";

//servicios de la api
import {
  getCategorias,
  getProductos,
  getPrecios,
  postUsuarios,
  postPedido,
} from "./services/api-calls.js";

export {
  mostrarContenedorTotal,
  ocultarContenedorTotal,
  getCategorias,
  getProductos,
  getPrecios,
  postUsuarios,
  postPedido,
};
