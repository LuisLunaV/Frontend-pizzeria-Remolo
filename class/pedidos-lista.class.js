export class PedidosLista{

    constructor(){
        
        this.cargarLocalStorage();
    
    }
    
    nuevoPedido( pedido ){

        this.pedidos.push( pedido );
        this.guardarLocalStorage();
    
    }

    /**
     *Este codigo asegura de que el valor en el localStorage correspondiente a "pedidos" 
     sea eliminado antes de cargar la lista de pedidos en la variable this.pedidos
     */
    limpiarLocalStorage(){

    const pedidos = JSON.parse(localStorage.getItem('pedidos'));
    if (pedidos) {
    localStorage.removeItem('pedidos');
     }
     this.pedidos = [];
     
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