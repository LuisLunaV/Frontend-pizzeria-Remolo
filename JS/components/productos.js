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
    <div class="card-button">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
      </svg>
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
   * Obtenemos la informacio de los productos y los mandamos a imprimir
   * al DOM.
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
  const mapPrecios = await precio.reduce((map, precio)=>{
    map[precio.Precio_ProdID] = precio.Precio_Unitario;
    return map;
  }, {});

  const productosConPrecio = await producto.map( producto => {

    return {
      ...producto,
      precio_Unitario: mapPrecios[ producto.Prod_id ]
    }
  });

  productosConPrecio.forEach( htmlProducto );

};

export { imprimirProducto };

