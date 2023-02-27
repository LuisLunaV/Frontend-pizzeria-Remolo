//index
import { pedido } from '../index.js';
//Clase Lista de pedidos
import { PedidosLista } from '../class/pedidos-lista.class.js';

// Utilidades o funciones de los componentes
import { desplegarDropdown } from "./utils/desplegarDropdown.js";
import { listaDeCategorias } from './utils/menuCategorias.js';
import { modalProductos } from './utils/modalProductos.js';
import { modalPedidos } from './utils/modalPedidos.js';
import { modalFormulario } from './utils/modalFormulario.js';
import { tarjetaProductos } from './utils/cardProducts.js';
import { mostrarContenedorTotal, ocultarContenedorTotal } from './utils/contenedorTotal.js';
import { realizarPedido } from './utils/realizarPedido.js';

//Componentes
import { obtenerCategorias }  from './components/categorias.js';
import { htmlProducto }   from './components/productos.js';
import { htmlPedido } from './components/pedidos.js';
import { htmlFormulario } from './components/formulario.js';
import { htmlTotal } from './components/total.js';
//Helpers
import { imprimirProducto } from './helpers/imprimirProducto.js';
import { imprimirPedido } from './helpers/imprimirPedidos.js';
import { imprimirFormulario } from './helpers/imprimirFormulario.js';
import { agregarPrecio } from './helpers/agregarPrecio.js';
import { limpiarModalProductos } from './helpers/limpiarModalProductos.js';

//funciones
import { abrirModalProductos } from './functions/abrirModalProductos.js';
import { cerrarModalProductos } from './functions/cerrarModalProductos.js';
import { cerrarModalFormulario } from './functions/cerrarModalFormulario.js';
import { enviarFormulario } from './functions/enviarFormulario.js';
import { enviarPedido } from './functions/enviarPedido.js';
import { sumarTotal } from './functions/sumarTotal.js';
import { abrirModalFormulario } from './functions/abrirModalFormulario.js';
import { agregarProducto } from './functions/agregarProducto.js';
import { mostrarCantidadDelPedido } from './functions/mostrarCantidadPedido.js';
import { ocultarCantidadPedidos } from './functions/ocultarCantidadPedidos.js';

//servicios de la api
import { getCategorias, getProductos, getPrecios, postUsuarios, postPedido } from "./services/api-calls.js";

export{
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
modalProductos
}





