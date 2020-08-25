import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { MaquinasService } from 'src/app/services/paquetesQuirofano/agregarMaquinas/maquinas.service';

@Component({
  selector: 'app-paquete-quirofano',
  templateUrl: './paquete-quirofano.component.html',
  styleUrls: ['./paquete-quirofano.component.css']
})
export class PaqueteQuirofanoComponent implements OnInit {


  public nombrePacienteTxt = "";

  public id = "";
  public paquete = {
      costoHorasRecuperacion:0 ,
      participantes: [],
      horaRecuperacion: "",
      maquinas: [],
      medicamentos: [],
      nombrePaquete: "",
      _id: "",
      message: ""
  }

  public pacientes = [];

  constructor(
    private _maquinasService: MaquinasService,
    private _route: ActivatedRoute,
    private _pacienteService: PacienteService
  ) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');





    this._maquinasService.verPaquetePorId( this.id )
    .subscribe( (data:any) => {

        this.paquete = data.data;

    })
  

  }


  buscarPaciente(){

    console.log( this.nombrePacienteTxt );
    this._pacienteService.getPacientePorNombre(this.nombrePacienteTxt)
    .subscribe( (data:any) =>  {
      // console.log( data );
      this.pacientes = data.pacientes
    } )

  }



  agregarPaquete( id ) {
    console.log(id);
  }

}
