import { getProductos, getPrecios, htmlProducto, tarjetaProductos } from '../index.js';

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
    const { precio } = await getPrecios();
  
    /**
     * Utilizamos una estructura de datos tipo dicionarioa para agregar los precios a
     * los productos.
     * Este código crea un mapa con los precios asociados a cada identificador de 
     * producto, y luego utiliza el método map para recorrer el arreglo de productos y 
     * agregar el precio correspondiente a cada producto en el nuevo arreglo 
     * productosConPrecio.
     */
    const mapPrecios = await precio.reduce((obj, precio)=>{
      obj[precio.Precio_ProdID] = precio.Precio_Unitario;
      return obj;
    }, {});
  
    const productosConPrecio = await producto.map( producto => {
  
      return {
        ...producto,
        precio_Unitario: mapPrecios[ producto.Prod_id ]
      }
    });
    
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