const contadorPedido = document.querySelector('.car-shoping');

export const mostrarCantidadDelPedido=()=>{
    
    const cantidad = JSON.parse(localStorage.getItem('pedidos'));
    const contador = contadorPedido.firstElementChild;

    if(!cantidad)return;
    
    if( cantidad.length>0){
        contadorPedido.classList.add('mostrar-contador')
    }
    
    contador.innerText = cantidad.length;

};