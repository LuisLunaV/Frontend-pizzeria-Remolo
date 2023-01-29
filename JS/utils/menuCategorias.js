import { imprimirProducto, abrirModal } from "../index.js";

/**
 * Craaremos los eventos "Click" para cada uno de los items de las categorias que se mostraran en el menu al cliente.
 */
const listaDeCategorias = document.querySelector('.ulList');

listaDeCategorias.addEventListener('click', async( event )=>{

    const dataValue = event.target.closest('.item-pizza').dataset.value;
    abrirModal();
    imprimirProducto( dataValue );
    
});

export{
    listaDeCategorias
}