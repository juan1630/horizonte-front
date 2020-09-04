import { Component, OnInit } from '@angular/core';
import { TomografiaService  } from '../../../../services/tomografia/tomografia.service'

@Component({
  selector: 'app-tomografia-nuevo',
  templateUrl: './tomografia-nuevo.component.html',
  styleUrls: ['./tomografia-nuevo.component.css']
})
export class TomografiaNuevoComponent implements OnInit {

  constructor(
    private tomografiaService:  TomografiaService
  ) { }

  ngOnInit(): void {
  }


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
    servicio:'tomografia'

  }




  enviar(){
    // console.log(  this.infoServicio );
    this.tomografiaService.agregarTomografias( this.infoServicio )
    .subscribe( 
      (data:any) => {
        if(data.ok){
          alert('Datos agregados');
        }
      }
     )
  }

}
