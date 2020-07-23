import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {


  public id = "5e98a29b0eb1ac2b44132b31";
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
    paquetes: "",
    paquetesPacientes: "",
    poblacion: "",
    referenciaPaciente: "",
    telefono: "" ,
    telefonoContactoEmergencia1: "",
    __v: 0,
    _id: ""
  }

  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    this.getPaciente();
  }


  getPaciente(){
    this.pacienteService.getPacienteBtID( this.id )
    .subscribe( (data:any) => {
      console.log(data);
      this.paciente = data.paciente
    } )
  }

}
