import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/intefaces/pacientes.interfaces';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';

interface HtmlInputEvent  extends Event {
  target : HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-pendiente-paciente',
  templateUrl: './pendiente-paciente.component.html',
  styleUrls: ['./pendiente-paciente.component.css']
})
export class PendientePacienteComponent implements OnInit {

  public id = "";

  public paciente = {
    nombrePaciente: "",
    apellidoPaterno : "",
    apellidoMaterno:"",
    curp : "",
    sexo: "",
    edad:"",
    telefono:"",
    paquetePaciente:"",
    id:"",
    contrato:""
  }

  public documentos = {
    contrato:"",
    ine:""
  }

  public contratoFile: File;

  // public contratoInput: HTMLInputElement;
  public fechasubida = moment().format('MMMM Do YYYY,h:mm');


  constructor(
    public _pacienteService: PacienteService,
    public _route: ActivatedRoute,
    public _paqueteService: PaqueteService
  ) { }

  ngOnInit(): void {


    this.id = this._route.snapshot.paramMap.get('id');

    this._pacienteService.getPacienteBtID(this.id)
    .subscribe(  (data:any) => {
      console.log(data);

      this.paciente.nombrePaciente = data.paciente.nombrePaciente;
      this.paciente.apellidoPaterno = data.paciente.apellidoPaterno;
      this.paciente.apellidoMaterno = data.paciente.apellidoMaterno;
      this.paciente.curp = data.paciente.curp;
      this.paciente.edad = data.paciente.edad;
      this.paciente.id = data.paciente._id;
      this.paciente.sexo = data.paciente.sexo;
      this.paciente.telefono = data.paciente.telefono;
      this.paciente.paquetePaciente = data.paciente.paquetesPacientes;


      this._paqueteService.getPacientePaquete( this.paciente.id )
      .subscribe(
        (data:any) => {

          console.log(data);

          this.paciente.contrato = data.pacientesPaquetes.paquetesPacientes[0].contrato;

          console.log(this.paciente.contrato);

        });


      });



  }


  comprobarArchivio(ev: HtmlInputEvent ) {
    console.log(ev);
    this.contratoFile = <File> ev.target.files[0];

    // console.log(  this.contratoFile );

  }



  upLOadFiles(){

    // call to the service

    this._paqueteService.subirDocsPaquetes(  this.contratoFile, this.paciente.paquetePaciente )
    .subscribe( (data:any) => {
      console.log(data);
      if(data.ok ){


        this.documentos.contrato  = data.contrato;
      }
    } );

  }


}
