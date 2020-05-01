import { Component, OnInit } from '@angular/core';
import { PaquetesMaternidadService } from '../../services/maternidad/paquetes-maternidad.service';
import swal from 'sweetalert'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paquete-maternidad',
  templateUrl: './paquete-maternidad.component.html',
  styleUrls: ['./paquete-maternidad.component.scss']
})
export class PaqueteMaternidadComponent implements OnInit {

  public id: string;
  medicos:any[] = []
  concepto:any[] = []
  allConsultas:any[] = []
  medicinaGen:any[] = []
  prenatalGinecologia:any[] = []
  ultrasonido:any[] = []
  laboratorio:any[] = []

  consultas:any = { tipo: '', consulta: '', fecha: '', medico: '', firma: '' }

  btnDisabled = false

  mensaje:string = ''

  constructor(
          private _serviceMedicos: PaquetesMaternidadService,
          public  _route: ActivatedRoute
            ) { }

  ngOnInit() {
    this._serviceMedicos.getMedicos()
    .subscribe( (data) => {
      this.medicos = data.medicos
    });

    this.id = this._route.snapshot.paramMap.get('id');
    
    this.mostrarConsultas()
    
  }

  // Nueva programacion de insercion
  seleccion($event, value){
    switch (value) {
      case '1':
        // code
        this.concepto = [ 'Consulta' ]
        this.consultas.consulta = ''
        this.btnDisabled = false
                
        break;
      case '2':
        // code
        this.concepto = [ 'Consulta' ]
        this.consultas.consulta = ''
        this.btnDisabled = false

        break;
      case '3':
        // code
        this.concepto = [ 'USG Obstetrico' ]
        this.consultas.consulta = ''
        if(this.ultrasonido.length != 5){
            this.btnDisabled = false
          }else{
            this.btnDisabled = true
        }

        break;
      case '4':
        // code
        this.concepto = [ 'Bometría hemática completa', 
                     'Química sanguínea de 3 elementos', 
                     'Examen general de orina', 
                     'V.D.R.L',  
                     'V.I.H', 
                     'Tiempos de coagulación', 
                     'Curva de tolerancia a la glucosa'
                  ]
        this.consultas.consulta = ''
        if(this.laboratorio.length != 5){
            this.btnDisabled = false
          }else{
            this.btnDisabled = true
        }

        break;
    
      default:
        break;
    }

  }

  agregarConsulta(){

      if(this.consultas.tipo == '' || this.consultas.consulta == '' || this.consultas.medico == '' || this.consultas.firma == ''){
        swal('Error!', 'Porfavor ingrese los datos que le piden', 'error')
      }else{
        this.consultas.fecha = new Date()
         this.allConsultas.push(this.consultas)
        console.log(this.consultas)
        this._serviceMedicos.addVisitas(this.consultas, this.id)
        .subscribe( (data) => {
          console.log(data)
          swal('Consulta Agregada', 'Puede ver la información en la tabla', 'success')
          this.mostrarConsultas() 
        })
        this.consultas = { tipo: '', consulta: '', fecha: '', medico: '', firma:'' }
      }
  }

  mostrarConsultas(){
    this.medicinaGen = [];
    this.prenatalGinecologia = [];
    this.ultrasonido = [];
    this.laboratorio = [];
    this._serviceMedicos.getVisitas(this.id)
    .subscribe( (data:any) => {
      console.log( data )
   

      this.allConsultas.forEach( data => {
        if(data.paquete.tipo == '1'){
            this.medicinaGen.push(data)
            this.allConsultas = []
        }
        if(data.tipo == '2'){
            this.prenatalGinecologia.push(data)
            this.allConsultas = []
        }
        if(data.tipo == '3'){
            this.ultrasonido.push(data)
            this.allConsultas = []
        }
        if(data.tipo == '4'){
            this.laboratorio.push(data)
            this.allConsultas = []
        }
  
      })
    })
  }

}
