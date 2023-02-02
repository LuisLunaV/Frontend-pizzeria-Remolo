import { getProductos } from '../index.js';

const modal = document.querySelector('.contenido-modal');
const htmlProducto =()=>{
    const html = `
  
    `;

    modal.innerHTML += html;
};

const imprimirProducto = async ( id )=>{
  /**
   * Con la instruccion modal.innerHTML = ''; vaciamos todo el contenido del 
   * elemento modal, antes de imprimir unas nuevas targeta. 
   */
   modal.innerHTML ='';
  
   /**
    * Obtenemos la informacio de los productos y los mandamos a imprimir
    * al DOM.
    */
   const { producto } = await getProductos( id );
   producto.forEach( htmlProducto );
   
};

export{
    imprimirProducto
}