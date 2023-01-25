import { getCategorias } from "../index.js";

const ulList = document.querySelector(".ulList");

const htmlCategorias = ({ Categoria_Id, Categoria_Descripcion }) => {
  
    const html = `<li class="item item-pizza blur-in-expand" data-value="${ Categoria_Id }">
    <div class="img-categoria">
      <img src="./assets/categorias/${ Categoria_Descripcion }.png" alt="img-pizza" />
    </div>
    <div class="nombre-categoria">
      <p>${ Categoria_Descripcion }</p>
    </div>
  </li>`;

  ulList.innerHTML += html;
  
};

const obtenerCategorias = async () => {

  const categoria = await getCategorias();

  categoria.forEach((categoria)=>{
    /*  
    Si existe registro del cliente en localstorage mostrar las categorias,
    si no, no hagas nada.
    */ 
  //  if( !localStorage.getItem('cliente') ) return;
   
   /* Imprimimos las categorias*/ 
    htmlCategorias(categoria)

  });
};

export { obtenerCategorias };
