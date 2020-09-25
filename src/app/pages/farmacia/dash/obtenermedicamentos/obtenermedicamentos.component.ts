import { Component, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AgregarService } from 'src/app/services/farmacia/agregar.service';

@Component({
  selector: 'app-obtenermedicamentos',
  templateUrl: './obtenermedicamentos.component.html',
  styleUrls: ['./obtenermedicamentos.component.css']
})
export class ObtenermedicamentosComponent implements OnInit {

  //Array
public medicamentos=[
  {
    contenidoFrasco: "",
    nombreComercial: "",
    nombreDeSalOsustanciaActiva: "",
    presentacio: "",
    viaDeAdministracion: ""
  }
]

  constructor( public _obtenermedicamentos: AgregarService) { }

  ngOnInit(): void {

    this._obtenermedicamentos.obtenermedicamento().subscribe (
      (data:any)=>{console.log(data)
      this.medicamentos=data.data
      console.log (this.medicamentos);
      }
    )
  }

 }
