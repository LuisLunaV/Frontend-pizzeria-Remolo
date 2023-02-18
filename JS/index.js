//index
import { pedido } from '../index.js';
//Clase Lista de pedidos
import { PedidosLista } from '../class/pedidos-lista.class.js';

// Utilidades o funciones de los componentes
import { desplegarDropdown } from "./utils/desplegarDropdown.js";
import { listaDeCategorias } from './utils/menuCategorias.js';
import { verPedidos, ventanaModal, abrirModal } from './utils/modal.js';
import { tarjetaProductos } from './utils/cardProducts.js';
import { mostrarContenedorTotal, ocultarContenedorTotal } from './utils/contenedorTotal.js';
//Componentes
import { obtenerCategorias }  from './components/categorias.js';
import { htmlProducto }   from './components/productos.js';
import { htmlPedido } from './components/pedidos.js';
import { imprimirFormulario } from './components/formulario.js';
import { htmlTotal } from './components/total.js';
//Helpers
import { imprimirProducto } from './helpers/imprimirProducto.js';
import { imprimirPedido } from './helpers/imprimirPedidos.js';
import { agregarPrecio } from './helpers/agregarPrecio.js';

//funciones
import { sumarTotal } from './functions/sumarTotal.js';

//servicios de la api
import { getCategorias, getProductos, getPrecios } from "./services/api-calls.js";

export{
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
abrirModal,
imprimirPedido,
imprimirProducto,
imprimirFormulario,
listaDeCategorias,
desplegarDropdown,
getCategorias,
getProductos,
getPrecios,
obtenerCategorias,
verPedidos,
ventanaModal,
}





