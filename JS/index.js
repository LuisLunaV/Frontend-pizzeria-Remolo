// Utilidades o funciones de los componentes
import { desplegarDropdown } from "./utils/dropdown.js";
//Componentes
import { obtenerCategorias } from './components/categorias.js';

//servicios de la api
import { getCategorias } from "./services/api-calls.js";

export{
desplegarDropdown,
getCategorias
}

obtenerCategorias();

