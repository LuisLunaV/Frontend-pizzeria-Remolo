import { getCategorias } from "../index.js";

const ulList = document.querySelector(".ulList");

const htmlCategorias = ({ Categoria_Id, Categoria_Descripcion }) => {
  
    const html = `<li class="item item-pizza">
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

  categoria.forEach(htmlCategorias);
};

export { obtenerCategorias };
