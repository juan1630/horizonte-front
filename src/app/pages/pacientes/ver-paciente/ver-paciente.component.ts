import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { PacienteService } from 'src/app/services/paciente/paciente.service';
import * as moment from 'moment';

moment.locale('es');

@Component({
  selector: 'app-ver-paciente',
  templateUrl: './ver-paciente.component.html',
  styleUrls: ['./ver-paciente.component.css']
})
export class VerPacienteComponent implements OnInit {


  public id = "";
  public fechaHoy =  moment().format('dddd Do MMM YYYY: hh:mm:ss');

  public paciente = {

    nombrePaciente:"",
    apellidoPaterno:"",
    apellidoMaterno: "",
    curp:"",
    telefono:0,
    id:"",
    direccion: {
      estadoPaciente:"",
      callePaciente:"",
      paisPaciente:"",
      cp:""
    },
    correo: "",
    cp:"",
    edad:"",
    paquetes : []
  }

  constructor(
    private _pacienteService:PacienteService,
    private _route: ActivatedRoute,
    public _router: Router
  ) { }

  ngOnInit(): void {


    this.id = this._route.snapshot.paramMap.get('id');
    this.obtenerPaciente();

  }

  obtenerPaciente(){

    this._pacienteService.getPacienteBtID(  this.id )
    .subscribe( (data:any) => {

      console.log(data);
      this.paciente.nombrePaciente = data.paciente.nombrePaciente;
      this.paciente.apellidoPaterno = data.paciente.apellidoPaterno;
      this.paciente.apellidoMaterno = data.paciente.apellidoMaterno;
      this.paciente.cp = data.paciente.cpPaciente;
      this.paciente.direccion.estadoPaciente = data['paciente']['estadoPaciente'];
      this.paciente.direccion.paisPaciente = data['paciente']['paisPaciente'];
      this.paciente.direccion.callePaciente = data['paciente']['callePaciente'];
      this.paciente.direccion.cp = data['paciente']['cpPaciente'];
      this.paciente.edad = data.paciente.edad;
      this.paciente.correo = data.paciente.correoPaciente;
      this.paciente.curp = data.paciente.curp;
      this.paciente.id = data.paciente._id;
      this.paciente.paquetes = data.paciente.paquetes;


      console.log(this.paciente.paquetes);

    });
  }



  irAUnServicio(  servicio ){
    // console.log( servicio)
    this._router.navigate(['/consulta', this.id ]);
  }

}
