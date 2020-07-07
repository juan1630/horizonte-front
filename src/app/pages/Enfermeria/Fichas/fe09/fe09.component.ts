import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import swal from "sweetAlert";
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-fe09',
  templateUrl: './fe09.component.html',
  styleUrls: ['./fe09.component.scss']
})
export class FE09Component implements OnInit {

  public imc: number;
  public talla: number;
  public peso: number;

  public id: string;
  public fecha: string;
  public infPaciente = {
    esquemaVacunacion: ""
  }

  public paciente = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    domicilio: '',
    estadoPaciente: '',
    fechaNacimiento: '',
    telefono: '',
    edad: ''
  }

  constructor(
      private _ObtenerPacienteService: PacienteService,
      private _route: ActivatedRoute
  ) {

   }

  ngOnInit(): void {

      this.fecha = moment().format('MMMM Do YYYY');
    console.log(moment());

    // Obtener Id del paciente
    this.id = this._route.snapshot.paramMap.get('id');

    this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe(
      (data:any) => {
        console.log(data);

        this.paciente.nombre = data.paciente.nombrePaciente;
        this.paciente.apellidoPaterno = data.paciente.apellidoPaterno;
        this.paciente.apellidoMaterno = data.paciente.apellidoMaterno;
        this.paciente.domicilio = data.paciente.calleNumeroPaciente;
        this.paciente.estadoPaciente = data.paciente.estadoPaciente;
        this.paciente.fechaNacimiento = data.paciente.fechaNacimientoPaciente;
        this.paciente.telefono = data.paciente.telefono;
        this.paciente.edad = data.paciente.edad;
        
      }
    )
    

  }
  validar(){
    if(this.infPaciente.esquemaVacunacion === "si"){
      console.log("pulsaste sí");
      
    }else{
      console.log("pulsaste no");
      
    }
  }

  alerta(){
    swal("Guardado", "", "success");
  }

  obtenerIMC(){
    
    this.imc = ((this.peso)/(this.talla * this.talla));
    let imcL = this.imc.toString();
    console.log(typeof imcL);

    imcL.split(',', 2);

    let imcLn;
    imcLn = parseFloat(imcL).toFixed(2);

    this.imc = imcLn;
    
    // this.imc = this.imc.;
  }

}
