import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { getDataStorage } from '../../../functions/storage/storage.funcion';

import * as moment from 'moment';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaGeneralService } from 'src/app/services/consulta-general/consulta-general.service';

@Component({
  selector: 'app-consulta-general',
  templateUrl: './consulta-general.component.html',
  styleUrls: ['./consulta-general.component.css']
})
export class ConsultaGeneralComponent implements OnInit {

  public id: string;
  public nombrePaciente: '';
  public contactoEmergencia1: '';
  public telefono: '';
  public calleNumeroPaciente: '';
  public edad: '';
  public correo: '';


  public enfermeriaVisitas = {
    horaSalida: '',
    horallegada: '',
    servicio: '',
    pacienteId: this.id,
    atendio: getDataStorage().nombre,
    doctor: '',
    consultorio: '',
    nombrePaciente: this.nombrePaciente,
  }
  constructor( 
    private SocketLoginService: WsLoginService,
    private _ObtenerPacienteById: PacienteService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _ConsutlaService: ConsultaGeneralService ) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

    this._ObtenerPacienteById.getPacienteBtID(this.id).subscribe(
      (res:any) => {
        console.log(res);
        this.nombrePaciente = res.paciente.nombrePaciente;
        this.contactoEmergencia1 = res.paciente.contactoEmergencia1;
        this.telefono = res.paciente.telefono;
        this.calleNumeroPaciente = res.paciente.calleNumeroPaciente;
        this.edad = res.paciente.edad;
        this.correo = res.paciente.correo;
        this.enfermeriaVisitas.nombrePaciente = res.paciente.nombrePaciente;
        this.enfermeriaVisitas.pacienteId = res.paciente._id;
      }
    )

  }

  enviarId(){
    
    // this.SocketLoginService.enviarConsultas()
    console.log(this.id);
    console.log(this.enfermeriaVisitas);
    this._ConsutlaService.agregarVisita(this.enfermeriaVisitas).subscribe(
      res => {
        console.log(res);

        this.SocketLoginService.enviarConsultas(
          (res:any) =>{
            console.log(res);
            
            
          }
      
        )
        
      }
    )
  
    
  }
  

  

}
