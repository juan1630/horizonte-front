import { Component, OnInit } from '@angular/core';
import { getDataCarrito  } from '../../../../functions/storage/storage.funcion'
import { PedidioSinService } from 'src/app/services/pedidos/pedidosLab/pedidio-sin.service';

@Component({
  selector: 'app-pedido-sin',
  templateUrl: './pedido-sin.component.html',
  styleUrls: ['./pedido-sin.component.scss']
})
export class PedidoSinComponent implements OnInit {

  public infoUsuario = {
    nombrePaciente:'',
    edad:0,
    sexo:'',
    telefono:'',
    correo:''
  }

  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };

  constructor(
    private _pedidoService: PedidioSinService
  ) { }

  ngOnInit(): void {

    this.carrito = getDataCarrito();
    console.log( this.carrito);
  }


   enviarPeddio(){
  //   console.log( this.infoUsuario )
  //   console.log( this.carrito )

  this._pedidoService.enviarPedido( this.infoUsuario, this.carrito )
  .subscribe( (data) => {
    console.log(data)
  } )
  }

}
