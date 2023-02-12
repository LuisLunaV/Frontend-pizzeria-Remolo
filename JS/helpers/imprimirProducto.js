import { getProductos, agregarPrecio, htmlProducto, tarjetaProductos } from '../index.js';

const modal = document.querySelector(".productos");


const imprimirProducto = async (id) => {
    /**
     * Con la instruccion modal.innerHTML = ''; vaciamos todo el contenido del
     * elemento modal, antes de imprimir unas nuevas targeta.
     */
    modal.innerHTML = "";
  
   /**
    * Obtenemos la informacion de las APIS 
    */
    const { producto } = await getProductos(id);
    
    /**
     * Agregamos precios a los productos
     */
    const productosConPrecio = await agregarPrecio( producto );
     /**
     * Obtenemos la informacio de los productos y el precio para mandarlos a imprimir en el DOM.
     */
    productosConPrecio.forEach( htmlProducto );
  
    /**
     * Ejecutamos las funciones de la tarjeta del producto, catntidad de productos (Botones: "+", "-")
     * y agregar el producto al carrito (Boton: "Agregar").  // Utils/cardProducts.js
     */
     tarjetaProductos();
  };
  
export{
    imprimirProducto
}