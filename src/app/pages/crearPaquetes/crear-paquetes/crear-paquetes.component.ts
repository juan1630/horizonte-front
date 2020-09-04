import { Component, OnInit   } from '@angular/core';
import  {  FormArray, FormBuilder, ValidationErrors, Validators, FormControl, FormGroup  }  from '@angular/forms'
import { total } from 'src/app/functions/storage/pacienteIntegrados';
import { MaquinasService,  } from 'src/app/services/paquetesQuirofano/agregarMaquinas/maquinas.service';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-paquetes',
  templateUrl: './crear-paquetes.component.html',
  styleUrls: ['./crear-paquetes.component.css']
})
export class CrearPaquetesComponent implements OnInit {



  

  public registerForm: FormGroup;
  public allMaquinas:[] =[];
  public allMedicena: []=[];
  public id = "";
  public totalMaquinas = 0;
  public totalMedicamentos = 0;
  public totalHorasRecuperacionNumber = 0;
  public totalEspecialista = 0;
  
 
  
  public pacienteTxt = "";
  
  

  public pacientesDB=[{
    RFCFiscal: "",
    apellidoMaterno: "",
    apellidoPaterno: "",
    calleNumeroPaciente: "",
    coloniaFiscal: "",
    consultas: "",
    contactoEmergancia1: "",
    correo: "",
    cpFiscal: "",
    cpPaciente: 0,
    curp: "",
    edad: 0,
    emailFiscal: "",
    entidadFederativa: "",
    estadoPaciente: "",
    fechaNacimientoPaciente: "",
    fechaRegistro: "",
    historiaClinica: [],
    localidadFiscal: "",
    municipioFiscal: "",
    nombrePaciente: "",
    nombreRazonSocial: "",
    genero:"",
    paisPaciente: "",
    paquetes: {_id: "", nombrePaquete: "", costoTotal: "" , consultasGinecologia: 0, examenesLaboratorio: [],},
    paquetesVisitas: "",
    poblacion: "",
    referenciaPaciente: "",
    telefono: 73456456,
    telefonoContactoEmergencia1: "",
    __v: 0,
    _id: ""
  }] 

  
 
  

    constructor(  
     private _maquinasService: MaquinasService,
     public formBuilder : FormBuilder,
     private _route: ActivatedRoute,
    private _pacienteService: PacienteService
    ) { 
    }

    
    
    ngOnInit(): void {

      this.crearFormulario();
      this.otrosParticipantes();
      this.addMachines();
      this.addMedicine();
      
    this._maquinasService.verMaquinas()
    .subscribe( (data:any) => {
        this.allMaquinas = data.data;

    } );


    this._maquinasService.verMedicamentos()
    .subscribe( (data:any) => {
      this.allMedicena = data.data

    } )

}


get medicine(){
  return this.registerForm.get('medicamentos') as FormArray;
}


get participantes() {

  return  this.registerForm.get('participantes')  as FormArray;
}

get maquinas() {
  return this.registerForm.get('maquinas') as FormArray;
}


agregarPaquete( id ) {
  console.log(id)

  this._maquinasService.agregarPaqueteQuirofano(  id, this.registerForm.value )
    .subscribe(  (data:any) => {
        if(data.ok == true){
          alert('Paquete agregado');
        }
    } )

  }


buscarPaciente(){

  this._pacienteService.getPacientePorNombre( this.pacienteTxt )
  .subscribe( (data: any ) => {

    
    if(  data.pacientes === undefined){
      return;
    }
    this.pacientesDB = data.pacientes

  } )

}

crearFormulario() {

      this.registerForm = this.formBuilder.group({
        nombrePaquete: [''],
        // totalEspecialista: this.totalEspecialista,
        participantes : this.formBuilder.array([]),
        maquinas: this.formBuilder.array([]),
        medicamentos: this.formBuilder.array([]),
        horaRecuperacion: [''],
        costoRecuperacion : ['']
      });
    }


     
    otrosParticipantes() {

    const participantesGroup = this.formBuilder.group({
        especialista: '',
        montoEspecialista: 0,
        totalEspecialista: 0
    });



    this.participantes.push( participantesGroup );

  }

  addMachines(){ 
    const maquinasAdd = this.formBuilder.group({
      nombreMaquina: '',
      costoPorHora: 0,
      horasAUsar: 0

    });

    this.maquinas.push( maquinasAdd);
    
  }

  addMedicine(){

    const medicamentosForm  = this.formBuilder.group({
      nombreMedicamentos: '',
      cantidadMedicamento: 0,
      costoMedicamento: 0
    })

    this.medicine.push( medicamentosForm );

  }


  // calculamos el total de los especialistas

  calcularTotalEspecialista() {

    
    let costosEspecialistasArrayDom = document.querySelectorAll('.totalEspecialista');
    let costoParse = 0; 
    let resultado = 0;
    
    for ( let i = 0;  costosEspecialistasArrayDom.length > 0;  i++) {
            
            
            costoParse = parseFloat(costosEspecialistasArrayDom[i]['value'])

             resultado =  costoParse + resultado;
             
             this.totalEspecialista = resultado;

    }
  
  }


  calcularTotalMaquinas() {


    let costoMaquina = document.querySelectorAll('.cosotoHoras');
    let maquinasHorasAUsar = document.querySelectorAll('.horasMaquina')
    let costoMaquinaParse = 0;

    let  horasAUsaeParse = 0 ;
    let costoResultado = 0;


    this.totalMaquinas = 0;
    

    for (  let j =0;  costoMaquina.length >= j && maquinasHorasAUsar.length >= j; j++ ) {

            horasAUsaeParse = parseFloat(maquinasHorasAUsar[j]['value']);
            costoMaquinaParse = parseFloat(  costoMaquina[j]['value'] );



            costoResultado =  costoMaquinaParse *  horasAUsaeParse ;

          this.totalMaquinas += costoResultado

          console.log(  this.totalMaquinas );


    }
    

   }


  calcularTotalMedicamentos() {

    let cantidadesMedicamentosDom = document.querySelectorAll('.cantidadMedicamento');
    let costoUnitarioDom = document.querySelectorAll('.costoMedicamento');
    let cantidadParse = 0;
    let costoUnitarioParse = 0;
    let resultado = 0;
    this.totalMedicamentos =0;



    for( let i =0; cantidadesMedicamentosDom.length >= i && costoUnitarioDom.length >= i; i++ ){


            if( costoUnitarioDom[i]['value'] === undefined|| costoUnitarioDom[i]['value'] === undefined ){
              return;
            }

    
            cantidadParse = parseFloat( cantidadesMedicamentosDom[i]['value']  );
            costoUnitarioParse = parseFloat( costoUnitarioDom[i]['value'] );
            resultado = cantidadParse * costoUnitarioParse
            
            this.totalMedicamentos += resultado;
            
            console.log( this.totalMedicamentos );


    }

  }


  
  totalHorasRecuperacion(){
   
    this.totalHorasRecuperacionNumber = 0;

    let horasRecuperacion = document.querySelectorAll('.horasRecuperacion');
    let costoHorasRecuperacion = document.querySelectorAll('.costoHorasRecuperacion');
    let resultado = 0;
    let horasParse = 0 ;
    let costoHorasParse=0;

   horasParse =  horasRecuperacion[0]['value'];
   costoHorasParse = costoHorasRecuperacion[0]['value'];

   resultado = horasParse * costoHorasParse;

   this.totalHorasRecuperacionNumber = resultado;
   
   console.log( this.totalHorasRecuperacionNumber );

  }


  
  enviar() {


    console.log(this.registerForm.value);

    this._maquinasService.crearPaqueteQuirofano( this.registerForm.value )
    .subscribe( (data) => {
      console.log(data);
    } )
  
    }


}
