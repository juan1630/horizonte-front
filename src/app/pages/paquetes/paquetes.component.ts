import { Component, OnInit } from '@angular/core';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.scss']
})
export class PaquetesComponent implements OnInit {
  public paquetes: any[] = [];

  constructor(
    public _paqueteService: PaqueteService
  ) { }

  ngOnInit(): void {
  }

  obtenerPaquete(){
    this._paqueteService.getPaquetes()
    .subscribe( (data: any)  =>{
      console.log( data );
      this.paquetes = data;
    });
  }

}
