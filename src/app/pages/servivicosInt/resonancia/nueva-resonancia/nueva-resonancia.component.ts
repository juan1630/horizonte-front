import { Component, OnInit } from '@angular/core';
import { ResonanciaService } from 'src/app/services/resonancia/resonancia.service';

@Component({
  selector: 'app-nueva-resonancia',
  templateUrl: './nueva-resonancia.component.html',
  styleUrls: ['./nueva-resonancia.component.css']
})
export class NuevaResonanciaComponent implements OnInit {

  public infoServicio = {

    nombre:"",
    indicaciones: "",
    precioPublico: "",
    precioMembresia: "",
    precioHospitalizacionPublico:"",
    precioHospitalizacionMembresia:"",
    precioUrgenciaPublico: "",
    precioUrgenciaMembresia: "",
    precioHospitalizacionUrgenciaPublico:"",
    precioHospitalizacionUrgenciaMembresia:""

  }

  constructor(
    private resonanciaService: ResonanciaService
  ) { }

  ngOnInit(): void {
  
  }



  enviar(){
    
      this.resonanciaService.agregarResonancia( this.infoServicio )
      .subscribe(  
        (data) => {
          console.log( data );
        }
       )
  
  }

}
