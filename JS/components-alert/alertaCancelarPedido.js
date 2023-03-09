export const alertaCancelarPedido = async() => {

  const resp = await Swal.fire({
    title: "¿Estás seguro/a que deseas cancelar tu pedido?",
    text: "Recuerda que puedes cambiar de opinión en cualquier momento antes de confirmar la cancelación",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Si, cancelar!",
    cancelButtonText: "No cancelar",


    customClass: {
      popup: "popup-alert",
      title: "title-alert",
      icon: "icon-warning",
      htmlContainer: "info-content-alert",
      confirmButton: 'confirmButtonSucces-alert',
      cancelButton:'cancelButtonWarning-alert'
    },

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado", 
        text:  "Tu pedido ha sido eliminado, ¡pero no te preocupes! Seguiremos siendo amigos de compras.🙂", 
        icon:  "success",

        customClass: {
            popup: "popup-alert",
            title: "title-alert",
            icon: "icon-succes",
            htmlContainer: "info-content-alert",
            confirmButton: 'confirmButtonSucces-alert',
          },
    });
    }

    return result.isConfirmed;
  });

  return resp;
};
