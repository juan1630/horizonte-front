import { Component, OnInit } from '@angular/core';
import { PacienteService  } from '../../services/paciente/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  PaqueteService } from '../../services/paquete/paquete.service';
import { NgForm } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud/solicitud.service';
import   swal  from 'sweetalert';
import { Paquetes } from 'src/app/intefaces/paquetes.interfaces';
import { PaquetesDB } from 'src/app/intefaces/pacientePaqueteDB.interfaces';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  public fecha = ` ${new Date().toLocaleDateString()}`;


  public paciente={
    RFCFiscal: "",
    apellidoMaterno:"1",
    apellidoPaterno:"1",
    calleNumeroPaciente: "vertice Z  0",
    coloniaFiscal: "",
    consultas:"1",
    contactoEmergancia1: "",
    correo: "",
    cpFiscal: "",
    cpPaciente: "" ,
    curp: "",
    edad : 0,
    emailFiscal: "",
    entidadFederativa: "",
    estadoPaciente: "",
    fechaNacimientoPaciente: "",
    fechaRegistro: "",
    localidadFiscal: "",
    municipioFiscal: "",
    nombrePaciente: "",
    nombreRazonSocial:"",
    paisPaciente: "",
    poblacion: "Maestro ",
    referenciaPaciente: "",
    telefono: "" ,
    telefonoContactoEmergencia1: ""
  };
  public usuarioMaq:any;
  public paquetesDB= {

    CitasIncluidas: [],
    costoTotal:0,
    examenesLaboratorio: [],
    icon: "",
    nombrePaquete: "",
    _id: ""
  };
  public paqueteSelected = {
    nombrePaquete: "",
    CitasIncluidas: [],
    costoTotal:0,
    examenesLaboratorio: [],
    icon: "",
    _id: ""
  };
  public paquetesPacientes: any;
  // declaradas
  public anticipo;
  public parentesco1: string;
  public parentesco2: string;
  public celular:string;
  public telefonoEmergencia2: string;
  public calleYnumeroFiscal: string;
  public telefonoFiscal: string;

  public contactoEmergencia2;



  // nota si no se tiene una interfaz, dejarlo de tipo any y un array de anys

  constructor(
                public _pacientesServices: PacienteService,
                public router: ActivatedRoute,
                private _router: Router,
                public paquetesService: PaqueteService,
                public _solicitud: SolicitudService

              ) {

               let id = this.router.snapshot.paramMap.get('id');
                // buscamos al paciente por el ID
               this.getPacieteByID( id );
               // obtenemos de la sesion el nombre del vendedor


              }

 ngOnInit(  ) {
                this.getUsuarioLocalStorage();
                this.getPaquetes();

    }


    // OBTENEMOS DEL LOCAL STORAGE EL NOMBRE DEL USUARIO QUIEN ATENDIO
    getUsuarioLocalStorage(){
      this.usuarioMaq =  JSON.parse( localStorage.getItem('usuario') );
    }

    // peticion para la solicitud
    getPaquetes(){
      this.paquetesService.getPaquetesSolicitud()

      .subscribe(  (data: any ) => {

        this.paquetesDB = data.paquetes;
        console.log( this.paquetesDB );

      })
    }


    // obtenemos el paciente por el ID
    getPacieteByID( id: string  ){

    this._pacientesServices.getPacienteBtID( id )
    .subscribe( (data:any) => {
      console.log(data);
      this.paciente = data.paciente;
        });
      

    }

    // obtiene los paquetes para el select
    getPaquete( id: string  ){

        this.paquetesService.getPaqueById( id )
        .subscribe( (data )  => {
            console.log(data);
            this.paqueteSelected = data;
              
              this.anticipo = 1000;
            }else if( this.anticipo = "SERVICIO DE LA MEMBRESIA" ){

              this.anticipo = 500;
            }
        });
    }
// esta funcio valida el select, que no vaya vacio
    validarSelect(  valor: string ){
        console.log( valor );
      if(valor === 'PARENTESCO' || valor.length === 0 ) {
        swal('Parentesco vacio', 'Debes elegir una opcion', 'error');
      }

    }


    // en esta funcion se envia la data necesaria para agregra el paquete al usuario

    enviar( f: NgForm  ){
      let dataForm = f.value;

      this._solicitud.setPaquete( dataForm, this.paciente, this.paqueteSelected, this.fecha )
      .subscribe( (data:any) => {
          this.paquetesPacientes = data.paquete;

          this._pacientesServices.addPaquete( this.paciente, this.paqueteSelected, dataForm , this.paquetesPacientes )
          .subscribe( (data: any) => {
            console.log( 'Actualizando info paciente',  data );
            if( data.ok ){
              swal('Paquete agregado', '', 'success');
              
              return;
              }
              // else if ( this.paqueteSelected.nombrePaquete === "PAQUETE MÉDICO LABORAL" ){
              //   this._router.navigateByUrl('/paqueteMaternidad');
              // }

            }

          })
      })

    }


     cancelarPaq(){

      swal("¿Estas seguro que deseas salir?",
      {
        buttons: {
        // cancel: "Cancelar",
        catch: {
          text: "Confirmar",
          value: "true",
        }
      }
      })
      .then(value => {
        console.log( value );
        if( value ){

          this._router.navigateByUrl('/paciente')
        }else {
          return;
        }

      }  )

     if( swal.getState().actions.value  ){
      this._router.navigateByUrl('/paciente');

     }

   }

}
