import { Component, OnInit } from '@angular/core';
import {  getDataStorage } from '../../../functions/storage/storage.funcion';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';
import { socioHorizonte } from '../../../config/horizonteSocio';

import * as jsPDF from 'jspdf';
import * as moment from 'moment';
import swal from 'sweetalert';

moment.locale('es');

@Component({
  selector: 'app-solicitud-membresia',
  templateUrl: './solicitud-membresia.component.html',
  styleUrls: ['./solicitud-membresia.component.css']
})
export class SolicitudMembresiaComponent implements OnInit {

  public infoUsuario = {
    fechaAfiliacion:'',
    fechaFinaliza: '',
    metodoPago: 'Selecciona la forma de pago',
    atendio:'',
    usuario: ''
  }

  public pacienteInfo = {
    ocupacion: ''
  }
   
  public paciente = {
    RFCFiscal: "" ,
    apellidoMaterno: "",
    apellidoPaterno: "",
    calleNumeroPaciente: "",
    consultas: "",
    contactoEmergancia1: "",
    correo: "",
    cpFiscal: 0 ,
    cpPaciente: 0 ,
    curp: "",
    edad: 0,
    emailFiscal: "",
    entidadFederativa: "" ,
    estadoPaciente: "",
    fechaNacimientoPaciente: "",
    fechaRegistro: "",
    sexo: "",
    historiaClinica: [],
    localidadFiscal:"" ,
    municipioFiscal:"" ,
    nombrePaciente: "",
    nombreRazonSocial:"" ,
    paisNacimiento: "",
    paisPaciente: "",
    paquetes: "",
    paquetesVisitas: "",
    poblacion: "",
    referenciaPaciente: "",
    telefono: 0,
    telefonoContactoEmergencia1: ""
  }
  
  public id: string;
  public fechaFinaliza;
  
  constructor(
    private _route: ActivatedRoute,
    private _pacienteService :PacienteService,
    private _solicitud: SolicitudService
    ) { }
    
    public fecha =  moment().format('dddd Do MMM YYYY');


    ngOnInit(): void {
      
      this.infoUsuario.fechaAfiliacion =  moment().format('dddd Do MMM YYYY h:mm:ss a');
      this.infoUsuario.atendio = getDataStorage().nombre;
      this.id = this._route.snapshot.paramMap.get('id');
      this.infoUsuario.usuario = this.id;
      this.fechaFinaliza  =  moment().clone().add(1, 'year').format('dddd Do MMM YYYY');
      this.infoUsuario.fechaFinaliza = this.fechaFinaliza;
      
    this.obtenerUsauario();

  }


  obtenerUsauario(){
    this._pacienteService.getPacienteBtID( this.id )
    .subscribe(  (data:any) => {
        this.paciente = data.paciente

    } )
  }

  enviar(){

    if( this.infoUsuario.metodoPago === 'Selecciona la forma de pago' ){
      swal('Selecciona un metodo de pago', '', 'error');
      return;
    }

      this._solicitud.addMembresia(  this.infoUsuario )

      .subscribe( (data:any) => {
        console.log( this.infoUsuario );
        console.log(data);
          if(data.ok){
            this.generarPDF();
            swal('Membresia adquirida', '', 'success');
          }
      } )
  }


  generarPDF(){


    const doc = new jsPDF();

    doc.setFontSize(10);

    doc.addImage( socioHorizonte, 'JPEG', 10, 3, 50, 25 );

    doc.text(  70, 10,  ` VENDEDOR: ${ this.infoUsuario.atendio }   ${  this.infoUsuario.fechaAfiliacion }   FOLIO: 1 `  );

    doc.text( 100 , 30 , `DATOS DEL CLIENTE `  );

    doc.text( 10,40, `APELLIDOS: ${ this.paciente.apellidoPaterno  }   ${this.paciente.apellidoMaterno }  NOMBRES: ${ this.paciente.nombrePaciente } `  );

    doc.text( 110, 50 , `FECHA NACIMIENTO: ${ this.paciente.fechaNacimientoPaciente  }` )
    // 

    doc.text( 10,60, `EDAD: ${this.paciente.edad} `  );

    doc.text( 55,60, `GÉNERO: ${this.paciente.sexo} `  );
    
    doc.text( 10,70, `NACIONALIDAD: ${this.paciente.paisNacimiento}  TIPO DE MEMBRESIA: MEMBRESIA`  );
    
    //   

    doc.text(10, 80, `OCUPACIÓN: ${this.pacienteInfo.ocupacion}   RFC: ${this.paciente.RFCFiscal} `)

    doc.text( 100, 90 , `DOMICILIO FISCAL`  );

    doc.text( 10, 100, `CALLE Y NÚMERO : ${this.paciente.calleNumeroPaciente } ` )

    doc.text(110, 100 ,`COLONIA O FRACCIONAMIENTO: ${ this.paciente.cpFiscal }`)

    doc.text( 10,110, `MUNICIPIO: ${this.paciente.municipioFiscal}   ENTIDAD FEDERATIVA: ${this.paciente.entidadFederativa}   C.P. ${ this.paciente.cpFiscal} `)

    // 


    doc.text( 100, 120 , `DOMICILIO PARTICULAR`  );

    doc.text( 10,130, `CALLE Y NÚMERO : ${this.paciente.calleNumeroPaciente } ` );

    doc.text( 110, 130, `COLONIA O FRACCIONAMIENTO: ${ this.paciente.poblacion } ` );

    doc.text( 10, 140, `ENTIDAD FEDERATIVA: ${this.paciente.estadoPaciente}    ` )

    doc.text( 90, 140, `C.P. ${ this.paciente.cpPaciente} ` );

    doc.text(120, 140, `MUNICIPIO: ${this.paciente.poblacion}`);

    doc.text( 10, 150, ` REFERENCIAS: ${this.paciente.referenciaPaciente} ` );

    // 

    doc.text( 100, 160 , `TELEFONOS`  );


    doc.text(50 ,170, `PARTICULAR: ${this.paciente.telefono}  `   )



    doc.text(100 ,180, `     EMAIL:${this.paciente.correo} `   )

    
    doc.text( 100, 190 , `VIGENCIA`  );


    
    doc.text(10,200, `INICIA: ${this.infoUsuario.fechaAfiliacion}   TÉRMINO:${ this.infoUsuario.fechaFinaliza } ` );

    doc.text(10, 210, `METODO DE PAGO  ${this.infoUsuario.metodoPago}  IMPORTE: 420 M.N     I.V.A: 80 M.N                           TOTAL: 500 M.N.  `)


    doc.save( `AFILIACION: ${this.paciente.nombrePaciente} ${ this.paciente.apellidoPaterno }`);


  }
  


}
