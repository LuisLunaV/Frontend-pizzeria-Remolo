import { getProductos, agregarPrecio, htmlProducto, tarjetaProductos, limpiarModalProductos } from '../index.js';



const imprimirProducto = async (id) => {
    /**
     * Con esta funcion vaciamos todo el contenido del elemento modal productos, antes de imprimir 
     * unas nuevas tarjetas.
     */
    limpiarModalProductos()
  
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