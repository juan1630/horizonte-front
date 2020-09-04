import { Component, OnInit } from '@angular/core';
import { MaquinasService } from 'src/app/services/paquetesQuirofano/agregarMaquinas/maquinas.service';

@Component({
  selector: 'app-quirofano',
  templateUrl: './quirofano.component.html',
  styleUrls: ['./quirofano.component.scss']
})
export class QuirofanoComponent implements OnInit {

  public paquetes = [{
          costoHorasRecuperacion: "",
      especialiastas: [],
      horaRecuperacion: "",
      maquinas: [],
      medicamentos: [],
      nombrePaquete: ""
  }];

  constructor(
    private paquetesService: MaquinasService
  ) { }

  ngOnInit(): void {
  
    this.verPaquetes()
   console.log('paquete');

  }


  verPaquetes() {
    this.paquetesService.verPaquetes()
    .subscribe( (data:any ) => {
      this.paquetes = data.data;  
    } )
  }


  ageregarPaqueteQuirofano(  id, info  ) {

    this.paquetesService.agregarPaqueteQuirofano( id, info )
    .subscribe( (data) => {
      console.log(  data );
    } )

  }
  

}
