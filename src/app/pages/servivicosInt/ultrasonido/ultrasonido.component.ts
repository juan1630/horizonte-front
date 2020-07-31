import { Component, OnInit } from '@angular/core';
import { UltraSonidoService } from 'src/app/services/ultrasonido/ultrasonido.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { getDataStorage, getDataCarrito, gaurdarCotizacion } from '../../../functions/storage/storage.funcion';
import swal from 'sweetalert';
import { EnvioEmailService } from 'src/app/services/cotizacion/envio-email.service';

@Component({
  selector: 'app-ultrasonido',
  templateUrl: './ultrasonido.component.html',
  styleUrls: ['./ultrasonido.component.scss'],
  providers: [UltraSonidoService]
})
export class UltrasonidoComponent implements OnInit {

  public role;
  public show = 'hidden';
  public email: string;
  
  public ultrasonidoSI = [{
    ESTUDIO:"", 
    PRECIO_HOSPITALIZACION_URGENCIA_MEMBRESIA:"", 
    PRECIO_MEMBRESIA:"", 
    PRECIO_MEMBRESIA_HOSPITALIZACION:"", 
    PRECIO_MEMBRESIA_URGENCIA:"", 
    PRECIO_PUBLICO:"", 
    PRECIO_PUBLICO_HOSPITALIZACION:"", 
    PRECIO_PUBLICO_HOSPITALIZACION_URGENCIA:"", 
    PRECIO_PUBLICO_URGENCIA:"", 
    name:"" 
  }];

  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };
  
  constructor(
    private _ultrasonidoService: UltraSonidoService,
    private _router: Router,
    private _emailService: EnvioEmailService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {

      this.verDatos();

      this.role = getDataStorage().role;
      this.carrito = getDataCarrito();
      console.log( this.carrito );

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
  
  
  cerrarModal(){
  
      this.show = 'hidden'
  
  }
  
  


  verDatos(){
    this._ultrasonidoService.getEstudiosUltrasonido().subscribe(

      
      res => {
        console.log( res);
        this.ultrasonidoSI = res.ultrasonido;
      },
      err => {
        console.log(<any>err);
        
      });
  }

  abrirInputCorreo(){
    this.show = 'show';
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


    // termina la funcion de sumar al carrito
  agregarCarrito( event, item: any ){


    console.log( item );
    
    if( event.path[1].classList.contains('precioPublico')  ){ 
    
      let  estuidio = {

        nombreEstudio: item.ESTUDIO,
        precioSin: item.PRECIO_PUBLICO,
        precioCon: item.PRECIO_MEMBRESIA,
        idEstudio:item._id
    }

      this.sumarTotal( item.PRECIO_PUBLICO,  item.PRECIO_MEMBRESIA );

      this.carrito.items.push( estuidio );
      

    }
    // else if (  event.path[1].classList.contains('precioNoche') )  {

    //   let  estuidio = {
    //     nombreEstudio: item.ESTUDIO,
    //     precioNoche: item.NOCTURNO,
    //     entrega: item.ENTREGA,
    //     idEstudio:item._id
    // }

    // this.sumarTotal( item.NOCTURNO, item.NOCTURNO );

    // this.carrito.items.push( estuidio );
    
    // }
    
    else if( event.path[1].classList.contains('precioPublicoUrgencia') ) {

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
      precioSin: item.PRECIO_PUBLICO_HOSPITALIZACIO_URGENCIA,
      precioCon: item.PRECIO_MEMBRESIA_HOSPITALIZACION_URGENCIA,
      departamento: item.name,
      idEstudio:item._id

  }

    this.sumarTotal( item.PRECIO_PUBLICO_HOSPITALIZACIO_URGENCIA, item.PRECIO_MEMBRESIA_HOSPITALIZACION_URGENCIA );

    this.carrito.items.push( estuidio );


  }

  
    
    let carritoString = JSON.stringify( this.carrito );
  

    gaurdarCotizacion( carritoString );
    this.carrito = getDataCarrito();
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

  

  delete(id) {

    this._ultrasonidoService.delete(id).subscribe(
      response => {
        swal("Registro Eliminado", "Este Registro no se podrá ver más", "error");
        this.verDatos();
        this._router.navigateByUrl('/ultrasonido');
      },
      error => {
        console.log(error);
      }
    );
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
