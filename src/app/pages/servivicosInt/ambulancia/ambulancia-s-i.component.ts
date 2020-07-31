import { Component, OnInit } from '@angular/core';
import { AmbulanciaService } from 'src/app/services/ambulancia/ambulancia.service';
import { Router} from '@angular/router';
import { BusquedaGeneralService } from '../../../services/busquedas/busquedaGeneral/busqueda-general.service';
import  { getDataStorage, gaurdarCotizacion, getDataCarrito }  from '../../../functions/storage/storage.funcion';
import { getCarritoStorage, guardarStorage, }  from '../../../functions/storage/pacienteIntegrados';


import swal from 'sweetalert';
@Component({
  selector: 'app-ambulancia-s-i',
  templateUrl: './ambulancia-s-i.component.html',
  styleUrls: ['./ambulancia-s-i.component.scss'],
  providers: [AmbulanciaService]

})
export class AmbulanciaSIComponent implements OnInit {

  // data de los servicios
  public ambulanciaSI: any [] = [];
<<<<<<< Updated upstream
  public termino: string;
  public showTableAmbulanacia = true;

  public todosLosServicios = {
    ambulancia: [],
    endoscopia: [],
    laboratorios: [],
    message: "",
    ok:false,
    otrosServicio: [],
    patologia: [],
    rayosX: [],
    tomografia: [],
    ultrasonido: []
  }
=======
>>>>>>> Stashed changes

  // data el usuario de la maquina
  //public role: String;

// data de la cotizacion
public carrito = {
  totalSin: 0,
  totalCon:0,
  items:[]
};

ngOnInit(): void {

  // this.role = getDataStorage().role;

  // aca sugria el problema de la inicializacion de las variables
  this.carrito = getCarritoStorage();

  if( this.carrito == null ){

    this.carrito = {
      totalSin: 0,
      totalCon:0,
      items:[]
    };
 
  }
  this.verDatos();

}


constructor(
  private _ambulanciaService: AmbulanciaService,
  private _router: Router,
  private _buscadorGlobal: BusquedaGeneralService
) { }

restarTotal ( precioSin, precioCon  ) {

  let precioSinTrim  =  precioSin.replace('$', '');
  let precioSinComa = precioSinTrim.replace(',', '');
  // aca le quito la coma si es que trae
  let precioSinMembresiaNumber = parseFloat( precioSinComa );

  let precioConTirm = precioCon.replace('$', '');
  let precioConMembresiaSinComa = precioConTirm.replace(',', '');
    // aca le quito la coma si es que la trae
  let precioConMembresiaNumber = parseFloat( precioConMembresiaSinComa );



    this.carrito.totalCon = this.carrito.totalCon - precioConMembresiaNumber;
    this.carrito.totalSin = this.carrito.totalSin - precioSinMembresiaNumber;


    }


    busquedaGeneral(  ){

      this._buscadorGlobal.getAllDepartments( this.termino )
      .subscribe(  (data:any) => {

        this.todosLosServicios = data;
      
        this.showTableAmbulanacia = false;
        console.log( this.todosLosServicios );

      })
    
      

    }

  sumarTotal(  precioSin, precioCon  ){


  // se le quitan los caracteres $ y , al precio con membresia

    let precioConMembresia  = precioCon.replace('$', '');
    let precioConSinComa  = precioConMembresia.replace(',', '');
    let precioConMembresiaNumber = parseFloat( precioConSinComa );



    // se le quitan los caracteres $ y , al precio sin membresia
    let costoSin = precioSin.replace('$', '');
    let costoSinComa = costoSin.replace(',', '');
    let costoSinNumber = parseFloat( costoSinComa );


    this.carrito.totalSin = this.carrito.totalSin + costoSinNumber;
    this.carrito.totalCon = this.carrito.totalCon + precioConMembresiaNumber;


  }


agregarCarrito( event, item:any ){


  console.log( item );

  if( event.path[1].classList.contains('precioPublico')  ){


    // en esta parte pasamos el precio de día con y sin
    let  estuidio = {

      nombreEstudio: item.DESTINO,
      precioSin: item.PRECIO_PUBLICO_DIA,
      precioCon: item.PRECIO_MEMBRESIA_DIA,
      idEstudio:item._id

  }

  // pasamos el precio redondo día con y sin

    this.sumarTotal(   item.PRECIO_PUBLICO_DIA, item.PRECIO_MEMBRESIA_DIA );

    this.carrito.items.push( estuidio );


  }else if (  event.path[1].classList.contains('precioRedondoDia') )  {

    let  estuidio = {
      nombreEstudio: item.DESTINO,
      precioSin: item.PRECIO_PUBLICO_REDONDO_DIA,
      precioCon: item.PRECIO_MEMBRESIA_REDONDO_DIA ,
      idEstudio:item._id
  }

  this.sumarTotal( item.PRECIO_PUBLICO_REDONDO_DIA, item.PRECIO_MEMBRESIA_REDONDO_DIA );

  this.carrito.items.push( estuidio );

  }else if( event.path[1].classList.contains('precioNoche') ) {


    // evaluamos el precio noche y precio noche sin
    let  estuidio = {

      nombreEstudio: item.DESTINO,
      precioSin: item.PRECIO_PUBLICO_NOCHE,
      precioCon: item.PRECIO_MEMBRESIA_NOCHE,
      idEstudio:item._id

  }

  console.log( estuidio );

    this.sumarTotal( item.PRECIO_PUBLICO_NOCHE, item.PRECIO_MEMBRESIA_NOCHE );
    this.carrito.items.push( estuidio );

}else if( event.path[1].classList.contains('precioRedondoNoche')  ){


  let estudio = {

    nombreEstudio: item.DESTINO,
    precioSin: item.PRECIO_PUBLICO_REDONDO_NOCHE,
    precioCon: item.PRECIO_MEMBRESIA_REDONDO_NOCHE,
    idEstudio:item._id

  }

  this.sumarTotal( item.PRECIO_PUBLICO_REDONDO_NOCHE, item.PRECIO_MEMBRESIA_REDONDO_NOCHE );
  this.carrito.items.push( estudio );
  console.log(this.carrito);
}

  let carritoString = JSON.stringify( this.carrito );


  gaurdarCotizacion( carritoString );
  // this.carrito = getDataCarrito();
  console.log( this.carrito );


}



eliminar( id ){


  this.carrito.items.forEach(  (item, index) => {

    // Agregar algun otro caso que se pueda dar

    if( item.idEstudio  === id ) {

      this.carrito.items.splice( index, 1 )

      if( item.precioSin && item.precioCon ){

        this.restarTotal( item.precioSin, item.precioCon );

      }else if( item.precioNoche ){

            this.restarTotal( item.precioNoche, item.precioNoche );
      }
    }

  } );

      let  carritoString = JSON.stringify( this.carrito  );

      gaurdarCotizacion(  carritoString );

}


  // filterPost = '';

  verDatos(){
    this._ambulanciaService.getDestino().subscribe(
      (res:any) => {
        console.log( res );
        this.ambulanciaSI = res.servicios;
      },
      err => {
        console.log(<any>err);

      }
    );
<<<<<<< Updated upstream
=======

  }
>>>>>>> Stashed changes

  }


<<<<<<< Updated upstream
=======
  alertcomparasion( ev, precioPublico, precioMembresia, item2:any ){
    this.agregarCarrito(ev, item2);
>>>>>>> Stashed changes

  alertcomparasion( ev, precioPublico, precioMembresia, item2:any ){
   
    let precioSinTrim  =  precioPublico.replace('$', '');
    let precioSinComaPublico = precioSinTrim.replace(',', '');


    let precioMemTrim  =  precioMembresia.replace('$', '');
    let precioMemComaMembresia = precioMemTrim.replace(',', '');

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    swal({ title: `Con la memebresia ahorras ${ precioSinComaPublico - precioMemComaMembresia }`    ,icon: 'success' });

  }

  showAlert(){
    swal({title: "Estas seguro de contratar a este destino?",
    text: "El servicio de ambulancia solo será requerido para dicho destino, no puede haber cambios",
    icon: "warning",
    buttons: {
      cancel: {
        text: "Cancelar",
        value: null,
        visible: true,
        className: "",
        closeModal: true,
      },
      confirm: {
        text: "OK",
        value: true,
        visible: true,
        className: "",
        closeModal: true
      }
    },
    dangerMode: true,
  })
  .then((value) => {
    console.log( value );
    if (value) {
      swal("Vamos a llenar el papeleo!", {
        icon: "success",
      });

      this._router.navigateByUrl('/hoja-fram');
    } else if( value == null ) {
      swal("Tranquilo, Puedes intentar contratar algun otro destino!", {
        icon: "error",
      });
    }});

  }

  editarAmbulancia(){
    swal({title: "Estas seguro de Editar este destino?",
    text: "Una vez que se haya editado el destino, no se podrá recuperar",
    icon: "warning",
    buttons: [true, true],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Vamos a Actualizarlo!", {
        icon: "success",
      });
    } else if (willDelete == null){
      swal("Tranquilo, el destino sigue estando ahí..", {
        icon: "error",
      });
      this._router.navigateByUrl('/ambulancia');
    }});

  }

  eliminarAmbulancia(){
    swal({title: "Estas seguro de Eliminar este destino?",
    text: "Una vez que se haya eliminado el destino, no se podrá recuperar",
    icon: "warning",
    buttons: {
      cancel: {
        text: "Cancel",
        value: true,
        visible: false,
        className: "",
        closeModal: true,
      },
      confirm: {
        text: "OK",
        value: false,
        visible: true,
        className: "",
        closeModal: true
      }
    } ,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {

      swal("Destino Eliminado con Éxito!", {
        icon: "success",
      });
    } else {
      swal("Tranquilo, el destino sigue estando ahí..", {
        icon: "error",
      });
    }})

  }

  delete(id) {
    this._ambulanciaService.delete(id).subscribe(
      response => {

        swal("Registro Eliminado!", "Este registro no se podrá ver más", "error");
        this.verDatos();
        this._router.navigateByUrl('/ambulancia');
      },
      error => {
        console.log(error);

      }
    );
  }



}
