
const tarjetaProductos =()=>{

    const containerButtons = document.querySelector('.card-agregar-pedido');
    const cantidadProducto = document.querySelector('.cantidad-span');

    let contador = 0;

    containerButtons.addEventListener('click',( event )=>{
        const plusMinus = event.target.closest('.button-card');
        
        if( plusMinus ){
            
            const signo = plusMinus.dataset.value;

            if( signo === '+'){
                contador++;
                cantidadProducto.innerText = contador;
            }

            if( signo === '-'){
                contador--;
                if(contador<1) contador = 0;
                cantidadProducto.innerText = contador;
            }


        };


    });
}


export{
    tarjetaProductos
}