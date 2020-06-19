import { Component, OnInit } from '@angular/core';
import { PatologiaService } from 'src/app/services/patologia/patologia.service';
import  { getDataStorage, gaurdarCotizacion, getDataCarrito }  from '../../../functions/storage/storage.funcion';
import swal from 'sweetalert';
import { EnvioEmailService } from 'src/app/services/cotizacion/envio-email.service';

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.component.html',
  styleUrls: ['./patologia.component.scss']
})
export class PatologiaComponent implements OnInit {

  
  public patologias: any[]=[];

  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };
  show: string = 'hidden';
  public email: string;

  constructor(
    public _patologiaService: PatologiaService,
    private _emailService: EnvioEmailService,
  ) { }

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
  

  ngOnInit(): void {

    this.getAllPatologias();

  }

  getAllPatologias(){

    this._patologiaService.getPatologias()
    .subscribe( (data:any) => {
      console.log( data );
      this.patologias = data;
    });

  }

  deletePatologia(id){

    
    this._patologiaService.deletePatologia( id )
    .subscribe( (data) => {

      this.getAllPatologias();
    } )

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

  abrirInputCorreo(){
    
    this.show = 'show';
  }


   // FUNCION QUE AGREGA AL CARRITO UN ELEMENTO NUEVO

   agregarCarrito( event, item: any ){


    console.log( item );
    
    if( event.path[1].classList.contains('precioPublico')  ){ 
    
      let  estuidio = {

        nombreEstudio: item.ESTUDIO,
        precioSin: item.PRECIO_PUBLICO,
        precioCon: item.PRECIO_MEMBRESIA,
        entrega: item.ENTREGA,
        departamento: item.name,
        idEstudio:item._id
    }

      this.sumarTotal( item.PRECIO_PUBLICO, item.PRECIO_MEMBRESIA );

      this.carrito.items.push( estuidio );
      

    }else if (  event.path[1].classList.contains('precioNoche') )  {

      let  estuidio = {
        nombreEstudio: item.ESTUDIO,
        precioNoche: item.NOCTURNO,
        entrega: item.ENTREGA,
        departamento: item.name,
        idEstudio:item._id
    }

    this.sumarTotal( item.NOCTURNO, item.NOCTURNO );

    this.carrito.items.push( estuidio );
    
    }else if( event.path[1].classList.contains('precioPublicoUrgencia') ) {

      let  estuidio = {

        nombreEstudio: item.ESTUDIO,
        precioSin: item.PRECIO_PUBLICO_URGENCIA,
        precioCon: item.PRECIO_MEMBRESIA_URGENCIA,
        entrega: item.ENTREGA,
        departamento: item.name,
        idEstudio:item._id

    }

      this.sumarTotal( item.PRECIO_PUBLICO_URGENCIA, item.PRECIO_MEMBRESIA_URGENCIA );
      this.carrito.items.push( estuidio );
      
  }else if(   event.path[1].classList.contains('precioPublicoHospitalizacion') ){

    let  estuidio = {

      nombreEstudio: item.ESTUDIO,
      precioSin: item.PRECIO_PUBLICO_HOSPITALIZACION,
      precioCon: item.PRECIO_MEMBRESIA_HOSPITALIZACION,
      entrega: item.ENTREGA,
      departamento: item.name,
      idEstudio:item._id

  }

    this.sumarTotal( item.PRECIO_PUBLICO_HOSPITALIZACION, item.PRECIO_MEMBRESIA_HOSPITALIZACION );
    this.carrito.items.push( estuidio );

  }else if(   event.path[1].classList.contains('precioPublicoHospitalizacionUrgencia')  ){

    
    let  estuidio = {

      nombreEstudio: item.ESTUDIO,
      precioSin: item.PRECIO_PUBLICO_HOSPITALIZACION_URGENCIA,
      precioCon: item.PRECIO_HOSPITALIZACION_URGENCIA_MEMBRESIA,
      entrega: item.ENTREGA,
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


  

cerrarModal(){

  this.show = 'hidden'

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

}
