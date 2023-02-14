const modal = document.querySelector(".productos");
export const htmlPedido = ({Prod_id, Prod_Nombre, Prod_categoriaID, Prod_Descripcion, Prod_imagen, precio_Unitario }) =>{
    
    const html = `
    <div class="card" data-value='${ Prod_categoriaID }'>
    <div class="card-img" >
      <img src="${Prod_imagen}" alt="img_producto">
    </div>

    <div class="card-contenido" data-value='${ Prod_id }'>
    <div class="card-info">
      <p class="text-title">${Prod_Nombre}</p>
      <p class="text-body">${Prod_Descripcion}</p>
    </div>
    <div class="card-footer-pedido">
    <span class="text-title">$${ precio_Unitario }</span>
    <div class="card-button-eliminar">
    <input class='button-eliminar' type="button" value="Eliminar" />
  </div>
  </div>
</div>
</div>
    `;

modal.innerHTML += html;
};
