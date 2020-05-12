import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { ModalServiceService } from '../modal-service.service';
import { ModalServicioIntService } from './modal-servicio-int.service';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';

@Component({
  selector: 'app-modal-servicios-int',
  templateUrl: './modal-servicios-int.component.html',
  styleUrls: ['./modal-servicios-int.component.scss']
})
export class ModalServiciosIntComponent implements OnInit {
  @Input() idUser: string;

  public oculto = '';

  public paquetesDeLosPacientes: any[]=[];
  public pacientess: any[]=[];

  // public paquete: string;
 
  constructor(  public _modalService: ModalServiceService,
                public _modalServicioIntService: ModalServicioIntService,
                public _paquetesService: PaqueteService,
                public _pacienteService:PacienteService,
                private _router: Router  ) { }

  ngOnInit() {
    
  }

  agregarPaquete() {

    this._router.navigate(['/solicitud', this._modalServicioIntService.idUser]);

  }
 
  cambio( f ){
    console.log( f );
    if( f === 'ambulancia' ){
      // 
      this._router.navigateByUrl('/ambulancia');
    }else if( f === "rayosx" ){
      this._router.navigateByUrl('/xray')
    }else if( f === 'laboraorio' ){
        this._router.navigate(['/laboratorio/estudios/', this._modalServicioIntService.idUser])
    }else if(f ===  "otros"){ 
      this._router.navigate(['otros-servicios'])
    }
  }

}
