export const alertaCarritoVacio=()=>{
    Swal.fire({
        title:'¡Ups! Parece que tu carrito está vacio',
        text:'Por favor, seleccione el producto que desee para completar su pedido.',
        icon:'info',
        customClass: {
            popup:'popup-alert',
            title: 'title-alert',
            icon: 'icon-alert',
            htmlContainer:'info-content-alert',
            confirmButton: 'confirmButton-alert',
          }
    });
};
