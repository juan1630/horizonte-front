import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';
import { Paquetes } from 'src/app/intefaces/paquetes.interfaces';


@Component({
  selector: 'app-paquete-id',
  templateUrl: './paquete-id.component.html',
  styleUrls: ['./paquete-id.component.scss']
})
export class PaqueteIdComponent implements OnInit {

public paquete= {
  nombrePaquete: "",
  CitasIncluidas: [],
  consultasGinecologia: 0,
  ultrasonidos: [],
  costoTotal:0,
  examenesLaboratorio: [],
  descuentos: [],
  farmacia: [],
  extras: [],
  estudios: [],
  rayosX: [],
  icon: "",
  _id: ""
};
        
  constructor(
              public router: ActivatedRoute, 
              public paqueteService: PaqueteService
              ) { }

  ngOnInit() {

    let id = this.router.snapshot.paramMap.get('id');

    this.obtenerPaquete(id);
  }


  obtenerPaquete( id:string ){
    this.paqueteService.getPaqueById( id )
    .subscribe( (data:any) => {
      console.log( data );
      this.paquete = data;
    } )
    
  }

 
}
