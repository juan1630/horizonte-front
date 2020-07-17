import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import swal from "sweetAlert";
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica/historia-clinica.service';





@Component({
  selector: 'app-fe09',
  templateUrl: './fe09.component.html',
  styleUrls: ['./fe09.component.scss'],
  providers: [HistoriaClinicaService]
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
    edad: 0,
    sexo: ''
  }

  constructor(
      private _ObtenerPacienteService: PacienteService,
      private _route: ActivatedRoute,
      private _HistoriaClinicaService: HistoriaClinicaService,
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
        this.paciente.sexo = data.paciente.sexo;

        data.paciente.edad = parseFloat(data.paciente.edad);
        
      }
    )
    var btnAdd = document.getElementById("btn_agregar");

  
    

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

  agregarRow() {
   
  }

  

  onSubmit(f) {
    console.log("form Antecedentes Niños xD");

    this._HistoriaClinicaService.agregarHistoriaClinica(this.id, f.value).subscribe( req => {
      console.log(req);
      
    })
    
    
  }

//    crearDin(){
         
//     // var padre = document.getElementById("padre");
//     var input =document.getElementById("padre").innerHTML +=  `

//       <tr>
//             <input type="text" placeholder="" class="antecedentes-inputs wer">
//       </tr>
//     `;
//  } 


}

