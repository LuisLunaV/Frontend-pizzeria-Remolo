export class PedidosLista{

    constructor(){
        this.pedidos = [];
    }
    
    nuevoPedido( pedido ){
        console.log(pedido)
        this.pedidos.push( pedido );
    }

    verPedido(){
        
    }
}