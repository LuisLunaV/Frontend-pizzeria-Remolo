//Clase Lista de pedidos
import { PedidosLista } from '../class/pedidos-lista.class.js';

// Utilidades o funciones de los componentes
import { desplegarDropdown } from "./utils/dropdown.js";
import { listaDeCategorias } from './utils/menuCategorias.js';
import { verPedidos, ventanaModal, abrirModal } from './utils/modal.js';
import { tarjetaProductos } from './utils/cardProducts.js';

//Componentes
import { obtenerCategorias }  from './components/categorias.js';
import { imprimirProducto }   from './components/productos.js';
import { imprimirFormulario } from './components/formulario.js';

//servicios de la api
import { getCategorias, getProductos, getPrecios } from "./services/api-calls.js";

export{
pedido,
tarjetaProductos,
abrirModal,
imprimirProducto,
imprimirFormulario,
listaDeCategorias,
desplegarDropdown,
getCategorias,
getProductos,
getPrecios
}

//Componentes
obtenerCategorias();
verPedidos();
ventanaModal();

//Class
const pedido = new PedidosLista(); 

console.log(pedido)
