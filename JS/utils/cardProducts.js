import { pedido } from '../index.js';
const tarjetaProductos =()=>{

    const cardProducto = document.querySelectorAll('.card');
    
    /**
     * Realizamos un forEach para seleccionar todas las tarjetas con la clase '.card'
     * y agregarle el evento 'Click' a cada una de ellas.
     */
    cardProducto.forEach( tarjeta =>{

    const cantidadProducto = tarjeta.querySelector('.cantidad-span');

    /**
     * La variable contador es la cantidad de productos necesarios.
     */
    let contador = 1;

    tarjeta.addEventListener('click',( event )=>{

        /**
         * Obtenemos los elementos de los botones '+','-' y 'Agregar' de la tarjeta del producto.
         */
        const btnPlusMinus = event.target.closest('.button-card');
        const btnAgregar   = event.target.closest('.button-agregar');
        
        /** 
         * Validamos que los botones '+'y'-' hayan sido presionado, y dependiendo el boton, se sumara 1 o restara 1 a la
         *  variable contador.
        */
        if( btnPlusMinus ){
            
            const signo = btnPlusMinus.dataset.value;

            if( signo === '+'){
                contador++;
                cantidadProducto.innerText = contador;
            }

            if( signo === '-'){
                contador--;
                contador = contador < 1 ? 1 : contador;
                cantidadProducto.innerText = contador;
            }


        };

        if( btnAgregar ){
            /**
             * Obtenemos los lementos que contengan los data-value de categorias y productos.
             */
            const elementoCateg  = event.target.closest('.card');
            const elementoProd   = event.target.closest('.card-contenido');
            
            /**
             * Extraemos los valores "id" de los elementos anteriores.
             */
            const categID = elementoCateg.dataset.value;
            const prodID  = elementoProd.dataset.value;

            /**
             * Buscamos la lista de productos por categoria en el localStorage donde se guardo la informacion 
             * de la api.
             */
            const listaProd = localStorage.getItem(`producto-${ categID }`);
           
            const { producto } = JSON.parse( listaProd );

            /**
             * Buscamos el producto seleccionado
             */
            const obtenerProducto = producto.filter( producto => {
            
            if( prodID == producto.Prod_id){
                
                return producto;
            }
           });


           /**
            * Destructuramos el objeto del producto obtenido y le agregamos la nueva propiedad "cantidad", donde se
            * agregara el valor del contador, y devolvemos el objeto.
            */
           const guardarProducto =  obtenerProducto.map(index =>{
            return{
                ...index,
                PD_Cantidad:contador
            }
           });

           /**
            * Realizamos una destructuracion de arreglos para obtener el primer elemento del mismo,
            * y lo guardamos en la constante "productoGuardado".
            * Equivale a: const productoGuardado = guardarProducto[0]; 
            */
           const [ productoGuardado ] = guardarProducto;
           
           //Creamos nuestro pedido.
           pedido.nuevoPedido( productoGuardado );


        }


    });
    })

}


export{
    tarjetaProductos
}