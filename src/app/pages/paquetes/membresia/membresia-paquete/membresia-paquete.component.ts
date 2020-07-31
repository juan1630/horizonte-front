import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaquetesMaternidadService } from 'src/app/services/maternidad/paquetes-maternidad.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-membresia-paquete',
  templateUrl: './membresia-paquete.component.html',
  styleUrls: ['./membresia-paquete.component.css']
})
export class MembresiaPaqueteComponent implements OnInit {

  constructor(  
    private _service: PaquetesMaternidadService,
    private  _route: ActivatedRoute
      ) { }
  
  // concepto:any[] = []
  // consultas:any = { tipo: '', consulta: '', fecha: '', medico: '', firma: '' }
  // citas:any[] = []
  // laboratorio:any[] = []
  // extras:any[] = []
  // farmacia:any[] = []
  // medicos:any[] = []
  // todas:any[] = []
  // public id;

  ngOnInit(): void {

    // this.id = this._route.snapshot.paramMap.get('id');
    // this._service.getMedicos()
    // .subscribe( (data) => {
    //   this.medicos = data.medicos
    // })
    // this.mostrarTodo()
  }


  // seleccion($event, value){
  //   switch (value) {
  //     case '1':
  //     this.concepto = ['Consulta  de medicina general sin costo de lunes a domnigo las 24 Horas','Nutrición','Ginecología','Pediatría','Traumatología y ortopedi','Cirugía general','Cirugia plástica y reconstructiva','Gastroenterología','Medicina interna','Medicina del dolor','Urologia','Neurocirugia']  
  //     this.consultas.consulta = ''

  //       break;

  //     case '2':
  //       this.concepto = ['Estudios basicos', 'Estudios especiales']
  //       this.consultas.consulta = ''
        
  //       break;
      
  //     case '3':
  //       this.concepto = ['Procedimientos Quirúrgicos', 'Procedimientos Endoscopicos', 'Campañas de prevención', 'Traslados en ambulancia']  
  //       this.consultas.consulta = ''
        
  //       break;

  //     case '4':
  //       this.concepto = ['Medicamentos para hospitalización', 'Material para hospitalización', 'Equipo para hospitalización']
  //       this.consultas.consulta = ''
        
  //       break;

  //     default:
  //       break;
  //   }
  // }


//   agregarConsulta(){
//     if(this.consultas.tipo == '' || this.consultas.consulta == '' || this.consultas.medico == '' || this.consultas.firma == ''){
//       swal('Error!', 'Porfavor ingrese los datos que le piden', 'error')
//     }else{
//       this.consultas.fecha = new Date()
//       this.todas.push(this.consultas)
//       this._service.addVisitas(this.consultas, this.id)
//       .subscribe( (data) => {
//         swal('Consulta Agregada', 'Puede ver las visitas en la tabla', 'success')
//         this.mostrarTodo()
//       })
//       this.consultas = { tipo: '', consulta: '', fecha: '', medico: '', firma:'' }
//     }
// }


// mostrarDatos(consulta, medico, servicio){
//   if(servicio == '1') swal('', 'Cita incluida \n'+'Medico: '+medico, '')
//   if(servicio == '2') swal('', 'Estudio de laboratorio \n'+'Medico: '+medico, '')
//   if(servicio == '3') swal('', 'Extras\n'+ 'Medico: '+medico, '')
//   if(servicio == '4') swal('', 'Farmacia\n'+'Medico: '+medico)
// }


// mostrarTodo(){
//   this.citas = []
//   this.laboratorio = []
//   this.extras = []
//   this.farmacia = []

//   this._service.getVisitas( this.id )
//     .subscribe( (data) => {

//       console.log( data);
//       this.todas = data.paquete
//       this.todas.forEach( el => {
//       if(el.tipo == '1'){
//         this.citas.push(el)
//         this.todas = []
//       }
//       if(el.tipo == '2'){
//         this.laboratorio.push(el)
//         this.todas = []
//       }
//       if(el.tipo == '3'){
//         this.extras.push(el)
//         this.todas = []

//       }
//       if(el.tipo == '4'){
//         this.farmacia.push(el)
//         this.todas = []
//       }
//     })
//   })
  
  
// }

}
