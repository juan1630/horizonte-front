import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/components/modal/modal-service.service';
import { ModalServicioIntService } from 'src/app/components/modal/modal-servicios-int/modal-servicio-int.service';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { NgForm, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})

export class PacienteComponent implements OnInit {


  public pacientes2:any = [];
  public totalpaciente: string;
  public pagina : number = 0;
  filtropacientes = '';
  constructor( public modalService: ModalServiceService,
              public _pacienteService: PacienteService,
              public _modalservicioInt: ModalServicioIntService,
              //public Pacicentespipe: PacientesPipe
              ) { }

  ngOnInit() {

    this.obtenerPacientes();

  }



  obtenerPacientes() {

    this._pacienteService.getPacientes( this.pagina )
    .subscribe( (data: any) => {
      console.log( data );
      if( data['message']   === 'No hay pacientes' ) {

        alert('Aun no hay pacientes')
        return;
      }
       this.pacientes2 = data.users;
       this.totalpaciente = data.users.results;
    });

  }


  // verModal(){
  //   console.log('Abrir modal')
  // }

  paginaAnterior(){
    this.pagina = this.pagina - 8;
    this._pacienteService.getPacientes( this.pagina)
    .subscribe( (data: any) => {
      console.log( data.users );
      this.pacientes2 = data.users;
    } )
  }

  siguentePagina(  ){
    this.pagina += 8;
    this._pacienteService.getPacientes( this.pagina)
    .subscribe( (data: any) => {
      // console.log( data.users );
      this.pacientes2= data.users;
    } )
  }

  ingreso( f: NgForm ){

      // console.log( f )
    let nombre = f.value.buscarPaciente;

    // console.log( nombre );

    this._pacienteService.getPacientePorNombre( nombre )
    .subscribe( (data: any) => {
      // console.log(data.pacientes)
      this.pacientes2 = data.pacientes;
    } )

  }


}
