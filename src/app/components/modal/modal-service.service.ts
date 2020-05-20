import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  ocultar = 'oculto';
  datos:any[];
  constructor() { }



  ocultarModal(){
    this.ocultar = 'oculto';

  }

  abrirModal(){
    this.ocultar ='';
  }
  getServiciosDatos(datos) {
    console.log(datos);
    this.datos = datos;
    return this.datos;
  }
  setServiciosDatos(){
    return this.datos;
  }

}
