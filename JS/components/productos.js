import { getProductos, getPrecios } from "../index.js";

const modal = document.querySelector(".productos");

const htmlProducto = ({ Prod_Nombre, Prod_Descripcion, Prod_imagen, precio_Unitario }) => {
  const html = `
    <div class="card">
    <div class="card-img">
      <img src="${Prod_imagen}" alt="">
    </div>

    <div class="card-contenido">
    <div class="card-info">
      <p class="text-title">${Prod_Nombre}</p>
      <p class="text-body">${Prod_Descripcion}</p>
    </div>
    <div class="card-footer">
    <span class="text-title">$${ precio_Unitario }</span>
    <div class="card-agregar-pedido">

    <div class="card-button">
      <div class="caja border-box button-card" data-value="+">
        <i class="fa-solid fa-plus fa-lg"></i>
    </div>
    
    <div class="caja border-span">
      <span class="cantidad-span">0</span>
    </div>

    <div class="caja border-box button-card" data-value="-">
        <i class="fa-solid fa-minus fa-lg"></i>
    </div>
    </div>

    <div class="card-button-agregar">
      <input type="button" value="Agregar" />
    </div>

  </div>
  </div>
</div>
</div>
    `;

  modal.innerHTML += html; 
};

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

};

export { imprimirProducto };

