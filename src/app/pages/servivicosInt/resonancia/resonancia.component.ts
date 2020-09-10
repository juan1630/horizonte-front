import { Component, OnInit } from '@angular/core';
import { ResonanciaService } from 'src/app/services/resonancia/resonancia.service';

@Component({
  selector: 'app-resonancia',
  templateUrl: './resonancia.component.html',
  styleUrls: ['./resonancia.component.scss']
})
export class ResonanciaComponent implements OnInit {

  public resonacias: [] = [];


  constructor(
      private resonanciaService: ResonanciaService
  ) { }

  ngOnInit(): void {
    this.getResonancias();
  }



  getResonancias() {

    this.resonanciaService.verResonancias()
    .subscribe( (data: any) => {

      this.resonacias = data.data;

    });

  }


  delete(id) {
    this.resonanciaService.eliminarResonancia( id )
    .subscribe( (data) => {
        console.log(data);
        this.getResonancias();
    } );
  }


}
