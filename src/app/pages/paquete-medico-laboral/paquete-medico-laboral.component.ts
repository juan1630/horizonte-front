import { Component, OnInit } from '@angular/core';
import { PaquetesMaternidadService } from '../../services/maternidad/paquetes-maternidad.service';
import { Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert'

@Component({
  selector: 'app-paquete-medico-laboral',
  templateUrl: './paquete-medico-laboral.component.html',
  styleUrls: ['./paquete-medico-laboral.component.css']
})
export class PaqueteMedicoLaboralComponent implements OnInit {

  concepto:any[] = []
  consultas:any = { tipo: '', consulta: '', fecha: '', medico: '', firma: '' }
  citas:any[] = []
  descuentos:any[] = []
  laboratorio:any[] = []
  ultrasonido:any[] = []
  extras:any[] = []
  farmacia:any[] = []
  rayosX: any[] = []
  medicos:any[] = []
  todas:any[] = []


  public id;

  constructor(
    private _service: PaquetesMaternidadService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    this.id = this._route.snapshot.paramMap.get('id');

    this._service.getMedicos()
    .subscribe( (data) => {
      this.medicos = data.medicos
    })
    this.mostrarTodo()
    
  }

  seleccion($event, value){
    switch (value) {
      case '1':
      this.concepto = ['Consulta de medicina general sin costo durante un año de lunes a domingo las 24 Horas']  
      this.consultas.consulta = ''

      break;

      case '2':
        this.concepto = ['Hematología','Nutrición','Ginecología y obstetricia','Pediatría','Traumatología y ortopedia','Cirugía general','Cirugía plástica y reconstructiva','Gastroenterología','Medicina Interna','Medicina del dolor','Urología','Neurocirugía','Radiología e intervencionismo','Psicología','Otorrinolaringología']
        this.consultas.consulta = ''
        
      break;
      
      case '3':
        this.concepto = ['Medicamentos para hospitalización', 'Material para hospitalización', 'Equipo para hospitalización',]  
        this.consultas.consulta = ''
        
      break;

      case '4':
        this.concepto = ['Estudios básicos', 'Estudios especiales']
        this.consultas.consulta = ''
        
      break;
    
      case '5':
        this.concepto = ['Realización de estudios', 'Interpretación de estudios']
        this.consultas.consulta = ''
        
      break;

      case '6':
        this.concepto = ['Realización de placas', 'Interpretación de placas']
        this.consultas.consulta = ''
        
      break;

      case '7':
        this.concepto = ['Procedimientos Quirúrgicos', 'Procedimientos Endoscópicos', 'Campañas de prevención', 'Expediente en tu empresa','Reporte SEMESTRAL del estado de tus trabajadores','Costo preferencial hasta de $200.00 pesos en recetas de medicamentos del cuadro básico']
        this.consultas.consulta = ''
        
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
      this.todas.push(this.consultas)
      console.log(this.consultas)
      this._service.addVisitas(this.consultas, this.id)
      .subscribe( (data) => {
        swal('Consulta Agregada', 'Puede ver las visitas en la tabla', 'success')
        this.mostrarTodo() 
      })
      this.consultas = { tipo: '', consulta: '', fecha: '', medico: '', firma:'' }
    }
}

mostrarDatos(consulta, medico, servicio){
  if(servicio == '1') swal('', 'Cita incluida \n'+'Medico: '+medico, '')
  if(servicio == '2') swal('', 'Descuento\n'+'Medico: '+medico)
  if(servicio == '3') swal('', 'Farmacia\n'+'Medico: '+medico)
  if(servicio == '4') swal('', 'Estudio de laboratorio \n'+'Medico: '+medico, '')
  if(servicio == '5') swal('', 'Estudio de Ultrasonido \n'+'Medico: '+medico, '')
  if(servicio == '6') swal('', 'Rayos X\n'+'Medico: '+medico)
  if(servicio == '7') swal('', 'Extras\n'+ 'Medico: '+medico, '')
}


mostrarTodo(){
  this.citas = []
  this.laboratorio = []
  this.ultrasonido = []
  this.extras = []
  this.farmacia = []
  this.descuentos = []
  this.rayosX = []

  this._service.getVisitas(  this.id )
    .subscribe( (data) => {

      console.log( data  );
      
      this.todas = data.paquete
      this.todas.forEach( el => {
      if(el.tipo == '1'){
        this.citas.push(el)
        this.todas = []
      }
      if(el.tipo == '2'){
        this.laboratorio.push(el)
        this.todas = []
      }
      if(el.tipo == '3'){

        this.extras.push(el)
        this.todas = []
      }
      if(el.tipo == '4'){
        this.farmacia.push(el)
        this.todas = []
      }
    })
  })
  
  // this.todas.forEach( data => {
  //   if(data.tipo == '1'){
  //     this.citas.push(data)
  //     this.todas = []
  //   }
  //   if(data.tipo == '2'){
  //     this.descuentos.push(data)
  //     this.todas = []
  //   }
  //   if(data.tipo == '3'){
  //     this.farmacia.push(data)
  //     this.todas = []
  //   }
  //   if(data.tipo == '4'){
  //     this.laboratorio.push(data)
  //     this.todas = []
  //   }
  //   if(data.tipo == '5'){
  //     this.ultrasonido.push(data)
  //     this.todas = []
  //   }
  //   if(data.tipo == '6'){
  //     this.extras.push(data)
  //     this.todas = []
  //   }
  //   if(data.tipo == '7'){
  //     this.rayosX.push(data)
  //     this.todas = []
  //   }
  // })

  //TODO: el paquete de alto riesgo se deja de anticipo 1500y las semanas se re ajustan
  //TODO: agregar boton dentro de los paquetes el boton del alto riesgo
  
}

}
