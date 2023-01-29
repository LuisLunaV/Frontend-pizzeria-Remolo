// Utilidades o funciones de los componentes
import { desplegarDropdown } from "./utils/dropdown.js";
import { listaDeCategorias } from './utils/menuCategorias.js';
import { verPedidos, ventanaModal, abrirModal } from './utils/modal.js';

//Componentes
import { obtenerCategorias } from './components/categorias.js';
import { imprimirProducto } from './components/productos.js';

//servicios de la api
import { getCategorias, getProductos } from "./services/api-calls.js";

export{
abrirModal,
imprimirProducto,
listaDeCategorias,
desplegarDropdown,
getCategorias,
getProductos
}

//Componentes
obtenerCategorias();
verPedidos();
ventanaModal();

