import { pedido, agregarPrecio, mostrarCantidadDelPedido } from '../index.js';

export const agregarProducto= async( event , contador )=>{
        // Obtenemos los lementos que contengan los data-value de categorias y productos.
        const elementoCateg = event.target.closest(".card");
        const elementoProd = event.target.closest(".card-contenido");

        // Extraemos los valores "id" de los elementos anteriores.
        const categID = elementoCateg.dataset.value;
        const prodID = elementoProd.dataset.value;

        /**
         * Buscamos la lista de productos por categoria en el localStorage donde se guardo la informacion
         * de la api.
         */
        const listaProd = localStorage.getItem(`producto-${categID}`);

        const { producto } = JSON.parse(listaProd);

        //Buscamos el producto seleccionado
        const obtenerProducto = producto.filter((producto) => {
          if (prodID == producto.Prod_id) {
            return producto;
          }
        });

        /**
         * Destructuramos el objeto del producto obtenido y le agregamos la nueva propiedad "cantidad", donde se
         * agregara el valor del contador, y devolvemos el objeto.
         */
        const productoSinPrecio = obtenerProducto.map((index) => {
          return {
            ...index,
            PD_Cantidad: contador,
          };
        });

        //Agregamos el precio al producto seleccionado del pedido
        const productoConPrecio = await agregarPrecio(productoSinPrecio);

        /**
         * Realizamos una destructuracion de arreglos para obtener el primer elemento del mismo,
         * y lo guardamos en la constante "productoGuardado".
         * Equivale a: const productoGuardado = guardarProducto[0];
         */
        const [productoGuardado] = productoConPrecio;

        //Creamos nuestro pedido.
        pedido.nuevoPedido(productoGuardado);


        //Mostramos la cantidad de pedidos realizados
        mostrarCantidadDelPedido();
};