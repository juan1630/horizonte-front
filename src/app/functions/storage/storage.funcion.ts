

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

     console.log(carritoJson );

     if( carritoJson === null || carritoJson === undefined || carritoJson === "" ){

         return carritoJson =  {
               totalSin: 0,
               totalCon:0,
               items:[]
             };
             
     }else {
          return carritoJson;
     }
     

}


export function eliminarTodoPedido (  ) {

     return localStorage.removeItem('carrito');

}  



export function eliminarUnElemento ( ) {}


///////////////////////////////////////////////
// FUNCIÓN PARA invocar LOS PACIENTES EN LA HOJA DE ENFERMERÍA XD
//////////////////////////////////////////////
export function getPacienteStorage() {
     let pacienteSt = [];
     pacienteSt = JSON.parse(localStorage.getItem('paciente'));
     return pacienteSt;
}


///////////////////////////////////////////////
// FUNCIÓN PARA ALMACENAR LOS PACIENTES EN LA HOJA DE ENFERMERÍA XD
//////////////////////////////////////////////

export function guardarPacienteStorage( paciente ) {
     
     return localStorage.setItem( 'paciente', paciente);
}

///////////////////////////////////////////////
// FUNCIÓN PARA ELIMINAR LOS PACIENTES EN LA HOJA DE ENFERMERÍA XD
//////////////////////////////////////////////
export function eliminarPacienteStorage ( ) {

     return localStorage.removeItem('paciente');

}  
