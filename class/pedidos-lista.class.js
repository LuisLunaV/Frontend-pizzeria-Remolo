export class PedidosLista{

    constructor(){

        this.cargarLocalStorage();
    
    }
    
    nuevoPedido( pedido ){

        this.pedidos.push( pedido );
        this.guardarLocalStorage();
    
    }

    guardarLocalStorage(){

        localStorage.setItem('pedidos', JSON.stringify( this.pedidos ));
   
    }

    cargarLocalStorage(){

        this.pedidos = (localStorage.getItem('pedidos'))
        ? JSON.parse(localStorage.getItem('pedidos'))
        : [];

    }
};