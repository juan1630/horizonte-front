import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResonanciaService } from 'src/app/services/resonancia/resonancia.service';

@Component({
  selector: 'app-resonancia-edit',
  templateUrl: './resonancia-edit.component.html',
  styleUrls: ['./resonancia-edit.component.css']
})
export class ResonanciaEditComponent implements OnInit {

  constructor(
    private _router: ActivatedRoute,
    private resonanciaService: ResonanciaService
  ) { }


  public id = "";

  public infoServicio= {
    nombre:"",
    indicaciones:"",
    precioPublico:"",
    precioMembresia:"",
    precioHospitalizacionPublico:"",
    precioHospitalizacionMembresia:"",
    precioUrgenciaPublico:"",
    precioUrgenciaMembresia:"",
    precioHospitalizacionUrgenciaPublico:"",
    precioHospitalizacionUrgenciaMembresia:"",
  
  }

  ngOnInit(): void {

    this.id = this._router.snapshot.paramMap.get('id');
    this.obtenerResonanciaProId();

  }

  obtenerResonanciaProId(){
    this.resonanciaService.obtenerPorId( this.id )
    .subscribe( (data: any) => {
      console.log(data);
      this.infoServicio.nombre = data.data.ESTUDIO;
      this.infoServicio.indicaciones = data.data.INDICACIONES;
      this.infoServicio.precioPublico = data.data.PRECIO_PUBLICO;
      this.infoServicio.precioMembresia = data.data.PRECIO_MEMBRESIA;
      this.infoServicio.precioHospitalizacionPublico = data.data.PRECIO_PUBLICO_HOSPITALIZACION;
      this.infoServicio.precioHospitalizacionMembresia = data.data.PRECIO_MEMBRESIA_HOSPITALIZACION;
      this.infoServicio.precioUrgenciaMembresia = data.data.PRECIO_MEMBRESIA_URGENCIA;
      this.infoServicio.precioUrgenciaPublico = data.data.PRECIO_PUBLICO_URGENCIA;
      this.infoServicio.precioHospitalizacionUrgenciaPublico =data.data.PRECIO_PUBLICO_HOSPITALIZACIO_URGENCIA;
      this.infoServicio.precioHospitalizacionUrgenciaMembresia = data.data.PRECIO_MEMBRESIA_HOSPITALIZACION_URGENCIA;
      console.log("info", this.infoServicio);
    });

  }


  enviar(){

    console.log('Enviando...')

    this.resonanciaService.editarResonancia(this.id, this.infoServicio)
    .subscribe(
      (data) => {
        console.log(data);
      })

  }


}
