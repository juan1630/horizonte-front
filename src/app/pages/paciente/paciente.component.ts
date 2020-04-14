import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/components/modal/modal-service.service';
import { ModalServicioIntService } from 'src/app/components/modal/modal-servicios-int/modal-servicio-int.service';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {


  public pacientes:any = [];
  public pagina : number = 0;

  constructor( public modalService: ModalServiceService,
              public _pacienteService: PacienteService,
              public _modalservicioInt: ModalServicioIntService,
              ) { }

  ngOnInit() {
    // console.log('Inicio del paciente ');
    this._pacienteService.getPacientes( this.pagina )
    .subscribe( (data: any) => {
      console.log( data );
       this.pacientes = data.users;

       
    })
  }

  // verModal(){
  //   console.log('Abrir modal')
  // }

  paginaAnterior(){
    this.pagina -= 8;
    this._pacienteService.getPacientes( this.pagina)
    .subscribe( (data: any) => {
      console.log( data.users );
      this.pacientes = data.users;
    } )
  }

  siguentePagina(  ){
    this.pagina += 8;
    this._pacienteService.getPacientes( this.pagina)
    .subscribe( (data: any) => {
      // console.log( data.users );
      this.pacientes = data.users;
    } )
  }
    
  ingreso( f: NgForm ){

      // console.log( f )
    let nombre = f.value.buscarPaciente;

    // console.log( nombre );

    this._pacienteService.getPacientePorNombre( nombre )
    .subscribe( (data: any) => {
      // console.log(data.pacientes)
      this.pacientes = data.pacientes;
    } )
  
  }


}
