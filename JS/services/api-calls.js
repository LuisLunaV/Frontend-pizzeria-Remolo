//URL de la api que vamos a utilizar.
const url = 'https://backend-pizzeria-remolo-production.up.railway.app';

//Guardamos en un objeto las rutas que vamos a utilizar en la api.
const { usuarios, categorias, productos, pedidos } = {
    usuarios:  '/api/usuarios',
    categorias:'/api/categorias',
    productos: '/api/productos',
    pedidos:   '/api/pedidos'
};

//Llamamos las categorias.
const getCategorias =  async()=>{

    try {
        
        const resp = await fetch(`${ url }${ categorias }`);
        
        if ( resp.ok ) {
            
            const { categoria } = await resp.json();
            
            return categoria;

        } else throw 'No se pusdo realizar la peticion';

    } catch (error) {
        
        throw error;
        
    }

   
};

/**
 * Obtenemos los productos relacionados por el id de la categoria enviada.
 */

const getProductos = async( id ) =>{
    try {
        const resp = await fetch(`${ url }${ productos }/${ id }`);
        
        if( resp.ok ){
        
            const { producto } = await resp.json();
    
            return producto;
        
        } else throw new Error('No se pudo realizar la peticion');
    
    } catch (error) {
    
        throw error;
    
    }
}
export{
    getCategorias,
    getProductos
}