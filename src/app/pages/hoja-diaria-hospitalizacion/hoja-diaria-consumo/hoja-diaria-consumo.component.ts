import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-hoja-diaria-consumo',
  templateUrl: './hoja-diaria-consumo.component.html',
  styleUrls: ['./hoja-diaria-consumo.component.css']
})
export class HojaDiariaConsumoComponent implements OnInit {

  public id = "";

  public excedentesForm : FormGroup;
   public paciente = {
    RFCFiscal: "",
    nombrePaciente : "",
    apellidoMaterno: "",
    apellidoPaterno: "",
    curp: "",
    edad: 0,
    historiaClinica: [],
    paquetes: "",
    paquetesQuirofano: [{
      nombrePaquete :"",
      costoRecuperacion: "",
      horaRecuperacion: "",
      maquinas:[{nombreMaquina: "", costoPorHora: "", horasAUsar: ""}],
      medicamentos: [{nombreMedicamentos: "", cantidadMedicamento: "", costoMedicamento: ""}],
      participantes: [{especialista: "", montoEspecialista: ""}]
    }],
    __v: 0,
    _id: ""
  }


  constructor(
    private pacienteService: PacienteService,
    private _route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    
    this.id = this._route.snapshot.paramMap.get('id');
    this.pacienteService.getPacienteBtID( this.id )
    .subscribe( 
      (data:any) => {

        this.paciente = data.paciente;

        console.log(  data.paciente );

        this.paciente['nombrePaciente'] = data.paciente.nombrePaciente;
        this.paciente['apellidoMaterno'] = data.paciente.apellidoMaterno;
        this.paciente['apellidoPaterno'] = data.paciente.apellidoPaterno;
        this.paciente['curp'] = data.paciente.curp;
        this.paciente['edad'] = data.paciente.edad;
        this.paciente['paquetesQuirofano']  = data.paciente.paquetesQuirofano;

      }
    )



    this.crearFormularioExcedentes();
    this.agregarExcedentes();

  }

  get excedentes () {
    return  this.excedentesForm.get('excedentes') as FormArray;

  }

  crearFormularioExcedentes() {


    this.excedentesForm  = this.fb.group({
  
      excedentes: this.fb.array([])

    });

  }


  agregarExcedentes() {

    const excedentesGroup = this.fb.group({
      nombre: '',
      cantidad: '',
      horaAplicacion : ''
    });

    this.excedentes.push( excedentesGroup );


  }


}
