
 // Llamamos los datos del formulario, y los guardomos en un objeto, para despues enviarlo a la API.
 
export const enviarFormulario =( form )=>{

    const formData = {};

    for(let i of form.elements){
        if(i.name.length > 0){
            formData[i.name] = i.value;
        }
    }


    const pedido =JSON.parse( localStorage.getItem('pedidos') );
    pedido.forEach(element => {
        console.log(element)
    });

};