//index
import { pedido } from "../index.js";
//Clase Lista de pedidos
import { PedidosLista } from "../class/pedidos-lista.class.js";

// Utilidades de los componentes
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
import { enviarFormulario } from "./functions-logic/enviarFormulario.js";
import { enviarPedido } from "./functions-logic/enviarPedido.js";
import { sumarTotal } from "./functions-logic/sumarTotal.js";
import { cancelarPedido } from "./functions-logic/cancelarPedido.js";
import { agregarProducto } from "./functions-logic/agregarProducto.js";
import { eliminarProductoDelPedido } from './functions-logic/eliminarProductoDelPedido.js';

//ui-functions
import { abrirModalFormulario } from "./functions-ui/abrirModalFormulario.js";
import { abrirModalProductos } from "./functions-ui/abrirModalProductos.js";
import { cerrarModalProductos } from "./functions-ui/cerrarModalProductos.js";
import { cerrarModalFormulario } from "./functions-ui/cerrarModalFormulario.js";
import { ocultarCantidadPedidos } from "./functions-ui/ocultarCantidadPedidos.js";
import { mostrarCantidadDelPedido } from "./functions-ui/mostrarCantidadPedido.js";
import { desplegarDropdown } from "./functions-ui/desplegarDropdown.js";
import { cerrarDropDown } from "./functions-ui/cerrarDropDown.js";
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
  eliminarProductoDelPedido,
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
