import { Component, OnInit } from '@angular/core';
import { OtrosServicios } from 'src/app/services/otrosservicios/otrosservicios.service';

@Component({
  selector: 'app-otros-s-i',
  templateUrl: './otros-s-i.component.html',
  styleUrls: ['./otros-s-i.component.scss'],
  providers: [OtrosServicios]
})
export class OtrosSIComponent implements OnInit {

  public otrosServiciosSI: any [] = [];

  constructor(
    private _otrosService: OtrosServicios
  ) { }

  ngOnInit(): void {
    this._otrosService.getOtrosServicios().subscribe(
      res => {
        this.otrosServiciosSI = res.servicios;
        console.log(res);
        
      },
      err => {
        console.log(<any>err);
        
      }
    );
  // styleUrls: ['./otros-s-i.component.scss']
}
}
