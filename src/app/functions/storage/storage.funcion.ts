

// esta funcion nos retorna del localstorage los datos de la sesson



export function getDataStorage(){
     
     let usuarioStorage = JSON.parse(localStorage.getItem('usuario'));
     return usuarioStorage;     
     }


     export function guardarStorage( carrito  ) {

          localStorage.setItem('carrito',  JSON.stringify( carrito ) );

     }

     export function total ( total ){
         localStorage.setItem('total', total);
         return localStorage;
     }

     export function getTotal() {
       let total = JSON.parse( localStorage.getItem('total') );
       return total;
     }

     export function getCarritoStorage(){
          let itemsCarrito = JSON.parse(localStorage.getItem('carrito'));
          return itemsCarrito;
     }

     // export function eliminarUnUItem(id){

     //      let itemsCarrito:any[] = [];

     //       itemsCarrito = JSON.parse(localStorage.getItem('carrito'));

     //      itemsCarrito.filter( item => {

     //           return  item._id != id;

     //      } );

     // }


     export function eliminarStorage(){
          localStorage.removeItem('carrito');
     }