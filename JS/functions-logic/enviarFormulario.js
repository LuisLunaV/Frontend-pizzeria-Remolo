import { postUsuarios, enviarPedido, limpiarModalProductos, ocultarCantidadPedidos, alertaDeFormularioEnviado } from '../index.js';

const total = document.querySelector('.total-productos');

 // Llamamos los datos del formulario, y los guardomos en un objeto, para despues enviarlo a la API. 
export const enviarFormulario = async( form )=>{

    limpiarModalProductos();

    total.innerHTML="";
    
    const formData = {};

    for(let i of form.elements){
        if(i.name.length > 0){
            formData[i.name] = i.value;
        }
    }

    const { usuario } =  await postUsuarios( formData );
    
    enviarPedido( usuario );
    ocultarCantidadPedidos();
    
    alertaDeFormularioEnviado();
    
};