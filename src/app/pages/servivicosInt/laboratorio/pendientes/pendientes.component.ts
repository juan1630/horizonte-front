import { Component, OnInit } from '@angular/core';
import { PendientesContratosService } from 'src/app/services/pendientes-contratos.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.scss']
})
export class PendientesComponent implements OnInit {


  public pendientes: [] = [];

  constructor(
    private _pendientesService: PendientesContratosService
  ) { }



  ngOnInit(): void {

    this.obtenerPendientes();

  }

  obtenerPendientes(){
    this._pendientesService.verPendientes()
    .subscribe(
      (data: any) => {
        console.log(data);
        this.pendientes = data.data;

      }
     )
  }


}
