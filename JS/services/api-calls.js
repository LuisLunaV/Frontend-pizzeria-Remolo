//URL de la api que vamos a utilizar.
const url = 'https://backend-pizzeria-remolo-production.up.railway.app';

//Guardamos en un objeto las rutas que vamos a utilizar en la api.
const { usuarios, categorias, productos, pedidos, precios } = {
    usuarios:  '/api/usuarios',
    categorias:'/api/categorias',
    productos: '/api/productos',
    pedidos:   '/api/pedidos',
    precios:   '/api/precios'
};


/**
 * Llamamos todas las categorias almacenadas en la BD.
 * Implementamos el alamacenamiento en cache
 */
const getCategorias =  async()=>{

    // Primero, verificamos si el producto ya se encuentra en la caché
    const categoria = localStorage.getItem( 'categorias' );

    if( categoria ){
        // Si el producto ya se encuentra en la caché, lo devolvemos
       return JSON.parse( categoria );
    }

    try {
        
        const resp = await fetch(`${ url }${ categorias }`);
        
        if ( resp.ok ) {
         // Si la petición al servidor es exitosa, almacenamos el producto en la caché.
            const data = await resp.json();
            localStorage.setItem('categorias', JSON.stringify( data ))
            
            return data;

        } else throw 'No se pusdo realizar la peticion';

    } catch (error) {
        
        throw error;
        
    }

   
};

/**
 * Obtenemos los productos relacionados por el id de la categoria enviada.
 * Implementamos el almacenamiento en cache para mejorar el rendimiento
 * en la aplicacion, y asi evitar las peticiones inecesarias al servidor.
 */

const getProductos = async( id ) =>{
 
    // Primero, verificamos si el producto ya se encuentra en la caché
    const producto = localStorage.getItem(`producto-${id}`);
    
    if(producto){

        // Si el producto ya se encuentra en la caché, lo devolvemos
        return JSON.parse(producto);
    } 

    try {
 
        const resp = await fetch(`${ url }${ productos }/${ id }`);
        
        if( resp.ok ){
         // Si la petición al servidor es exitosa, almacenamos el producto en la caché.
            const data = await resp.json();
            localStorage.setItem(`producto-${id}`, JSON.stringify( data ));

            return data;
        
        } else throw new Error('No se pudo realizar la peticion');
    
    } catch (error) {
    
        throw error;
    
    }
}

/**
 * Llamamos la informacion de la tabla precios de los productos
 */

const getPrecios = async() => {
    
    const precio = localStorage.getItem('precios')

    if( precio ) return JSON.parse( precio );

    try {
        const resp = await fetch(`${ url }${ precios }`);

        if( resp.ok ){
            const data = await resp.json();

            localStorage.setItem('precios', JSON.stringify( data ));

            return data;
        }
        
    } catch (error) {
        throw error
    }
};

export{
    getCategorias,
    getProductos,
    getPrecios
}