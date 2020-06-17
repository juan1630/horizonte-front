import { Component, OnInit } from '@angular/core';
import { XrayService } from 'src/app/services/xray/xray.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { getDataStorage, getDataCarrito, gaurdarCotizacion  } from '../../../functions/storage/storage.funcion';

import swal from 'sweetalert';
import { Estudios } from 'src/app/intefaces/estudiosLaboratorio';
import { EnvioEmailService } from 'src/app/services/cotizacion/envio-email.service';
@Component({
  selector: 'app-xray-s-i',
  templateUrl: './xray-s-i.component.html',
  styleUrls: ['./xray-s-i.component.scss'],
  providers: [XrayService]
})
export class XraySIComponent implements OnInit {

  public xraySI: any [] = [];
  public role:string;
  public show: string = 'hidden';
  public email: string;

  // data de la cotizacion 
public carrito = {
  totalSin: 0,
  totalCon:0,
  items:[]

};


  constructor(
    private _xrayService: XrayService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _emailService: EnvioEmailService,

  ) {
    const desc = 50;
   }

  ngOnInit(): void {
    
    this.verDatos();
    this.role = getDataStorage().role;
    this.carrito = getDataCarrito();
    console.log( this.carrito );
  }

  verDatos(){
    this._xrayService.getEstudioXray().subscribe(
        res => {
          console.log( res );
          this.xraySI = res.estudios;
          // console.log(res);
          
        },
        err => {
          console.log(<any>err);
          
        }
      );
  }


 



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


    
cerrarModal(){

  this.show = 'hidden'

}


abrirInputCorreo(){
    
  this.show = 'show';
}


 // FUNCION QUE SACA EL TOTAL SIN MEMBRESIA

 sumarTotal(  precioSin, precioCon  ){


  console.table({
    precioSin, 
    precioCon 
  })

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


  // FUNCION QUE AGREGA AL CARRITO UN ELEMENTO NUEVO

  agregarCarrito( event, item: any ){

    
    if( event.path[1].classList.contains('precioPublico')  ){ 
    
      let  estuidio = {

        nombreEstudio: item.ESTUDIO,
        precioSin: item.PRECIO_PUBLICO,
        precioCon: item.PRECIO_MEMBRESIA,
        idEstudio:item._id
    }

      this.sumarTotal( item.PRECIO_PUBLICO,  item.PRECIO_MEMBRESIA );

      this.carrito.items.push( estuidio );
      

    } else if( event.path[1].classList.contains('precioPublicoUrgencia') ) {

      let  estuidio = {

        nombreEstudio: item.ESTUDIO,
        precioSin: item.PRECIO_PUBLICO_URGENCIA,
        precioCon: item.PRECIO_MEMBRESIA_URGENCIA,
        departamento: item.name,
        idEstudio:item._id

    }

      this.sumarTotal( item.PRECIO_PUBLICO_URGENCIA, item.PRECIO_MEMBRESIA_URGENCIA );

      this.carrito.items.push( estuidio );
      
  }else if( event.path[1].classList.contains('precioPublicoHospitalizacion')  ){



    let  estuidio = {

      nombreEstudio: item.ESTUDIO,
      precioSin: item.PRECIO_PUBLICO_HOSPITALIZACION,
      precioCon: item.PRECIO_MEMBRESIA_HOSPITALIZACION,
      departamento: item.name,
      idEstudio:item._id

  }

    this.sumarTotal( item.PRECIO_PUBLICO_HOSPITALIZACION, item.PRECIO_MEMBRESIA_HOSPITALIZACION );

    this.carrito.items.push( estuidio );

  }else if( event.path[1].classList.contains('precioPublicoHospitalizacionUrgencia')   ){

    
    let  estuidio = {

      nombreEstudio: item.ESTUDIO,
      precioSin: item.PRECIO_PUBLICO_HOSPITALIZACION_URGENCIA,
      precioCon: item.PRECIO_HOSPITALIZACION_URGENCIA_MEMBRESIA,
      departamento: item.name,
      idEstudio:item._id

  }

    this.sumarTotal( item.PRECIO_PUBLICO_HOSPITALIZACION_URGENCIA, item.PRECIO_HOSPITALIZACION_URGENCIA_MEMBRESIA );

    this.carrito.items.push( estuidio );


  }

  
    
    let carritoString = JSON.stringify( this.carrito );
  

    gaurdarCotizacion( carritoString );
    this.carrito = getDataCarrito();
    console.log( this.carrito );
    

  }


  


  eliminar( id ){


    this.carrito.items.forEach(  (item, index) => {

      // Agregar algun otro caso que se pueda dar  
      
      if( item.idEstudio === id ) {

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


verComparacio( publico, membresia ){

  let ahorro = 0;

let publicoTrim = publico.replace('$', '');
let membresiaTrim   = membresia.replace('$', '');


let publicoTrims = publicoTrim.replace(',', '');
let membresiaTrims = membresiaTrim.replace(',', '');


let publicoNumber = parseFloat(publicoTrims);
let  membresiaNumber = parseFloat(membresiaTrims);
  
  ahorro = publicoNumber - membresiaNumber;

 swal({
  icon: "success",
  title: `Ahorro: ${ ahorro}` ,
  text: `Sin membresia: ${ publico } - Con membresia: ${ membresia }`
  
  });



}
enviar( ){

  let cotizacion ={
     correo: this.email,
     carrito: this.carrito
   }
     this._emailService.envioEmail( cotizacion )
     .subscribe( (data:any) => {
       console.log(data);

       if(data.ok){
        swal('cotización enviada','se envio exitosamente', 'success');
        this.show = 'hidden';
        }
    
     } )

   }


  alertaDesc(){
    swal({title: "Con tu membresia estarías ahorrando: $50.00 ",
    text: "La membresia cuenta con muchos beneficios, contrata ahora..!!!",
    icon: "warning",
    buttons: [true, true],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Vamos a Contratar!", {
        icon: "success",
      });
    } else {
      swal("No necesitas membresia", {
        icon: "error",
      });
    }});
  }

  editarXray(){
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
      this._router.navigateByUrl('/xray');
    }});
  
  }

  delete(id) {
    this._xrayService.delete(id).subscribe(
      response => {

        swal("Registro Eliminado!", "Este registro no se podrá ver más", "error");
        this.verDatos();
        this._router.navigateByUrl('/xray');
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
