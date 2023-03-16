export const alertaDeFormularioEnviado=()=>{
    Swal.fire({
        title: 'Pedido confirmado',
        text: '¡Su pizza acaba de salir del horno! Nuestro repartidor local la llevará directamente hasta su puerta 🍕🏠👨‍🍳',
        icon: 'success',
        
        customClass: {
            popup: "popup-alert",
            title: "title-alert",
            icon: "icon-succes",
            htmlContainer: "info-content-alert",
            confirmButton: 'cancelButtonWarning-alert',
          },
    })
};