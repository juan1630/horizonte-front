import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute  } from '@angular/router';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MaternidadService } from 'src/app/services/tabulador/maternidad.service';
import  swal from 'sweetalert';
import * as moment from 'moment';

@Component({
  selector: 'app-tabulador-pagos',
  templateUrl: './tabulador-pagos.component.html',
  styleUrls: ['./tabulador-pagos.component.scss']
})


export class TabuladorPagosComponent implements OnInit {
 
  public id;
  public pagosDB:any[]=[];
  public usuarioMaquina;
  public anticipo;
  public acumulado:number = 0;

  public pago = {
    concepto: '',
    cantidad:'',
    atendio: '' ,
    fecha:''
  }


 
  constructor(
          private route: ActivatedRoute,
          private maternidadSevice: MaternidadService
   ) { }




  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuarioMaquina =  JSON.parse( localStorage.getItem('usuario'));
  }

  verPagos(){
    
    this.maternidadSevice.verPagos( this.id )
    .subscribe( (data:any) => {
        console.log( data );
        
        this.pagosDB = data.data.pagos;
        this.anticipo = data.data.aticipo;

        
        this.pagosDB.forEach( pagos => { 
      
          if(pagos.cantidad == null || pagos.cantidad == '' || pagos.cantidad == undefined ){
            console.log( pagos.cantidad );
            return;
          }
        
          this.acumulado += parseFloat(pagos.cantidad);


        } );
        
        console.log(  this.acumulado );


    })
  }


  
  registrarPago( pagosForm  ){    

    this.pago.atendio = this.usuarioMaquina.nombre;
    this.pago.fecha = moment().format('MMMM Do YYYY, h:mm:ss a')

    // console.log( this.pago );
     
    this.maternidadSevice.addPago( this.pago, this.id )
    .subscribe( (data) => {
     
      console.log(data);
      
      if(data.ok){
        swal('Pago agregado', 'succcess', 'succcess');
        this.verPagos();
        this.pago.atendio = '';
        this.pago.cantidad = '';
        this.pago.concepto = '';
        return;
      }

    } );
 
  }

}
