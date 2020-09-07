import { Component, OnInit } from '@angular/core';
import { TomografiaService } from 'src/app/services/tomografia/tomografia.service';
import  { getDataStorage, gaurdarCotizacion, getDataCarrito }  from '../../../functions/storage/storage.funcion';
import { getCarritoStorage, guardarStorage, }  from '../../../functions/storage/pacienteIntegrados';


import  swal from 'sweetAlert'; 

@Component({
  selector: 'app-tomografia',
  templateUrl: './tomografia.component.html',
  styleUrls: ['./tomografia.component.scss']
})
export class TomografiaComponent implements OnInit {

  public termino = "";
  public tomografias : [] =[];


  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };
  

  constructor(
        private tomografiaService: TomografiaService
  ) { }

  ngOnInit(): void {

    this.obtenerTomografias();

  }

  obtenerTomografias(){
    this.tomografiaService.obtenerTomografias()
    .subscribe( 
      (data:any) =>{
          this.tomografias = data.tomografia;
          // console.log(data);
          // console.log( this.tomografias)
          console.log(data);
      } 
    )
  }

  busquedaGeneral(){

  }



  alertcomparasion( ev, precioPublico, precioMembresia, item2:any ){


    console.log(   precioPublico, precioMembresia );

    let precioSinTrim  =  precioPublico.replace('$', '');
    let precioSinComaPublico = precioSinTrim.replace(',', '');


    let precioMemTrim  =  precioMembresia.replace('$', '');
    let precioMemComaMembresia = precioMemTrim.replace(',', '');


    swal({ title: `Con la memebresia ahorras ${ precioSinComaPublico - precioMemComaMembresia }`    ,icon: 'success' });

  }



  sumarTotal(  precioSin, precioCon  ){



    console.table({
      precioSin,
      precioCon
    });


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
  
        nombreEstudio: item.ESTUDIO,
        precioSin: item.PRECIO_PUBLICO,
        precioCon: item.PRECIO_MEMBRESIA,
        indicaciones: item.INDICACIONES,
        idEstudio:item._id
  
    }


    // console.log( estuidio  );
  
    // pasamos el precio redondo día con y sin
  
      this.sumarTotal(   item.PRECIO_PUBLICO, item.PRECIO_MEMBRESIA );
  
      this.carrito.items.push( estuidio );
  
  
    }else if (  event.path[1].classList.contains('precioHospitalizacion') )  {
  
      let  estuidio = {
        nombreEstudio: item.ESTUDIO,
        precioSin: item.PRECIO_PUBLICO,
        precioCon: item.PRECIO_MEMBRESIA,
        idEstudio:item._id
    }
  
    this.sumarTotal( item.PRECIO_PUBLICO_HOSPITALIZACION, item.PRECIO_MEMBRESIA_HOSPITALIZACION );
  
    this.carrito.items.push( estuidio );
  
    }else if( event.path[1].classList.contains('precioHospitalizacionUrgencia') ) {
  
  
      // evaluamos el precio noche y precio noche sin
      let  estuidio = {
  
        nombreEstudio: item.ESTUDIO,
        precioSin: item.PRECIO_PUBLICO_HOSPITALIZACIO_URGENCIA,
        precioCon: item.PRECIO_MEMBRESIA_HOSPITALIZACION_URGENCIA,
        idEstudio:item._id
  
    }
  
    console.log( estuidio );
  
      this.sumarTotal( item.PRECIO_PUBLICO_HOSPITALIZACIO_URGENCIA, item.PRECIO_MEMBRESIA_HOSPITALIZACION_URGENCIA );
      this.carrito.items.push( estuidio );
  
  }else if( event.path[1].classList.contains('precioPublicoUrgencia')  ){
  
  
    let estudio = {
  
      nombreEstudio: item.ESTUDIO,
      precioSin: item.PRECIO_PUBLICO_URGENCIA,
      precioCon: item.PRECIO_MEMBRESIA_URGENCIA,
      idEstudio:item._id
  
    }
  
    this.sumarTotal( item.PRECIO_PUBLICO_URGENCIA, item.PRECIO_MEMBRESIA_URGENCIA );
    this.carrito.items.push( estudio );
    console.log(this.carrito);
  }
  
    let carritoString = JSON.stringify( this.carrito );
  
  
    gaurdarCotizacion( carritoString );
    // this.carrito = getDataCarrito();
    console.log( this.carrito );
  
  
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



  delete(  item ){
    this.tomografiaService.deleteTomografia( item )
    .subscribe(  (data:any) => {
      // console.log( data);

      if(data.ok){
        // alert('Eliminado...')
        this.obtenerTomografias();
      }

    } )
  }


}
