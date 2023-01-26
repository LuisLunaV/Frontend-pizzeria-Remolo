/**
 * Craaremos los eventos "Click" para cada uno de los items de las categorias que se mostraran en el menu al cliente.
 */

import { getProductos } from "../index.js";

const listaDeCategorias = document.querySelector('.ulList');

listaDeCategorias.addEventListener('click', async( event )=>{

    const dataValue = event.target.closest('.item-pizza').dataset.value;
    
   const productos = await getProductos(dataValue);
   console.log(productos)
    
    
});

export{
    listaDeCategorias
}