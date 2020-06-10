import { Component, OnInit } from '@angular/core';
// import { PedidioSinService } from 'src/app/services/pedidos/pedidosLab/pedidio-sin.service';

import { Router } from '@angular/router';
import { PedidoSinMembresiaService } from 'src/app/services/pedidos/pedidosLab/pedidos-sin-mem.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
  providers: [PedidoSinMembresiaService]
})
export class ResultadosComponent implements OnInit {

  public pedidoSI: any;

  constructor(
    private _pedidoService: PedidoSinMembresiaService,
    private _router: Router
  ) { }

  verDatos(){
    this._pedidoService.getPedidoSinMembresia().subscribe(
      res => {
        this.pedidoSI = res.pedidios;
          console.log('==================');
          console.log(res);
          console.log('==================');
          
          
          
      },
      err => {
        console.log(<any>err);
      }
    )
  }

  ngOnInit(): void {
    this.verDatos();
  }

}
