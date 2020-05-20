import { Component, OnInit } from '@angular/core';
import { PaquetesMaternidadService } from '../../services/maternidad/paquetes-maternidad.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

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
  partos:any[] = []

  consultas:any = { tipo: '', consulta: '', fecha: '', medico: '', firma: '' }

  btnDisabled = false

  mensaje:string = ''

  constructor(
    public router: ActivatedRoute,
    private _serviceMedicos: PaquetesMaternidadService
    ) { }

  ngOnInit() {
    this._serviceMedicos.getMedicos()
    .subscribe( (data) => {
      this.medicos = data.medicos
    });
    this.id = this.router.snapshot.paramMap.get('id');
    
    this.mostrarConsultas()
    
  }

  // Nueva programacion de insercion
  seleccion($event, value){
    switch (value) {
      case '1':
        this.concepto = [ 'Consulta' ]
        this.consultas.consulta = ''
        this.btnDisabled = false
                
        break;
      case '2':
        this.concepto = [ 'Consulta' ]
        this.consultas.consulta = ''
        for(var i = 0; i < this.prenatalGinecologia.length; i++){
          if(this.prenatalGinecologia[i] != ''){
            this.btnDisabled = true
          }else{
            this.btnDisabled = false
          }
        }

        break;
      case '3':
        this.concepto = [ 'USG Obstetrico' ]
        this.consultas.consulta = ''
        for(var i = 0; i < this.ultrasonido.length; i++){
          if(this.ultrasonido[i] != ''){
            this.btnDisabled = true
          }else{
            this.btnDisabled = false
          }
        }

        break;
      case '4':
        this.concepto = [ 'Biometría hemática completa', 'Química sanguínea de 6 elementos', 'Examen general de orina', 'V.D.R.L', 'V.I.H', 'Tiempos de coagulación', 'Curva de tolerancia a la glucosa', 'Grupo sanguineo']
        this.consultas.consulta = ''
        break;
      
      case '5':
        this.concepto = ['Cesárea', 'Parto', 'Legrado']
        this.consultas.consulta = ''
        break;
    
      default:
        break;
    }

  }

  seleccionConcepto($event, value){
    var examenOrina = 0, biometria = 0, quimica = 0, vih = 0, vdrlh = 0, tiempos = 0, curva = 0, cesarea = 0, parto = 0, legrado = 0
    switch (value) {
      case 'Biometría hemática completa':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) biometria++
        if(biometria == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;
      
      case 'Química sanguínea de 6 elementos':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) quimica++
        if(quimica == 1) {
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'Examen general de orina':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) examenOrina++
        if(examenOrina == 2) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'V.D.R.L':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) vdrlh++
        if(vdrlh == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'V.I.H':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) vih++
        if(vih == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
      break;

      case 'Tiempos de coagulación':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) tiempos++
        if(tiempos == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
      break;

      case 'Curva de tolerancia a la glucosa':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) curva++
        if(curva == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
      break;

      case 'Grupo sanguineo':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) curva++
        if(curva == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
      break;

      case 'Cesárea':
        for(var i = 0; i < this.partos.length; i++) if(this.partos[i].consulta == value) cesarea++
        if(cesarea == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
      break;

      case 'Parto':
        for(var i = 0; i < this.partos.length; i++) if(this.partos[i].consulta == value) parto++
        if(parto == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
      break;

      case 'Legrado':
        for(var i = 0; i < this.partos.length; i++) if(this.partos[i].consulta == value) legrado++
        if(legrado == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
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
        // this.allConsultas.push(this.consultas)
        console.log(this.consultas)
        this._serviceMedicos.addVisitas(this.consultas, this.id)
        .subscribe( (data) => {
          swal('Consulta Agregada', 'Puede ver las visitas en la tabla', 'success')
          this.mostrarConsultas() 
        })
        this.consultas = { tipo: '', consulta: '', fecha: '', medico: '', firma:'' }
      }
  }

  mostrarDatos(consulta, medico, servicio){
    if(servicio == '1') swal('', 'Consulta Prenatal por Medicina General \n'+'Medico: '+medico, '')
    if(servicio == '2') swal('', 'Consulta Prenatal por Ginecologia y Obstetrica \n'+'Medico: '+medico, '')
    if(servicio == '3') swal('', 'Estudio de Ultrasonido\n'+ 'Medico: '+medico, '')
    if(servicio == '4') swal('', 'Estudio de Laboratorio\n'+'Medico: '+medico)
    if(servicio == '5') swal('', 'Conclusión\n'+'Medico: '+medico+'\n', '')
  }

  mostrarConsultas(){
    this.medicinaGen = []
    this.prenatalGinecologia = []
    this.ultrasonido = []
    this.laboratorio = []
    this.partos = []
    this._serviceMedicos.getVisitas( this.id )
    .subscribe( (data) => {
      console.log( data );
      this.allConsultas = data.paquete


      
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
            // this.ultrasonido.sort()
            // this.ultrasonido.reverse()
            this.allConsultas = []

          }
          if(data.tipo == '4'){
            this.laboratorio.push(data)
            this.allConsultas = []
          }
          if(data.tipo == '5'){
            this.partos.push(data)
            this.allConsultas = []
          }
        })
        var valUltrasonido = 5 - this.ultrasonido.length
        var valprenatal = 5 - this.prenatalGinecologia.length
        var valLaboratorio = 9 - this.laboratorio.length
        var valParto = 3 - this.partos.length
        
        if(valUltrasonido == 0){
          console.log('Ya no puedes')
        }else{
          for(var x = 0; x < valUltrasonido; x++) this.ultrasonido.push('')
        }

        if(valprenatal == 0){
          console.log('Ya no puedes')
        }else{
          for(var x = 0; x < valprenatal; x++) this.prenatalGinecologia.push('')
        }

        if(valLaboratorio == 0){
          console.log('Ya no puedes')
        }else{
          for(var x = 0; x < valLaboratorio; x++) this.laboratorio.push('')
        }

        if(valParto == 0){
          console.log('Ya no puedes')
        }else{
          for(var x = 0; x < valParto; x++) this.partos.push('')
        }

    })
  }

}
