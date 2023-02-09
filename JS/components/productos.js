const modal = document.querySelector(".productos");

const htmlProducto = ({Prod_id, Prod_Nombre, Prod_categoriaID, Prod_Descripcion, Prod_imagen, precio_Unitario }) => {
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
    <div class="card-footer">
    <span class="text-title">$${ precio_Unitario }</span>
    <div class="card-agregar-pedido">

    <div class="card-button">
      <div class="caja border-box button-card" data-value="+">
        <i class="fa-solid fa-plus fa-lg"></i>
    </div>
    
    <div class="caja border-span">
      <span class="cantidad-span">1</span>
    </div>

    <div class="caja border-box button-card" data-value="-">
        <i class="fa-solid fa-minus fa-lg"></i>
    </div>
    </div>

    <div class="card-button-agregar">
      <input class='button-agregar' type="button" value="Agregar" />
    </div>

  </div>
  </div>
</div>
</div>
    `;

  modal.innerHTML += html; 
};

export { htmlProducto };

