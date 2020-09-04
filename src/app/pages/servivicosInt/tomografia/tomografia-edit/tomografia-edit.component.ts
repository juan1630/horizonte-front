import { Component, OnInit } from '@angular/core';
import { TomografiaService } from 'src/app/services/tomografia/tomografia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tomografia-edit',
  templateUrl: './tomografia-edit.component.html',
  styleUrls: ['./tomografia-edit.component.css']
})
export class TomografiaEditComponent implements OnInit {



  public id = "";

  public infoServicio={

    ESTUDIO : "",
    INDICACIONES : "",
    PRECIO_PUBLICO : "",
    PRECIO_PUBLICO_URGENCIA : "",
    PRECIO_PUBLICO_HOSPITALIZACION : "",
    PRECIO_PUBLICO_HOSPITALIZACIO_URGENCIA : "",
    PRECIO_MEMBRESIA : "",
    PRECIO_MEMBRESIA_URGENCIA : "",
    PRECIO_MEMBRESIA_HOSPITALIZACION : "",
    PRECIO_MEMBRESIA_HOSPITALIZACION_URGENCIA : "",

  }




  constructor(
    private tomografiaService: TomografiaService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    this.id = this._route.snapshot.paramMap.get('id');
    this.tomografiaService.obtenerTomografiaPorId(  this.id )
    .subscribe(
      (data:any) => {
        // console.log(data);

        if( data.ok){
          this.infoServicio.ESTUDIO = data.tomografia.ESTUDIO;
          this.infoServicio.INDICACIONES = data.tomografia.INDICACIONES;
          this.infoServicio.PRECIO_PUBLICO= data.tomografia.PRECIO_PUBLICO;
          this.infoServicio.PRECIO_PUBLICO_URGENCIA= data.tomografia.PRECIO_PUBLICO_URGENCIA;
          this.infoServicio.PRECIO_PUBLICO_HOSPITALIZACION= data.tomografia.PRECIO_PUBLICO_HOSPITALIZACION;
          this.infoServicio.PRECIO_PUBLICO_HOSPITALIZACIO_URGENCIA= data.tomografia.PRECIO_PUBLICO_HOSPITALIZACIO_URGENCIA;
          this.infoServicio.PRECIO_MEMBRESIA= data.tomografia.PRECIO_MEMBRESIA;
          this.infoServicio.PRECIO_MEMBRESIA_URGENCIA= data.tomografia.PRECIO_MEMBRESIA_URGENCIA;
          this.infoServicio.PRECIO_MEMBRESIA_HOSPITALIZACION= data.tomografia.PRECIO_MEMBRESIA_HOSPITALIZACION;
          this.infoServicio.PRECIO_MEMBRESIA_HOSPITALIZACION_URGENCIA= data.tomografia.PRECIO_MEMBRESIA_HOSPITALIZACION_URGENCIA;

        }
      }
    )
  }

  enviar(){
    this.tomografiaService.actualizarTomografia(this.id, this.infoServicio)
    .subscribe( 
      (data) => {
        console.log(data);
      }
     )
  }



}
