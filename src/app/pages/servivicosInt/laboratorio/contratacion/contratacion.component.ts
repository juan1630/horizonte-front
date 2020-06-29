import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import { LaboratorioService } from 'src/app/services/sockets/laboratorio/laboratorio.service';

@Component({
  selector: 'app-contratacion',
  templateUrl: './contratacion.component.html',
  styleUrls: ['./contratacion.component.scss']
})
export class ContratacionComponent implements OnInit {
  
  public fecha = moment().format('LL');
  public laboratorioPedido = [];
 
 
  constructor(
    // public laboratorio: LaboratorioService
  ) { }

  
  ngOnInit(): void {
  }


  onSubmit( laboratorio ){


    for( let i in laboratorio ){
      
      if(laboratorio[i] != "" ){
          this.laboratorioPedido.push(laboratorio[i]);
      }

    }


    console.log( this.laboratorioPedido );
    
    // console.log(laboratorio );
   
    // this.laboratorio.enviarInformacion(this.laboratorioPedido);
    
  }
  
}
