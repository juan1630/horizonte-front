import { Component, OnInit } from '@angular/core';
import { getDataCarrito  } from '../../../../functions/storage/storage.funcion'
import { PedidioSinService } from 'src/app/services/pedidos/pedidosLab/pedidio-sin.service';


import { Router } from '@angular/router';

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
    solicito:''
  }

  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };

  constructor(
    private _pedidoService: PedidioSinService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.carrito = getDataCarrito();
  }

   enviarPeddio( forma ){

     let nombretxt = document.querySelector('#nombrePaciente');
     let edadTxt = document.querySelector('#edad');
     let sexoselect = document.querySelector('#sexo');

     nombretxt.classList.remove('is-invalid');
     edadTxt.classList.remove('is-invalid');
     sexoselect.classList.remove('is-invalid');


    if(forma.invalid){
      

     
      if( forma.value.nombrePaciente === "" ){
        
        nombretxt.classList.add('is-invalid');
      }
      
      if( forma.value.edad === 0 || forma.value.edad <= 0 || forma.value.edad > 105 ){

        edadTxt.classList.add('is-invalid');
      }
      
      if( forma.value.sexo === "" || forma.value.sexo === " " ){

        sexoselect.classList.add('is-invalid')
      }

      alert('Debes de llenar los campos');
      
      return;

    }

  this._pedidoService.enviarPedido( this.infoUsuario, this.carrito )
  .subscribe( (data:any) => {
    if(data.ok){
      alert('Pedido enviado');
      this._router.navigateByUrl('/');
    }
  } )



  }

}
