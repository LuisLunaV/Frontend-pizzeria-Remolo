import { htmlTotal } from '../index.js';

/**
 * Obtenemos los precios de los productos seleccionados y guardados en el
 * localStorage, los sumamos e imprimimos en el DOM.
 */
export const sumarTotal = ( ) =>{

const pedidos = JSON.parse( localStorage.getItem('pedidos'));

const precios = [];

pedidos.forEach(({PD_Cantidad, PD_PrecioUnitario }) => {
    precios.push( PD_Cantidad* PD_PrecioUnitario);
});

const total = precios.reduce((acc, valor)=>{
   return acc = acc + valor
},0)

//Enviamos la cantidad a imprimir en el DOM.
htmlTotal( total );

return total;

};
