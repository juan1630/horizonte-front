import { Component, OnInit } from '@angular/core';
import { PaquetesMaternidadService } from '../../../services/maternidad/paquetes-maternidad.service';
import  swal from 'sweetalert';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-membresia-paquete',
  templateUrl: './membresia-paquete.component.html',
  styleUrls: ['./membresia-paquete.component.css']
})
export class MembresiaPaqueteComponent implements OnInit {

  public btnDisabled;
  public id: string;

  concepto:any[] = []
  consultas:any = { tipo: '', consulta: '', fecha: '', medico: '', firma: '' }
  citas:any[] = []
  laboratorio:any[] = []
  extras:any[] = []
  farmacia:any[] = []
  medicos:any[] = []
  todas:any[] = [
      // { tipo: '2', consulta: 'Estudios basicos', fecha: '11/06/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '2', consulta: 'Estudios basicos', fecha: '10/06/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '2', consulta: 'Estudios especiales', fecha: '10/06/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '2', consulta: 'Estudios especiales', fecha: '10/06/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '1', consulta: 'Nutrición', fecha: '09/05/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '1', consulta: 'Ginecología', fecha: '09/05/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '3', consulta: 'Procedimientos Quirúrgicos', fecha: '09/05/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '3', consulta: 'Procedimientos Quirúrgicos', fecha: '09/05/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '3', consulta: 'Procedimientos Endoscopicos', fecha: '09/05/2020', medico: 'Alguien', firma: 'firma' },
      // { tipo: '4', consulta: 'Medicamentos para hospitalización', fecha: '09/05/2020', medico: 'Alguien', firma: 'firma' },
    
  ]


  constructor(
    public router: ActivatedRoute,
    private _serviceMedicos: PaquetesMaternidadService
    ) { }

  ngOnInit(): void {

    this._serviceMedicos.getMedicos()
    .subscribe( (data) => {
      this.medicos = data.medicos
    })
    this.mostrarTodo()
    this.id = this.router.snapshot.paramMap.get('id');
  }


  seleccion($event, value){
    switch (value) {
      case '1':
      this.concepto = ['Consulta  de medicina general sin costo de lunes a domnigo las 24 Horas','Nutrición','Ginecología','Pediatría','Traumatología y ortopedi','Cirugía general','Cirugia plástica y reconstructiva','Gastroenterología','Medicina interna','Medicina del dolor','Urologia','Neurocirugia']  
      this.consultas.consulta = ''

        break;

      case '2':
        this.concepto = ['Estudios basicos', 'Estudios especiales']
        this.consultas.consulta = ''
        
        break;
      
      case '3':
        this.concepto = ['Procedimientos Quirúrgicos', 'Procedimientos Endoscopicos', 'Campañas de prevención', 'Traslados en ambulancia']  
        this.consultas.consulta = ''
        
        break;

      case '4':
        this.concepto = ['Medicamentos para hospitalización', 'Material para hospitalización', 'Equipo para hospitalización']
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
      this._serviceMedicos.addVisitas(this.consultas, this.id)
      .subscribe( (data) => {
        swal('Consulta Agregada', 'Puede ver las visitas en la tabla', 'success')
        this.mostrarTodo() 
      })
      this.consultas = { tipo: '', consulta: '', fecha: '', medico: '', firma:'' }
    }
}


mostrarDatos(consulta, medico, servicio){
  if(servicio == '1') swal('', 'Cita incluida \n'+'Medico: '+medico, '')
  if(servicio == '2') swal('', 'Estudio de laboratorio \n'+'Medico: '+medico, '')
  if(servicio == '3') swal('', 'Extras\n'+ 'Medico: '+medico, '')
  if(servicio == '4') swal('', 'Farmacia\n'+'Medico: '+medico)
}


mostrarTodo(){
  this.citas = []
  this.laboratorio = []
  this.extras = []
  this.farmacia = []

  // this._serviceMedicos.getVisitas()
  //   .subscribe( (data) => {
  //     this.todas = data.pacientesPaquetes.paquetesPacientes.visitas
  //  if(data.tipo == '1'){
  //   this.citas.push(data)
  //   this.todas = []
  // }
  // if(data.tipo == '2'){
  //   this.laboratorio.push(data)
  //   this.todas = []
  // }
  // if(data.tipo == '3'){
  //   this.extras.push(data)
  //   this.todas = []

  // }
  // if(data.tipo == '4'){
  //   this.farmacia.push(data)
  //   this.todas = []
  // }
  // })
  
  this.todas.forEach( data => {
    if(data.tipo == '1'){
      this.citas.push(data)
      this.todas = []
    }
    if(data.tipo == '2'){
      this.laboratorio.push(data)
      this.todas = []
    }
    if(data.tipo == '3'){
      this.extras.push(data)
      this.todas = []

    }
    if(data.tipo == '4'){
      this.farmacia.push(data)
      this.todas = []
    }
  })
  
}




}
