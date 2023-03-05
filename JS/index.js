//index
import { pedido } from "../index.js";
//Clase Lista de pedidos
import { PedidosLista } from "../class/pedidos-lista.class.js";

// Utilidades de los componentes
import { desplegarDropdown } from "./utils/desplegarDropdown.js";
import { listaDeCategorias } from "./utils/menuCategorias.js";
import { modalProductos } from "./utils/modalProductos.js";
import { modalPedidos } from "./utils/modalPedidos.js";
import { modalFormulario } from "./utils/modalFormulario.js";
import { tarjetaProductos } from "./utils/tarjetaProductos.js";
import { tarjetaProductosDelPedido } from "./utils/tarjetaProductosDelPedido.js";
import { realizarPedido } from "./utils/realizarPedido.js";

//Componentes
import { obtenerCategorias } from "./components/categorias.js";
import { htmlProducto } from "./components/productos.js";
import { htmlPedido } from "./components/pedidos.js";
import { htmlFormulario } from "./components/formulario.js";
import { htmlTotal } from "./components/total.js";
//Helpers
import { imprimirProducto } from "./helpers/imprimirProducto.js";
import { imprimirPedido } from "./helpers/imprimirPedidos.js";
import { imprimirFormulario } from "./helpers/imprimirFormulario.js";
import { agregarPrecio } from "./helpers/agregarPrecio.js";
import { limpiarModalProductos } from "./helpers/limpiarModalProductos.js";

//logic-funciones
import { enviarFormulario } from "./logic-functions/enviarFormulario.js";
import { enviarPedido } from "./logic-functions/enviarPedido.js";
import { sumarTotal } from "./logic-functions/sumarTotal.js";
import { cancelarPedido } from "./logic-functions/cancelarPedido.js";
import { agregarProducto } from "./logic-functions/agregarProducto.js";

//ui-functions
import { abrirModalFormulario } from "./ui-functions/abrirModalFormulario.js";
import { abrirModalProductos } from "./ui-functions/abrirModalProductos.js";
import { cerrarModalProductos } from "./ui-functions/cerrarModalProductos.js";
import { cerrarModalFormulario } from "./ui-functions/cerrarModalFormulario.js";
import { ocultarCantidadPedidos } from "./ui-functions/ocultarCantidadPedidos.js";
import { mostrarCantidadDelPedido } from "./ui-functions/mostrarCantidadPedido.js";
import {
  mostrarContenedorTotal,
  ocultarContenedorTotal,
} from "./ui-functions/contenedorTotal.js";
import { cerrarDropDown } from "./ui-functions/cerrarDropDown.js";

//servicios de la api
import {
  getCategorias,
  getProductos,
  getPrecios,
  postUsuarios,
  postPedido,
} from "./services/api-calls.js";

export {
  tarjetaProductosDelPedido,
  cerrarDropDown,
  cancelarPedido,
  ocultarCantidadPedidos,
  mostrarCantidadDelPedido,
  agregarProducto,
  limpiarModalProductos,
  enviarPedido,
  enviarFormulario,
  cerrarModalFormulario,
  abrirModalProductos,
  imprimirFormulario,
  htmlFormulario,
  abrirModalFormulario,
  cerrarModalProductos,
  realizarPedido,
  sumarTotal,
  htmlTotal,
  mostrarContenedorTotal,
  ocultarContenedorTotal,
  agregarPrecio,
  pedido,
  PedidosLista,
  htmlPedido,
  htmlProducto,
  tarjetaProductos,
  imprimirPedido,
  imprimirProducto,
  listaDeCategorias,
  desplegarDropdown,
  getCategorias,
  getProductos,
  getPrecios,
  postUsuarios,
  postPedido,
  obtenerCategorias,
  modalFormulario,
  modalPedidos,
  modalProductos,
};
