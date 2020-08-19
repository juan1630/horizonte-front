import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica/historia-clinica.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hevolucion-cg',
  templateUrl: './hevolucion-cg.component.html',
  styleUrls: ['./hevolucion-cg.component.css'],
  providers: [HistoriaClinicaService]
})
export class HEvolucionCGComponent implements OnInit {

  public fecha: string;
  public hora: string;
  public id: string;

  public paciente = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: '',
    registro: '',
    sexo: '',
    medico: '',
    direccion: '',
    talla: '',
    peso: '',
    imc: '',
    fc: '',
    fr: '',
    temp: '',
    pc: '',
    pa: '',
    pt: '',
    apgar: '',
    sao: '',
    alergias: '',
    historiaClinica: [],
    paquetesQuirofano: []

  }
  
  constructor(

      private _ObtenerPacienteService: PacienteService,
      private _route: ActivatedRoute,
      private _HistoriaClinicaService: HistoriaClinicaService

  ) { }

  ngOnInit(): void {

    // FECHA
    this.fecha = moment().format('L');
    this.hora = moment().format('LT');

    // Obtener Id del Paciente
    // this.id = this._route.snapshot.paramMap.get('id');
    this.id = "5e98a29b0eb1ac2b44132b31";


    this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe(
      (data:any) => {

        console.log(data);
        // console.log(data.paciente.historiaClinica[19]);
        
        console.log(data.paciente.historiaClinica.length);
        let index = data.paciente.historiaClinica.length - 1;

        this.paciente.nombre = data.paciente.nombrePaciente;
        this.paciente.apellidoPaterno = data.paciente.apellidoPaterno;
        this.paciente.apellidoMaterno = data.paciente.apellidoMaterno;
        this.paciente.direccion = data.paciente.calleNumeroPaciente;
        this.paciente.edad = data.paciente.edad;
        this.paciente.sexo = data.paciente.sexo;
        this.paciente.registro = data.paciente._id;
        this.paciente.talla = data.paciente.historiaClinica[index].tallaNino;
        this.paciente.peso = data.paciente.historiaClinica[index].pesoNino;
        this.paciente.imc = data.paciente.historiaClinica[index].imcNino;
        this.paciente.fc = data.paciente.historiaClinica[index].fcNino;
        this.paciente.fr = data.paciente.historiaClinica[index].frNino;
        this.paciente.temp = data.paciente.historiaClinica[index].tempNino;
        this.paciente.pc = data.paciente.historiaClinica[index].pcNino;
        this.paciente.pa = data.paciente.historiaClinica[index].paNino;
        this.paciente.pt = data.paciente.historiaClinica[index].ptNino;
        this.paciente.apgar = data.paciente.historiaClinica[index].apgarNino;
        this.paciente.sao = data.paciente.historiaClinica[index].saoNino;
        this.paciente.alergias = data.paciente.historiaClinica[7].alergia;
        this.paciente.paquetesQuirofano = data.paciente.paquetesQuirofano[1];

        console.log(this.paciente);

      }
      
    )

  }

}
