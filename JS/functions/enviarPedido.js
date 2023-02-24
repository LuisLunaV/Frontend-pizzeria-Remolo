const usuarios = [{
    
    "Prod_id": 1,
    "Prod_Nombre": "Jamon y morron",
    "Prod_categoriaID": 1,
    "Prod_TamañoID": 1,
    "Prod_Descripcion": "Pizza con queso, jamon y morron",
    "Prod_imagen": "https://res.cloudinary.com/luisluna1991/image/upload/v1672040960/Pizzeria/u6lgzvbubmzomts8bheu.webp",
    "Prod_status": 1,
    "PD_Cantidad": 1,
    "PD_PrecioUnitario": "79.00"
  
},
{
    "Prod_id": 12,
    "Prod_Nombre": "Agua",
    "Prod_categoriaID": 2,
    "Prod_TamañoID": 3,
    "Prod_Descripcion": "Botella de agua nestle de 1lt",
    "Prod_imagen": "https://res.cloudinary.com/luisluna1991/image/upload/v1672040960/Pizzeria/pfhof6q2k2fhhtk3ytys.webp",
    "Prod_status": 1,
    "PD_Cantidad": 1,
    "PD_PrecioUnitario": "15.00"
  },
  {
    "Prod_id": 15,
    "Prod_Nombre": "Helado",
    "Prod_categoriaID": 3,
    "Prod_TamañoID": 1,
    "Prod_Descripcion": "Postre frío y cremoso hecho a partir de leche, nata, azúcar y chocolate derretido",
    "Prod_imagen": "https://res.cloudinary.com/luisluna1991/image/upload/v1672040960/Pizzeria/tes7auzxbrwfjsq0fmcr.webp",
    "Prod_status": 1,
    "PD_Cantidad": 2,
    "PD_PrecioUnitario": "69.00"
  }
];
export const enviarPedido =( usuarios )=>{
    
    const pedido = JSON.parse( localStorage.getItem('pedidos'));

    console.log(pedido)
};

enviarPedido( usuarios );

