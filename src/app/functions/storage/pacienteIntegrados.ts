export function guardarStorage( carrito  ) {

    localStorage.setItem('carrito',  JSON.stringify( carrito ) );

}


export function total ( total ){
    localStorage.setItem('total', total);
    return localStorage;
}



export function getCarritoStorage(){
    let itemsCarrito = JSON.parse(localStorage.getItem('carrito'));
    return itemsCarrito;
}



export function eliminarStorage(){
    localStorage.removeItem('carrito');
}

  

export function getTotal() {
    let total = JSON.parse( localStorage.getItem('total') );
    return total;
  }


export function setPacienteCotizacion ( paciente ){
    
    localStorage.setItem('pacienteCotizacion' , paciente);

    return localStorage;
    
}
