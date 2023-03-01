const modal = document.querySelector(".productos");
const total = document.querySelector('.total-productos');

export const limpiarModalProductos=()=>{
    modal.innerHTML='';
    total.innerHTML="";
};