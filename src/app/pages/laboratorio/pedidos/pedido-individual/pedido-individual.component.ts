import { Component, OnInit } from '@angular/core';
import { PedidosVistaLab, Pedido } from 'src/app/intefaces/pedidosVistaLab';
import { PedidioSinService } from 'src/app/services/pedidos/pedidosLab/pedidio-sin.service';
import { ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
moment.locale('es')

@Component({
  selector: 'app-pedido-individual',
  templateUrl: './pedido-individual.component.html',
  styleUrls: ['./pedido-individual.component.scss']
})
export class PedidoIndividualComponent implements OnInit {

  public id: string;
  public pedido;

  constructor(
    private pedidosService:PedidioSinService,
    private _route: ActivatedRoute
    ){  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
 
    this.verPedido();

  }

  verPedido(){
    this.pedidosService.obtenerPedidoPorId(this.id )
    .subscribe((data:any) => {
      console.log(data)
      this.pedido = data.estudios;
      console.log( this.pedido );
    } )
  }


  cambiarEstadoPedido(  estadopedido ){

    let fechaProceso = moment().format('dddd Do MMM YYYY h:mm:ss a');
      
      this.pedidosService.cambiarEstado( this.id, estadopedido, fechaProceso )
      .subscribe( (data) => {
        console.log(data);
      } );

  }

}
