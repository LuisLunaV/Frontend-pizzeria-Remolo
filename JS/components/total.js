const total = document.querySelector('.total-productos');
export const htmlTotal =( cantidad )=>{

    const html = `
    <div class="total-cabecera"><h1>Total a pagar</h1></div>
    <div class="total-cantidad"><h2>$<span>${ cantidad }</span></h2></div>
    <div class="total-buttons">
      <input class="btn-succes" type="button" value="Pagar">
      <input class="btn-danger" type="button" value="Cancelar">
    </div>`

    total.innerHTML = html;

};