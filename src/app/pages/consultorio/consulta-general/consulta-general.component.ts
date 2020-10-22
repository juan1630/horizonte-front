import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import { PacienteService } from 'src/app/services/paciente/paciente.service';

import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';

import { IdentificacionConsultaService } from 'src/app/services/identificacion-consulta.service';

import * as moment from 'moment';

moment.locale('es');

@Component({
  selector: 'app-consulta-general',
  templateUrl: './consulta-general.component.html',
  styleUrls: ['./consulta-general.component.css'],
})
export class ConsultaGeneralComponent implements OnInit {

  public nombrePaciente ="";
  public pacientes:[]=[];
  public idPaciente="";
  public fechaIngreso = moment().format('dddd Do MMM YYYY');
  public horaIngreso = moment().format('hh:mm');
  public servicio = "";
  public consultorio = "";

  public paciente = {
    nombrePaciente:"",
    apellidoPaterno:"",
    apellidoMaterno:"",
    genero:"",
    curp: "",
    id:"",
    fechaIngreso:this.fechaIngreso,
    horaIngreso: this.horaIngreso,
    enfermeraAtendio:  "" ,
    diagnosticoInicial: "",
    diagnosticoActual: "",
    medicoTrante: "",
    notaDeLaEnfermera: ""
  }

  constructor(
    public _pacienteService: PacienteService,
    public _route: ActivatedRoute,
    public _wsLoginService: WsLoginService,
    public _consultaService: IdentificacionConsultaService
  ) { }

  ngOnInit(): void {
    this.idPaciente =  this._route.snapshot.paramMap.get('id');
    // console.log(  this.idPaciente );

    if( this.idPaciente == null ){

      return;
    }else {

      this.obtenerPacientePorId();
    }


  }



  obtenerPacientePorId(){
      this._pacienteService.getPacienteBtID(  this.idPaciente )
      .subscribe(
        (data:any) => {

          console.log(data);
          this.paciente.nombrePaciente = data['paciente']['nombrePaciente'];
          this.paciente.apellidoPaterno = data['paciente']['apellidoPaterno'];
          this.paciente.apellidoMaterno = data['paciente']['apellidoMaterno'];
          this.paciente.curp = data['paciente']['curp'];
          this.paciente.genero = data['paciente']['genero']
          this.paciente.id = data['paciente']['_id'];
        });
  }


  seleccionarConsultprop( consultorio  ) {


    let selectConsultorio = document.getElementById('consultorioSelect');
      // console.log(consultorio.value);

      if( consultorio['value']   == "seleccionarConsultorio" ){
        alert('Selecciona un consultorio');
        selectConsultorio.classList.add('is-invalid')
        return;
      }
      this.consultorio = consultorio;

  }


  selecccionarServicio( servicio ) {
    this.servicio = servicio['value'];
    // console.log(  this.servicio);
  }



  motivoIngreso(motivo) {
    // console.log( motivo );
    this.paciente.diagnosticoInicial = motivo['value'];
  }


  notaEnfermera( nota ){

    this.paciente.notaDeLaEnfermera = nota['value'];
  }

  buscarPaciente(  nombre: string ){
    // console.log( nombre );

    if(  nombre.length >= 3 ){
      this._pacienteService.getPacientePorNombre( nombre )
      .subscribe(
         (data) => {

          //  console.log(data);
           if( data['pacientes']  == [] ){
             alert('No hay pacientes con ese nombre');
             return;
           }

          // this.paciente.nombrePaciente = data['paciente']['nombrePaciente'];
          // this.paciente.apellidoPaterno = data['paciente']['apellidoPaterno'];
          // this.paciente.apellidoMaterno = data['paciente']['apellidoMaterno'];
          // this.paciente.curp = data['paciente']['curp'];
          // this.paciente.genero = data['paciente']['genero']
          // this.paciente.id = data['paciente']['_id'];

          this.paciente = data['pacientes'];
          console.log(this.paciente);
          } );
    }

  }

  enviar(){

    this._consultaService.agregarConsulta(  this.paciente )
    .subscribe((data) => {
      console.log(data);
        if( data['ok'] ){
          // alert()
          this._wsLoginService.enviarConsultas(  data['data']['_id'] );
        }
      });
  }

}
