import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servicios-int',
  templateUrl: './servicios-int.component.html',
  styleUrls: ['./servicios-int.component.scss']
})
export class ServiciosIntComponent implements OnInit {
  public pagina : number = 0;
  public totalservicios:number;
  servicios = [
    {
      "nombre":"AMBULANCIA",
      "img":"../../../assets/icons/serviciosIconos/car.svg",
      "url":"/ambulancia"
    },
    {
      "nombre":"ESPECIALISTA",
      "img":"../../../assets/icons/serviciosIconos/researcher.svg",
      "url":"/consulta-Especialista"
    },
    {
      "nombre":"CONSULTA",
      "img":"../../../assets/icons/serviciosIconos/doctor.svg",
      "url":"/medicina/general"
    },
    {
      "nombre":"ENDOSCOPIA",
      "img":"../../../assets/icons/serviciosIconos/endoscopy.svg",
      "url":"/endoscopia"
    },
    {
      "nombre":"HOSPITALIZACIÓN",
      "img":"../../../assets/icons/serviciosIconos/hospital-bed.svg",
      "url":"/hospitalizacion"
    },
    {
      "nombre":"PATOLOGÍA",
      "img":"../../../assets/icons/serviciosIconos/microscope.svg",
      "url":"/patologia"
    },
    {
      "nombre":"RAYOS-X",
      "img":"../../../assets/icons/serviciosIconos/skeleton.svg",
      "url":"/xray"
    },
    {
      "nombre":"LABORATORIO",
      "img":"../../../assets/icons/serviciosIconos/chemistry.svg",
      "url":"/laboratorio"
    },
    {
      "nombre":"QUIROFANO",
      "img":"../../../assets/icons/serviciosIconos/surgery-room.svg",
      "url":"/quirofano"
    },
    {
      "nombre":"RESONANCIA",
      "img":"../../../assets/icons/serviciosIconos/mri.svg",
      "url":"/resonancia"
    },
    {
      "nombre":"ULTRASONIDO",
      "img":"../../../assets/icons/serviciosIconos/womb.svg",
      "url":"/ultrasonido"
    },
    {
      "nombre":"TOMOGRAFIA",
      "img":"../../../assets/icons/serviciosIconos/x-ray.svg",
      "url":"/tomografia"
    },
    {
      "nombre":"TRABAJO SOCIAL",
      "img":"../../../assets/icons/serviciosIconos/relations.svg",
      "url":"/trabajo-social"
    },
    {
      "nombre":"OTROS SERVICIOS",
      "img":"../../../assets/icons/serviciosIconos/options.svg",
      "url":"/otros-servicios"
    },

  ]
  constructor(

  ) { }

  ngOnInit(): void {
console.log(this.servicios);
    this.totalservicios = this.servicios.length;
    this.pagina = 0;
  }

}
