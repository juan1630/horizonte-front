import { Component, OnInit } from '@angular/core';
import { PedidioSinService } from 'src/app/services/pedidos/pedidosLab/pedidio-sin.service';
import { PedidosLaboratorioEstudio, EstudioEstudio, PedidosLaboratorio } from 'src/app/intefaces/pedidosLab';

@Component({
  selector: 'app-pedidos-laboratorio',
  templateUrl: './pedidos-laboratorio.component.html',
  styleUrls: ['./pedidos-laboratorio.component.scss']
})
export class PedidosLaboratorioComponent implements OnInit {

  public pedidos: EstudioEstudio[]=[];

  constructor(
    private _pedidosService: PedidioSinService
  ) { }

  ngOnInit(): void {
    this.verPedidos();
  }


  verPedidos(){
    this._pedidosService.obtenerPedidosPendientes()
    .subscribe( (data:any) => {
      console.log(data);
      console.log( this.pedidos )
    } )
  }
}
