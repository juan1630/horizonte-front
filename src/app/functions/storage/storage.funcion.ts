

// esta funcion nos retorna del localstorage los datos de la sesson



export function getDataStorage(){
     
     let usuarioStorage = JSON.parse(localStorage.getItem('usuario'));
     return usuarioStorage;     
     }


//====================================================================
//             FUNCION QUE GUARDA EN EL STORAGE LA COTIZACION 
//=====================================================================



export function gaurdarCotizacion( carrito) {

     // lista de cosas que debe de guardarse en el localstorage
     // PRECIO SIN MEMBRESIA, PRECIO CON MEMBRESIA, NOMBRE
     // LAS INDICACIONES SE MUESTRAN HASTA EL FINAL, LOS DÍAS 

     return localStorage.setItem('carrito',  carrito);
      
}


export  function getDataCarrito() {

     let carritoJson = JSON.parse( localStorage.getItem('carrito'));

     if( carritoJson === null || carritoJson === undefined ){
          carritoJson =  {
               totalSin: 0,
               totalCon:0,
               items:[]
             };
             
     }else {
          return carritoJson;
     }
     
     return carritoJson;

}


export function eliminarTodoPedido (  ) {

     return localStorage.removeItem('carrito');

}  



export function eliminarUnElemento ( ) {}

