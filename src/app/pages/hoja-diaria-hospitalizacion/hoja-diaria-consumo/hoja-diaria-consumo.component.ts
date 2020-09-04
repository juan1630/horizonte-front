import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MaquinasService } from 'src/app/services/paquetesQuirofano/agregarMaquinas/maquinas.service';

@Component({
  selector: 'app-hoja-diaria-consumo',
  templateUrl: './hoja-diaria-consumo.component.html',
  styleUrls: ['./hoja-diaria-consumo.component.css']
})
export class HojaDiariaConsumoComponent implements OnInit {

  public id = '';

  public excedentesForm : FormGroup;

   public paciente = {
    // RFCFiscal: "",
    nombre : "",
    apellidoMaterno: "",
    apellidoPaterno: "",
    curp: "",
    excedentes : [ ],
    sexo: "",
    direccion: "",
    edad: 0,
    diagnosticoInicial: "",
    diagnosticoActual: "",
    // historiaClinica: [],
    paquetes: "",
    _id: ""
  }


  constructor(
    private pacienteService: PacienteService,
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private _maquinasService: MaquinasService
  ) { }

  ngOnInit(): void {

    
    this.id = this._route.snapshot.paramMap.get('id');


    this.crearFormularioExcedentes();
    this.agregarExcedentes();
    // this.obtenerPaciente();
    this.obtenerHistoriaPacienteHospitalizado();

  }

  obtenerHistoriaPacienteHospitalizado() {
    this._maquinasService.verPacienteHospitalizadoById( this.id )
    .subscribe(  (data:any) => {
      console.log("data", data);
      this.paciente.nombre = data.data.nombre;
      this.paciente.apellidoMaterno = data.data.apellidoMaterno;
      this.paciente.apellidoPaterno = data.data.apellidoPaterno;
      this.paciente.sexo = data['data']['idPaciente']['sexo'];
      this.paciente.edad = data['data']['idPaciente']['edad'];
      this.paciente.curp = data['data']['idPaciente']['curp'];
      this.paciente.direccion = data['data']['idPaciente']['calleNumeroPaciente'];
      this.paciente._id = data['data']['idPaciente']['_id'];
      this.paciente.diagnosticoInicial  = data['data']['diagnosticoInicial']
      this.paciente.diagnosticoActual = data['data']['diagnosticoActual'];
      this.paciente.excedentes = data.data.excedentes;
    } )

    // console.log(  this.paciente );
  }

  // obtenerPaciente(){

  //   this.pacienteService.getPacienteBtID( this.id )
  //   .subscribe( 
  //     (data:any) => {

  //         console.log("Paciente", data);


  //       this.paciente = data.paciente;
        
  //       this.paciente['nombre'] = data.paciente.nombre;
  //       this.paciente['apellidoMaterno'] = data.paciente.apellidoMaterno;
  //       this.paciente['apellidoPaterno'] = data.paciente.apellidoPaterno;
  //       this.paciente['curp'] = data.paciente.curp;
  //       this.paciente['edad'] = data.paciente.edad;
  //       this.paciente['paquetesQuirofano']  = data.paciente.paquetesQuirofano;

  //     }
  //   )
  // }

  get excedentes () {
    return  this.excedentesForm.get('excedentes') as FormArray;

  }

  crearFormularioExcedentes() {


    this.excedentesForm  = this.fb.group({
  
      excedentes: this.fb.array([])

    });

  }


  agregarExcedentes() {

    // this.agregarExcedentes();

    const excedentesGroup = this.fb.group({
      nombre: '',
      cantidad: '',
      horaAplicacion : ''
    });

    // let i = 0;
    // console.log(i);
    this.excedentes.push( excedentesGroup );


  }


  enviarExcedentes() {

    this._maquinasService.agregarExcedentes(this.id, this.excedentesForm.value )
    .subscribe( (data)  => {
      console.log(data);

      // this.obtenerPaciente();

      this.obtenerHistoriaPacienteHospitalizado();

    } )

    
  }

}
