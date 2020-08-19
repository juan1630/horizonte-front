import { Component, OnInit } from '@angular/core';
import { MaquinasService } from 'src/app/services/paquetesQuirofano/agregarMaquinas/maquinas.service';

@Component({
  selector: 'app-agregar-medciametos',
  templateUrl: './agregar-medciametos.component.html',
  styleUrls: ['./agregar-medciametos.component.css']
})
export class AgregarMedciametosComponent implements OnInit {


  public medicamentos:[] =[]
  public totalMedicamentos =0;


  constructor(
    private _medicamentosService: MaquinasService
  ) { }

  ngOnInit(): void {
    


    this._medicamentosService.verMedicamentos()
    .subscribe( (data:any) => {
      this.medicamentos = data.data
    } )
    
  }



  sumarMedicamentos(){

    let medicamentoCantidad = 0;
    let medicamentoCosto = 0;


    let cantidadMedicamento = document.querySelectorAll('.cantidadMedicamento');
    let costoMedicamento = document.querySelectorAll('.costoMedicamento');



    for (const o in cantidadMedicamento) {
      if( cantidadMedicamento[o]['value'] !== undefined && cantidadMedicamento[o]['value'] > 0 ){
          medicamentoCantidad = cantidadMedicamento[o]['value'];          
       }

    }


      for (const key in costoMedicamento) {

        if (costoMedicamento[key]['value'] !== undefined && costoMedicamento[key]['value'] > 0 ) {
          medicamentoCosto = costoMedicamento[key]['value'];

        }

      }


      this.totalMedicamentos = medicamentoCantidad * medicamentoCosto;

     
       

  }

}
