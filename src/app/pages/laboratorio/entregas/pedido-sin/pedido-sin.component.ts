import { Component, OnInit } from '@angular/core';
import { getDataCarrito , gaurdarCotizacion, getDataStorage } from '../../../../functions/storage/storage.funcion'
import { ImagenTicketHorizonter } from '../../../../config/imgeHorizonte';
import { PedidioSinService } from 'src/app/services/pedidos/pedidosLab/pedidio-sin.service';
import {  numeroALetras  }  from '../../../../functions/storage/generalFunctions';
import { Router } from '@angular/router';


import * as moment from 'moment';
import * as jsPDF from 'jspdf';
import swal from 'sweetalert';




moment.locale('es');

@Component({
  selector: 'app-pedido-sin',
  templateUrl: './pedido-sin.component.html',
  styles: ['./pedido-sin.component.scss',
  "node_modules/jqwidgets-ng/jqwidgets/styles/jqx.base.css"
]
})
export class PedidoSinComponent implements OnInit {

  public infoUsuario = {
    nombrePaciente:'',
    edad:0,
    sexo:'',
    telefono:'',
    correo:'',
    diagnostico:'',
    tratamineto:'',
    solicito:'',
    metodoPago: '',
    monto: 0,
    recibo: '',
    fechaCompra: '',
    atendio: ''

  }

  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };
  public totalConIva=0;
  public positionYPDF = 100;

  public IVaDEl16 = 0;

  constructor(
    private _pedidoService: PedidioSinService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.carrito = getDataCarrito();
    this.infoUsuario.fechaCompra = moment().format('dddd Do MMM YYYY h:mm:ss a');
    this.infoUsuario.atendio = getDataStorage().nombre;
  }

   enviarPeddio( forma ){


     let nombretxt = document.querySelector('#nombrePaciente');
     let edadTxt = document.querySelector('#edad');


     nombretxt.classList.remove('is-invalid');
     edadTxt.classList.remove('is-invalid');



    if(forma.valid  == false ){
      

     
      if( forma.value.nombrePaciente === "" ){
        
        nombretxt.classList.add('is-invalid');
      }
      
      if( forma.value.edad === 0 || forma.value.edad <= 0 || forma.value.edad > 105 ){

        edadTxt.classList.add('is-invalid');
      }
    


      if(forma.value.pago === ""){
        swal('Selecciona el metodo de pago', 'campos vacios', 'error');
      }

      if( forma.value.sexo === ""  ){
        swal('Selecciona el sexo', 'Falta por llenar el sexo', 'error');
      }

      swal('verifica los campos', 'campos vacios', 'error');

      
      return;

    }


  this._pedidoService.enviarPedido( this.infoUsuario, this.carrito )
  .subscribe( (data:any) => {
    if(data.ok){
        swal( 'Pedido realizado', 'Tú pedido de ha realizado', 'success' );
        this,this.generarTicket();
      this._router.navigateByUrl('/');
    }
  } )

  }



  validarMonto(){
    
    if( this.infoUsuario.recibo == '' || this.infoUsuario.recibo == '0' ){


      swal('Por favor verifica el campo',  `No puede ir vacio` , 'error')
    }else if( this.infoUsuario.metodoPago === 'tarjeta'  ){

       this.infoUsuario.recibo = 'tarjeta';
    }else if(   this.infoUsuario.metodoPago === 'transferencia' ){

     this.infoUsuario.recibo = 'tranferencia';
      
    }



  }



  
  agregarIva(){


    let totalIva = (( this.carrito.totalSin * 4 ) / 100);
  
    this.totalConIva =  this.carrito.totalSin + totalIva;

    this.carrito.totalSin =  Math.round(this.totalConIva);


  }


  metodoEfectivo(){


    // console.log(  this.infoUsuario );

    if(  this.infoUsuario.metodoPago === 'efectivo' ){
      

      this.infoUsuario.metodoPago = 'efectivo';
      this.carrito = getDataCarrito();
     
    }
    
    
    if( this.infoUsuario.metodoPago === 'Tarjeta' ){
      this.infoUsuario.metodoPago = 'Tarjeta';
      
      this.agregarIva();
    
    }else if( this.infoUsuario.metodoPago === 'transferencia'  ){
      this.infoUsuario.metodoPago = 'transferencia';
      this.carrito = getDataCarrito();
    }
    
    
    // if( this.infoUsuario.metodoPago === 'tarjeta' ){
    //   console.log(  'metodo' );
    //   this.agregarIva();
    // }
    
    
  }
  

  calcularIva(){

  this.IVaDEl16 = ((this.carrito.totalSin  * 16 ) / 100);
  // sacamos el iva

  }


  generarTicket(){


    const totalLetra = numeroALetras( this.carrito.totalSin, 'Pesos mexicanos' );

    const doc = new jsPDF('p', 'mm', [ 300, 500]);

    doc.addImage( ImagenTicketHorizonter, 'JPEG', 30, 5, 70, 50 );
   

    // REvisar estas funciones 
    doc.setFontSize(10);
    doc.text(10, 65,`No ticke: 001         Fecha: ${this.infoUsuario.fechaCompra}`);
    doc.text(10, 70,`RFC: HGS111116J76                  Teléfono: 735-35-77-564`);
    doc.text(10, 75,`Atendió: ${this.infoUsuario.atendio}`);
    doc.text(10, 85, `------------------------------------------------------------------------------------`)
    doc.text(15,90,`       Estudio                   Costo                 Entrega `);
    doc.text(10, 95, `------------------------------------------------------------------------------------`)

    this.carrito.items.forEach(  item => {

      doc.text(15, this.positionYPDF,`${item.nombreEstudio}                        ${item.precioSin}                       ${item.entrega}`);
  
      this.positionYPDF += 5;

    });

    console.log( this,this.positionYPDF );
    this.calcularIva();

    doc.text(15, this.positionYPDF+=10, `El total sin I.V.A es:                 $ ${this.carrito.totalSin - this.IVaDEl16}` );
    
    doc.text( 15, this.positionYPDF+=5,  `El I.V.A es de:                       $ ${this.IVaDEl16}`  );

    doc.text( 15, this.positionYPDF+=5,  `El total con I.V.A:                  $ ${this.carrito.totalSin}`  );
    doc.text(5, this.positionYPDF+=6, `Total con letra : `);
    
    doc.text(2, this.positionYPDF+=5, `${totalLetra}` );




    doc.text(30, this.positionYPDF+=12, "Gracias por su visita vuelve pronto")
    doc.save('COTIZACION');


  }

  // restamos los totales
  
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


// esta funcion elimna del carrito
  
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



}
