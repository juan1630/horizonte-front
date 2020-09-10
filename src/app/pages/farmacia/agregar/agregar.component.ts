import { Component, OnInit } from '@angular/core';
import { AgregarService } from 'src/app/services/farmacia/agregar.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  public medicamento = {
    nombreComercial:"",
    nombreDeSalOsustanciaActiva:"",
    presentacio:"",
    contenidoFrasco:"",
    viaDeAdministracion:"",
  }



  constructor( public _agregarmedicamentoservice: AgregarService) {

   }

  ngOnInit(): void {
  }


  enviar() {

    console.log(this.medicamento)
    this._agregarmedicamentoservice.agragarmedicamentos(this.medicamento).subscribe (
      (data) => {console.log(data)
      }
    )

   }


}


