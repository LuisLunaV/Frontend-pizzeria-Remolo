import { getPrecios } from '../index.js';

/**
     * Utilizamos una estructura de datos tipo dicionarioa para agregar los precios a
     * los productos.
     * Este código crea un mapa con los precios asociados a cada identificador de 
     * producto, y luego utiliza el método map para recorrer el arreglo de productos y 
     * agregar el precio correspondiente a cada producto en el nuevo arreglo 
     * productosConPrecio.
     */

export const agregarPrecio = async( producto )=>{
    
    const { precio } = await getPrecios();
    
    const mapPrecio = await precio.reduce(( acc, precio ) => {
        acc[precio.Precio_ProdID] = precio.Precio_Unitario;
        return acc;
    }, {});

    const pedidosConPrecio = producto.map( producto =>{
        return{
            ...producto,
            precio_Unitario: mapPrecio[ producto.Prod_id ]
        }
    });

    return pedidosConPrecio;
};