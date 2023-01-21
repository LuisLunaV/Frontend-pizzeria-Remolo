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
            console.log( categoria ) 

        } else throw 'No se pusdo realizar la peticion';

    } catch (error) {
        
        throw error;
        
    }

   
};


export{
    getCategorias
}