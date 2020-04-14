import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  ocultar = 'oculto';

  constructor() { }



  ocultarModal(){
    this.ocultar = 'oculto';

  }

  abrirModal(){
    this.ocultar ='';
  }


}
