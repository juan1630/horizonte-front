import { Component, OnInit } from '@angular/core';
import { AmbulanciaService } from 'src/app/services/ambulancia/ambulancia.service';
import { Router} from '@angular/router';
import swal from 'sweetalert';

import  { getDataStorage, gaurdarCotizacion, eliminarTodoPedido, getDataCarrito }  from '../../../functions/storage/storage.funcion';

import { getCarritoStorage, }  from '../../../functions/storage/pacienteIntegrados';
import { Estudios } from 'src/app/intefaces/estudiosLaboratorio';

@Component({
  selector: 'app-ambulancia-s-i',
  templateUrl: './ambulancia-s-i.component.html',
  styleUrls: ['./ambulancia-s-i.component.scss'],
  providers: [AmbulanciaService]

})
export class AmbulanciaSIComponent implements OnInit {

  // data de los servicios
  public ambulanciaSI: any [] = [];
  
  // data el usuario de la maquina 
  public role: String;

// data de la cotizacion 
public carrito = {
  totalSin: 0,
  totalCon:0,
  items:[]

};

ngOnInit(): void {
  
  this.role = getDataStorage().role;
  this.carrito = getCarritoStorage();
  
  this.verDatos();
  
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


agregarCarrito( event, item: Estudios ){
    
  if( event.path[1].classList.contains('precioPublico')  ){ 
  
    let  estuidio = {

      nombreEstudio: item.ESTUDIO,
      precioSin: item.PUBLICO,
      precioCon: item.MEMBRESIA,
      entrega: item.ENTREGA,
      idEstudio:item._id
      
  }

    this.sumarTotal( item.PUBLICO, item.MEMBRESIA );

    this.carrito.items.push( estuidio );
    

  }else if (  event.path[1].classList.contains('precioNoche') )  {

    let  estuidio = {
      nombreEstudio: item.ESTUDIO,
      precioNoche: item.NOCTURNO,
      entrega: item.ENTREGA,
      idEstudio:item._id
  }

  this.sumarTotal( item.NOCTURNO, item.NOCTURNO );

  this.carrito.items.push( estuidio );
  
  }else if( event.path[1].classList.contains('urgencia') ) {

    let  estuidio = {

      nombreEstudio: item.ESTUDIO,
      precioUrgenciaMembresia: item.URGENCIA_MEM,
      precioUrgenciaPublico: item.URGENCIA_PUB,
      entrega: item.ENTREGA,
      idEstudio:item._id

  }

    this.sumarTotal( item.URGENCIA_PUB, item.URGENCIA_MEM );
    this.carrito.items.push( estuidio );
    
}
  
  let carritoString = JSON.stringify( this.carrito );


  gaurdarCotizacion( carritoString );
  this.carrito = getDataCarrito();
  console.log( this.carrito );
  

}

 
  constructor(
    private _ambulanciaService: AmbulanciaService,
    private _router: Router
  ) { }
  // filterPost = '';

  verDatos(){
    this._ambulanciaService.getDestino().subscribe(
      res => {
        this.ambulanciaSI = res.servicios;
        // console.log(res);
        
      },
      err => {
        console.log(<any>err);
        
      }
    );
  
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
