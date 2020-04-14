import { Component, OnInit } from '@angular/core';
import { PacienteService  } from '../../services/paciente/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  PaqueteService } from '../../services/paquete/paquete.service';
import { NgForm } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud/solicitud.service';
import   swal  from 'sweetalert';
import { Paquetes } from 'src/app/intefaces/paquetes.interfaces';
import { Paciente } from 'src/app/intefaces/pacientes.interfaces';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  public fecha = ` ${new Date().toLocaleDateString()}`;
  
  public paciente: any;
  public usuarioMaq:any;
  public paquetesDB: any;
  public paqueteSelected: any;
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
                 this.getPaquetes();
               

               }

  ngOnInit(  ) {
      this.getUsuarioLocalStorage();

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

      })
    }


    // obtenemos el paciente por el ID
    getPacieteByID( id: string  ){

    this._pacientesServices.getPacienteBtID( id )
    .subscribe( (data:any) => {  
      console.log(data) 
      this.paciente = data.paciente;
        })

    }

    // obtiene los paquetes para el select 
    getPaquete( id: string  ){
      
        this.paquetesService.getPaqueById( id )
        .subscribe( (data: any )  => {
          console.log(  data.paquete )
            this.paqueteSelected = data.paquete;
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

              if( this.paqueteSelected.nombrePaquete === "PAQUETE DE CONTROL PRENATAL" )
              this._router.navigateByUrl('/paqueteMaternidad');

              return;
            }

          })
      })

    }

   // TODO: Sacar el valor del boton de swal y rediccionar al canelar la solicitud

    cancelarPaq(){
    
      swal("¿Estas seguro de  cancelar el paquete?", {
        dangerMode: true,
        buttons: ['Regresar', 'Cancelar']
      });

    console.log( swal.getState());
      
  }

}
