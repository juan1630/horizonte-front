import { Component, OnInit, Input } from '@angular/core';

// TODO: AGREGAR LA API DEL CODIGO POSTAL

@Component({
  selector: 'app-fiscales',
  templateUrl: './fiscales.component.html',
  styleUrls: ['./fiscales.component.scss']
})
export class FiscalesComponent implements OnInit {
  @Input() numerofiscales: number[] = [];
  public numero: number;
  public municipioFiscal_2;
  public estadoFiscal;
  public localidadFiscal2;


  constructor() { }

  ngOnInit(): void {
       // console.log( this.numerofiscales );
    // this.numero = this.numerofiscales.length;
    // console.log(this.numero);
  }


  getLocations( location ){
    console.log( location )
  }

}
