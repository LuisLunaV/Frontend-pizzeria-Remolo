export const alertaSalidaDelFormulario = async() =>{
   const resp = await Swal.fire({
        title: "¿Esta seguro que desea salir del formulario?",
        // text: "Recuerda que puedes cambiar de opinión en cualquier momento antes de confirmar la cancelación",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Salir",
        cancelButtonText: "No",
    
    
        customClass: {
          popup: "popup-alert",
          title: "title-info",
          icon: "icon-question",
          htmlContainer: "info-content-alert",
          confirmButton: 'confirmButtonFormSucces-alert',
          cancelButton:'cancelButtonFormWarning-alert'
        },
    
      }).then((result) => {
        return result.isConfirmed;
      });

      return resp;
};