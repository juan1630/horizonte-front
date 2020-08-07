import { Component, OnInit } from '@angular/core';
import { JefaturaEnfermeriaService } from 'src/app/services/indicadores/jefatura-enfermeria.service';

@Component({
  selector: 'app-hoja-diaria',
  templateUrl: './hoja-diaria.component.html',
  styleUrls: ['./hoja-diaria.component.css']
})
export class HojaDiariaComponent implements OnInit {

  public servicioJefatura : [{
    diagnosticoActual: "",
      diagnosticoInicial: "",
      enfermeraAtendio: "",
      fechaIngreso: "",
      genero: "",
      horaIngreso: "",
      medicoTrante: "",
      paciente: "",
      membretesLegible:"",
      importtanciaIdentificacio:""
      notificacionDeIdentificacion: "",
      solicitudesDeEstudioDeGabinete:"",
      solicitudesDeEstudio:"",
      _id: ""
  }]

  constructor(   private _jefaturaService: JefaturaEnfermeriaService  ) { }

  ngOnInit(): void {
  
    this._jefaturaService.verIndicadores()
    .subscribe( (data:any) => {

        this.servicioJefatura = data.data;

        console.log( this.servicioJefatura );


    }  )

  }

}
