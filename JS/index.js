// Utilidades o funciones de los componentes
import { desplegarDropdown } from "./utils/dropdown.js";
import { listaDeCategorias } from './utils/menuCategorias.js';

//Componentes
import { obtenerCategorias } from './components/categorias.js';
import { mostrarModal, ventanaModal } from './utils/modal.js';
//servicios de la api
import { getCategorias, getProductos } from "./services/api-calls.js";

export{
listaDeCategorias,
desplegarDropdown,
getCategorias,
getProductos
}

//Componentes
obtenerCategorias();
mostrarModal();
ventanaModal();

