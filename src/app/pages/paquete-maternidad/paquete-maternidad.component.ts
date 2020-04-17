import { Component, OnInit } from '@angular/core';
import  { PaquetesMaternidadService } from '../../services/maternidad/paquetes-maternidad.service'; 

@Component({
  selector: 'app-paquete-maternidad',
  templateUrl: './paquete-maternidad.component.html',
  styleUrls: ['./paquete-maternidad.component.scss']
})
export class PaqueteMaternidadComponent implements OnInit {

  medicos:any[] = []

  concepto:any[] = []

  allConsultas:any[] = []

  medicinaGen:any[] = []
  prenatalGinecologia:any[] = []
  ultrasonido:any[] = []
  laboratorio:any[] = []

  consultas:any = { tipo: '', consulta: '', fecha: '', medico: '', firma: '' }

  
  constructor(private _serviceMedicos: PaquetesMaternidadService) { }

  ngOnInit() {
    this._serviceMedicos.getMedicos()
    .subscribe( (data) => {
      this.medicos = data.medicos
    })
  }

  // Nueva programacion de insercion

  seleccion($event, value){
    switch (value) {
      case '1':
        // code
        this.concepto = [ 'Consulta' ]
        this.consultas.consulta = ''
                
        break;
      case '2':
        // code
        this.concepto = [ 'Consulta' ]
        this.consultas.consulta = ''

        break;
      case '3':
        // code
        this.concepto = [ 'USG Obstretrica' ]
        this.consultas.consulta = ''

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
        break;
    
      default:
        break;
    }

  }

  agregarConsulta(){
      if(this.consultas.tipo == '' || this.consultas.consulta == '' || this.consultas.medico == '' || this.consultas.firma == ''){
        alert('Ingresa la información')
      }else{
        this.consultas.fecha = new Date()
        this.allConsultas.push(this.consultas)
        this.consultas = { tipo: '', consulta: '', fecha: '', medico: '', firma:'' }
        alert('Se agrego la consulta')
        console.log(this.allConsultas)
        this.mostrarConsultas()
      }
  }

  mostrarConsultas(){
    this.allConsultas.forEach( data => {
      
      if(data.tipo == '1'){
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
  }


}
