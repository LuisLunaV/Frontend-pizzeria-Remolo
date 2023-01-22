// Utilidades o funciones de los componentes
import { desplegarDropdown } from "./utils/dropdown.js";
//Componentes
import { obtenerCategorias } from './components/categorias.js';
import { mostrarModal, ventanaModal } from './components/modal.js';
//servicios de la api
import { getCategorias } from "./services/api-calls.js";

export{
desplegarDropdown,
getCategorias
}

//Componentes
obtenerCategorias();
mostrarModal();
ventanaModal();

