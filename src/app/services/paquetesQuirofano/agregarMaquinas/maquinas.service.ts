import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {

  
  constructor( private _http: HttpClient  ) { }
  


//listado de las maquinas

  
  verMaquinas(){

    let url = 'http://localhost:3200/ver/maquinas'
  
    
     return this._http.get( url);
  }

//listado de los medicamerntos

  verMedicamentos(){

    let url = 'http://localhost:3200/ver/medicamentos'
      return this._http.get( url )
  }

  
  agregarMaquina(  tipoIsumo, info  ){
    
    
    if(  tipoIsumo === 'maquina' ){ 
      
      
      let url = 'http://localhost:3200/agregar/maquina'

      return this._http.post( url, info );

   
    }else if(  tipoIsumo === 'medicamentos'  ) {

      let url = 'http://localhost:3200/agregar/medicamentos'
      return this._http.post( url, info);
   
    }

  }


  agregarPaqueteQuirofano( id: string , info: any ) {

    let url = 'http://localhost:3200/agregar/paquete/quirofano/' +id; 
        return this._http.put( url, info  );
  }

  crearPaqueteQuirofano( body ){
    let url = 'http://localhost:3200/crear/paquete/quirofano';

    return this._http.post(url, body);
  
  }

  verPaquetes() {
    
    let url = 'http://localhost:3200/ver/paquetes/quirofano';

    return this._http.get( url );

  }


  verPaquetePorId( id ){

    let url = 'http://localhost:3200/' + "ver/paquete/" +id; 

    return this._http.get( url );
  
  }

}
