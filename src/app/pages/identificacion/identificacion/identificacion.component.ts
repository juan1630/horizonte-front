import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { headerImg } from '../../../config/index.config';
import { getDataStorage  } from '../../../functions/storage/storage.funcion';
import  { IdentificacionConsultaService } from '../../../services/identificacion-consulta.service';
import { Router, ActivatedRoute  } from '@angular/router';

import * as moment from 'moment';
import * as jsPDF from 'jspdf';

moment.locale('es');




@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {


  public id = "";

  public nombreEnfermeraQueIngresa ="";
  public fechaDeIngreso = "";
  public horaDeIngreso = "";
  public genero = "";


  // public id = "5e98a29b0eb1ac2b44132b31";
  public paciente = {
    RFCFiscal: "",
    apellidoMaterno: "",
    apellidoPaterno: "",
    calleNumeroPaciente: "",
    coloniaFiscal: "",
    consultas: "",
    contactoEmergancia1: "",
    correo: "",
    cpFiscal: "",
    cpPaciente: 0,
    curp: "",
    edad: 0,
    emailFiscal: "",
    entidadFederativa: "",
    estadoPaciente: "",
    fechaNacimientoPaciente: "",
    fechaRegistro: "",
    historiaClinica: [],
    localidadFiscal: "",
    municipioFiscal: "",
    nombrePaciente: "",
    nombreRazonSocial: "",
    paisPaciente: "",
    sexo:"",
    alergias:"",
    paquetes: "",
    paquetesPacientes: "",
    poblacion: "",
    referenciaPaciente: "",
    telefono: "" ,
    telefonoContactoEmergencia1: "",
    __v: 0,
    _id: ""

  }


  public validado = true;


  public infoConsulta = {

    fechaIngreso: "",
    horaIngreso: "",
    enfermeraAtendio: "",
    diagnosticoInicial: "",
    diagnosticoActual:"",
    medicoTrante: "",
    paciente: "",
    genero:"",
    nombre:"",
    apellidoMaterno:"",
    apellidoPaterno:"",
    notificacionDeIdentificacion:'',
    membretesLegible:"",
    importtanciaIdentificacio:"",
    solicitudesDeEstudioDeGabinete:"",
    solicitudesDeEstudio:"",

  }



  constructor(
    private pacienteService: PacienteService,
    private _identifiacionService: IdentificacionConsultaService,
    private _route: ActivatedRoute
  ) {


    this.fechaDeIngreso = moment().format('MMMM Do YYYY');

    this.horaDeIngreso = moment().format('h:mm:ss a');

    this.nombreEnfermeraQueIngresa = getDataStorage().nombre;

   }

  ngOnInit(): void {


    this.id = this._route.snapshot.paramMap.get('id');

    this.getPaciente();

  }


//   ngOnInit(): void {
//     this.getPaciente();

//   }


  getPaciente(){
    this.pacienteService.getPacienteBtID( this.id )
    .subscribe( (data:any) => {
      console.log(data);
      this.paciente = data.paciente
    } )
  }


  enviarConsulta() {

    this.infoConsulta.enfermeraAtendio = this.nombreEnfermeraQueIngresa;
    this.infoConsulta.fechaIngreso = this.fechaDeIngreso;
    this.infoConsulta.horaIngreso = this.horaDeIngreso;
    this.infoConsulta.nombre = this.paciente.nombrePaciente;
    this.infoConsulta.apellidoPaterno= this.paciente.apellidoPaterno;
    this.infoConsulta.apellidoMaterno= this.paciente.apellidoMaterno;
    this.infoConsulta.paciente = this.paciente._id;
    this.infoConsulta.genero = this.paciente.sexo;



    this._identifiacionService.agregarConsulta( this.infoConsulta )
    .subscribe( (data:any) => {

      console.log( data );

        if( data.ok ) {
          alert('datos guardados');
        }
    } )

  }


  

  validarCampos(){

    if(this.infoConsulta.diagnosticoInicial == "" || this.infoConsulta.diagnosticoActual == "" || this.infoConsulta.medicoTrante == "" ){
      alert('Debes de validar los campos');
      return;

    }else {
      this.validado = false;
    }
  }



  imprimir(){


      let name = document.getElementById('name');

      let doc = new jsPDF();
      doc.addImage( headerImg, 'JPEG', 5 , 0, 200, 50 );

      doc.text(  10, 60,  `NOMBRE:  ${this.paciente.nombrePaciente}   ${this.paciente.apellidoPaterno}   ${this.paciente.apellidoMaterno}` );

      doc.text(  10, 70,  `CURP:  ${this.paciente.curp} ` );

      doc.text(100, 70, `FECHA DE NACIMIENTO:  ${this.paciente.fechaNacimientoPaciente}`);


      doc.text(10, 80, `SEXO: ${this.paciente.sexo}` )

      doc.text(100, 80 , `EDAD: ${this.paciente.edad}`);


      doc.text(10, 90,  `FECHA DE INGRESO: ${ this.fechaDeIngreso }`)


      doc.text( 110, 90, `HORA DE INGRESO: ${ this.horaDeIngreso }` )



      doc.text(  120, 60,  `ALERGIAS:  ${this.paciente.alergias} ` );

      this.enviarConsulta();


      doc.save('IDETIFICACION');



  }

}
