
const tarjetaProductos =()=>{

    const cardProducto = document.querySelectorAll('.card');
    
    /**
     * Realizamos un forEach para seleccionar todas las tarjetas con la clase '.card'
     * y agregarle el evento 'Click' a cada una de ellas.
     */
    cardProducto.forEach( tarjeta =>{

    const cantidadProducto = tarjeta.querySelector('.cantidad-span');

    let contador = 0;

    tarjeta.addEventListener('click',( event )=>{

        const btnPlusMinus = event.target.closest('.button-card');
        const btnAgregar   = event.target.closest('.button-agregar');
        
        if( btnPlusMinus ){
            
            const signo = btnPlusMinus.dataset.value;

            if( signo === '+'){
                contador++;
                cantidadProducto.innerText = contador;
            }

            if( signo === '-'){
                contador--;
                contador = contador < 1 ? 0 : contador;
                cantidadProducto.innerText = contador;
            }


        };

        if( btnAgregar ){

            const elementoCateg  = event.target.closest('.card');
            const elementoProd   = event.target.closest('.card-contenido');
            
            const categID = elementoCateg.dataset.value;
            const prodID  = elementoProd.dataset.value;

            const listaProd = localStorage.getItem(`producto-${ categID }`);
           
            const { producto } = JSON.parse( listaProd );

            const agregar = producto.filter( producto => {
            
            if( prodID == producto.Prod_id){
                
                return producto;
            }
           });


           const guardarProducto =  agregar.map(index =>{
            return{
                ...index,
                cantidad:contador
            }
           })

           console.log( guardarProducto )

        }


    });
    })

}


export{
    tarjetaProductos
}