import { Component, OnInit } from '@angular/core';
import { AmbulanciaService } from 'src/app/services/ambulancia/ambulancia.service';

@Component({
  selector: 'app-ambulancia-s-i',
  templateUrl: './ambulancia-s-i.component.html',
  styleUrls: ['./ambulancia-s-i.component.scss'],
  providers: [AmbulanciaService]
})
export class AmbulanciaSIComponent implements OnInit {

  public ambulanciaSI: any [] = [];


  constructor(
    private _ambulanciaService: AmbulanciaService
  ) { }

  ngOnInit(): void {
    this._ambulanciaService.getDestino().subscribe(
      res => {
        this.ambulanciaSI = res.servicios;
        console.log(res);
        
      },
      err => {
        console.log(<any>err);
        
      }
    );
  }

}
