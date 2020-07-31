import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { getDataStorage } from '../../../functions/storage/storage.funcion';

import * as moment from 'moment';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaGeneralService } from 'src/app/services/consulta-general/consulta-general.service';
import swal from 'sweetalert';


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
    horallegada: moment().format('MMMM Do YYYY,h:mm:ss a'),
    servicio: 'consulta general',
    pacienteId: '',
    atendio: getDataStorage().nombre,
    contactoEmergencia: '',
    doctor: '',
    consultorio: '',
    nombrePaciente: '',
    apellido : '',
    apellidoMaterno: '',
    edad: ''
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

        this.nombrePaciente = res.paciente.nombrePaciente;
        this.contactoEmergencia1 = res.paciente.contactoEmergencia1;
        this.telefono = res.paciente.telefono;
        this.calleNumeroPaciente = res.paciente.calleNumeroPaciente;
        this.edad = res.paciente.edad;
        this.correo = res.paciente.correo;
        this.enfermeriaVisitas.nombrePaciente = res.paciente.nombrePaciente;
        this.enfermeriaVisitas.apellido = res.paciente.apellidoPaterno;
        this.enfermeriaVisitas.apellidoMaterno = res.paciente.apellidoMaterno;
        this.enfermeriaVisitas.edad = res.paciente.edad;
        this.enfermeriaVisitas.contactoEmergencia = res.paciente.contactoEmergencia1;
        this.enfermeriaVisitas.pacienteId = res.paciente._id;
      }
    )

  }

  enviarId(){
    
    // this.SocketLoginService.enviarConsultas()


    if( this.enfermeriaVisitas.doctor === ""  ){

      swal('Selecciona un paciente', '', 'error');
      return;

    }

    this._ConsutlaService.agregarVisita(this.enfermeriaVisitas).subscribe(
      (res:any) => {

        this.SocketLoginService.enviarConsultas( this.enfermeriaVisitas  );

        swal('Servicio registrado', 'El doctor esta notificado', 'success');
        this._router.navigateByUrl('/');
      }
    )
  
    
  }
  

  

}
