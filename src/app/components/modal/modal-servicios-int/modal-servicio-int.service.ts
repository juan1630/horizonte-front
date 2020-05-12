import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServicioIntService {
  
  public ocultar: string = 'oculto';
  public pacientePaquete: any;
  public idUser: string = '';
  public paqueteVisitas:string;
   
  constructor() { }

  abrirModalServicioIntegrados( paciente: any ){

    console.log('Paciente', paciente );
    
    this.ocultar = '';
    this.idUser = paciente._id;
    this.pacientePaquete = paciente.paquetes;
    this.paqueteVisitas = paciente.paquetesVisitas;
    console.log( 'Paquetes', this.pacientePaquete);

  }

  cerrarModalServicioIntegrados(){
    this.ocultar = 'oculto';
  }


}
