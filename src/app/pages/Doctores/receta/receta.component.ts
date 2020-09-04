import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica/historia-clinica.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Cie10Service } from 'src/app/services/cie10/cie10.service';


@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css'],
  providers: [HistoriaClinicaService, Cie10Service]

})
export class RecetaComponent implements OnInit {

  public diagnosticosCie: any [] = [];
  public idCie: string;
  public fecha: string;
  public hora: string;
  public id: string;
  public medico = "Arquimides Rueda Cabrera";


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
    // historiaClinica: [],
    paquetesQuirofano: []

  }




  constructor(

    private _ObtenerPacienteService: PacienteService,
    private _route: ActivatedRoute,
    private _HistoriaClinicaService: HistoriaClinicaService,
    private _Cie10Service: Cie10Service

  ) { }

  ngOnInit(): void {
    this.fecha = moment().format('L');
    this.hora = moment().format('LT');
    // this.getDiagnosticos();
    // this.getDiagnosticos();


    this.id = this._route.snapshot.paramMap.get('id');
    this.idCie = this._route.snapshot.paramMap.get('idCie');
    // this.id = "5e98a29b0eb1ac2b44132b31";
    
    // this._Cie10Service.getCiePorNombre(this.idCie).subscribe(
    //   (data:any) => {
    //     console.log(data);
        
    //   }
    // )




    this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe(
      (data:any) => {

        console.log(data);
        // console.log(data.paciente.historiaClinica);
        
        // console.log(data.paciente.historiaClinica.length);
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

  // getDiagnosticos(){
  //   this._route.params.subscribe(params => {
  //     var id = params['id'];

  //     this._Cie10Service.getCiePorNombre(id).subscribe(
  //       (res:any) => {
  //         console.log(res);
  //       }
  //     )
  //   })
  // }

  

}
