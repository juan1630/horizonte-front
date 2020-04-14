import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-maternidad',
  templateUrl: './paquete-maternidad.component.html',
  styleUrls: ['./paquete-maternidad.component.scss']
})
export class PaqueteMaternidadComponent implements OnInit {

  btnCancel: boolean = true

  consultasUltrasonido:any[] = []

  consultasMedicinaGen:any[] = []
  
  consultasPrenatales:any[] = []
  
  consultasLaboratorio:any[] = []

  consultaPrenatales: any = { consulta: '', fecha: '', medico: '',firma: '' }

  consultaMedicinaGen: any = { consulta: '', fecha: '', medico: '', firma: '' }
  
  consultaUltrasonido: any = { consulta: '', fecha: '', medico: '', firma: '' }

  consultaLaboratorio: any = { consulta: '', fecha: '', medico: '', firma: '' }

  // Primeramente que se haga la peticion a la BD para llenar la infomacion y asi empezar a validar si ya 
  // existen datos dentro de los arrays creados previamente
  constructor() { }

  ngOnInit(): void {
  }

  addUltrasonido(){
    // Aqui verifica si ya existen dos registros, sino creara uno nuevo 
    if(this.consultasUltrasonido.length != 2){
      console.log('Puedes ingresar')
      // Pequeña validacion para que todos los campos sean llenados
      if(this.consultaUltrasonido.consulta == '' || this.consultaUltrasonido.medico == '' || this.consultaUltrasonido.firma == ''){
        alert('Ingresa la informacion')
      }else{
        this.consultaUltrasonido.fecha = new Date()
        this.consultasUltrasonido.push(this.consultaUltrasonido)
        // DESDE AQUI ENVIAR LA INFORACION A LA BASE DE DATOS
        this.consultaUltrasonido = { consulta: '', fecha: '', medico: '', firma: '' }
      }
    }else{
      // Si ya existen dos registros no permitira registrar otro
      alert('Hijole no se va a poder')
    }
  }

  addMedicinaGen(){
    // Pequeña validacion para que todos los campos sean llenados
      if(this.consultaMedicinaGen.consulta == '' || this.consultaMedicinaGen.medico == '' || this.consultaMedicinaGen.firma == ''){
        alert('Ingresa la informacion')
      }else{
        this.consultaMedicinaGen.fecha = new Date()
        this.consultasMedicinaGen.push(this.consultaMedicinaGen)
        // DESDE AQUI ENVIAR LA INFORACION A LA BASE DE DATOS
        this.consultaMedicinaGen = { consulta: '', fecha: '', medico: '', firma: '' }
      }
  }

  addPrenatales(){
    // Aqui verifica si ya existen dos registros, sino creara uno nuevo
    if(this.consultasPrenatales.length != 2){
      console.log('Puedes ingresar')
      // Pequeña validacion para que todos los campos sean llenados
      if(this.consultaPrenatales.consulta == '' || this.consultaPrenatales.medico == '' || this.consultaPrenatales.firma == ''){
        alert('Ingresa la informacion')
      }else{
        this.consultaPrenatales.fecha = new Date()
        this.consultasPrenatales.push(this.consultaPrenatales)
        // DESDE AQUI ENVIAR LA INFORACION A LA BASE DE DATOS
        this.consultaPrenatales = { consulta: '', fecha: '', medico: '', firma: '' }
      }
    }else{
      // Si ya existen dos registros no permitira registrar otro
      alert('Hijole no se va a poder')
    }
  }
  
  addLaboratorio(){
  
    switch (this.consultaLaboratorio.consulta) {
      case 'BIOMETRIA HEMATICA COMPLETA':
        // code
        console.log('BIOMETRIA HEMATICA COMPLETA')
        
        break;
      case 'QUIMICA SANGUINEA DE 3 ELEMENTOS':
        // code
        console.log('QUIMICA SANGUINEA DE 3 ELEMENTOS')

        break;
      case 'EXAMEN GENERAL DE ORINA':
        // code
        console.log('EXAMEN GENERAL DE ORINA')

        break;
      case 'V.D.R.L':
        // code
        console.log('V.D.R.L')

        break;
      case 'V.I.H':
        // code
        console.log('V.I.H')

        break;
      case 'GRUPO SANGUINEO':
        // code
        console.log('GRUPO SANGUINEO')

        break;
      case 'TIEMPOS DE COAGULACION':
        // code
        console.log('TIEMPOS DE COAGULACION')
        
        break;
      case 'CURVA DE TOLERANCIA A LA LACTOSA':
        // code
        console.log('CURVA DE TOLERANCIA A LA LACTOSA')

        break;
    
      default:
        break;
    }

    // Pequeña validacion para que todos los campos sean llenados
    // if(this.consultaLaboratorio.consulta == '' || this.consultaLaboratorio.medico == '' || this.consultaLaboratorio.firma == ''){
    //   alert('Ingresa la informacion')
    // }else{
    //   this.consultaLaboratorio.fecha = new Date()
    //   this.consultasLaboratorio.push(this.consultaLaboratorio)
    //   // DESDE AQUI ENVIAR LA INFORACION A LA BASE DE DATOS
    //   this.consultaLaboratorio = { consulta: '', fecha: '', medico: '', firma: '' }
    // }
  }



}
