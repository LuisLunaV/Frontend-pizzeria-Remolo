
const tarjetaProductos =()=>{

    const containerButtons = document.querySelectorAll('.card-agregar-pedido');
    
    /**
     * Realizamos un forEach para seleccionar todas las tarjetas con la clase '.card-agregar-pedido'
     * y agregarle el evento 'Click' a cada una de ellas.
     */
    containerButtons.forEach( tarjeta =>{

    const cantidadProducto = tarjeta.querySelector('.cantidad-span');

    let contador = 0;

    tarjeta.addEventListener('click',( event )=>{
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
    })

}


export{
    tarjetaProductos
}