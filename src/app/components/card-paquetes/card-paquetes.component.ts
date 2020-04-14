import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';

@Component({
  selector: 'app-card-paquetes',
  templateUrl: './card-paquetes.component.html',
  styleUrls: ['./card-paquetes.component.scss']
})
export class CardPaquetesComponent implements OnInit {
  public paquetes:any[] = [];

  constructor(
    public _paqueteService: PaqueteService,
    public router: Router 
  ) { }

  ngOnInit(): void {

    this._paqueteService.getPaquetes( )
    .subscribe( (data: any) => {
      console.log(data);
        this.paquetes = data;
    } )

  }

}
