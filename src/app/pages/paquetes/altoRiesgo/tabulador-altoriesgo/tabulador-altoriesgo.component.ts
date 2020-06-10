import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert'
import { PaquetesMaternidadService } from 'src/app/services/maternidad/paquetes-maternidad.service';

@Component({
  selector: 'app-tabulador-altoriesgo',
  templateUrl: './tabulador-altoriesgo.component.html',
  styleUrls: ['./tabulador-altoriesgo.component.scss']
})
export class TabuladorAltoriesgoComponent implements OnInit {


  concepto:any[] = []
  medicos:any[] = []
  ultrasonido:any[] = []
  laboratorio:any[] = []
  todas:any[] = [
    { tipo: '3', consulta: 'Consulta con el especialista', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '3', consulta: 'Consulta con el especialista', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '3', consulta: 'Consulta con el especialista', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '3', consulta: 'Consulta con el especialista', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '3', consulta: 'Consulta con el especialista', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '3', consulta: 'Consulta de nutrición', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '3', consulta: 'Consulta de nutrición', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '2', consulta: 'Higado y via biliar', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '2', consulta: 'Obstétricos', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '2', consulta: 'Obstétricos', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '2', consulta: 'Obstétricos', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '1', consulta: 'Biometría Hemática Completa', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '1', consulta: 'Examen General de Orina', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '1', consulta: 'Examen General de Orina', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '1', consulta: 'Examen General de Orina', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '1', consulta: 'V.I.H', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '1', consulta: 'V.D.R.L', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '1', consulta: 'Grupo Sanguineo(Ambos Padres)', fecha: new Date(), medico: 'Alguien', firma: 'firma' },
    { tipo: '1', consulta: 'Grupo Sanguineo(Ambos Padres)', fecha: new Date(), medico: 'Alguien', firma: 'firma' }
  ]
  consultas:any = { tipo: '', consulta: '', fecha: '', medico: '', firma: '' }
  citas:any[] = []
  btnDisabled = false;
  constructor(private _serviceMedicos: PaquetesMaternidadService) { }

  ngOnInit(): void {
    this._serviceMedicos.getMedicos()
    .subscribe( (data) => {
      this.medicos = data.medicos
    })
    this.mostrarTodo()
  }

  seleccion($event, value){
    switch (value) {
      case '1':
        this.concepto = ['Biometría Hemática Completa', 'QS 6 (Glucosa, Creatinina, Ácido Úrico, Colesterol y Triglicéridos)', 'Examen General de Orina', 'V.D.R.L', 'V.I.H', 'Grupo Sanguineo(Ambos Padres)', 'Tiempos de Coagulación', 'Curva de tolerancia a la lactosa', 'Pruebas de funcionamiento hepático', 'Depuración de proteínas en orina de 24 hr', 'Triple', 'Perfil tiroideo', 'Urocultivo', 'Exudado vaginal']
        this.consultas.consulta = ''
        for(var i = 0; i < this.laboratorio.length; i++){
          if(this.laboratorio[i] != ''){
            this.btnDisabled = true
          }else{
            this.btnDisabled = false
          }
        }
        break;

      case '2':
        this.concepto = ['Higado y via biliar', 'Obstétricos', 'Genetico (11-13.6 SDG)', 'Estructural (18-24 SDG)', 'Perfil biofisico(ultimo trimestre)']
        this.consultas.consulta = ''
        for(var i = 0; i < this.ultrasonido.length; i++){
          if(this.ultrasonido[i] != ''){
            this.btnDisabled = true
          }else{
            this.btnDisabled = false
          }
        }
        break;

      case '3':
          this.concepto = ['Consulta con el especialista', 'Consulta de nutrición']
          this.consultas.consulta = ''
          break;
    
      default:
        break;
    }
  }

  seleccionConcepto($event, value){
    var citaEspecialista = 0, citaNutricion = 0, higado = 0, obstetricos = 0, genetico = 0, estructural = 0, perfil = 0, biometría = 0, qs = 0, examen = 0, vdrl = 0, vih = 0, sanguineo = 0, tiempos = 0, curva = 0, pruebas = 0, depuracion = 0, triple = 0, perfil = 0, urocultivo = 0, exudado = 0
    switch (value) {
      case 'Consulta con el especialista':
        for(var i = 0; i < this.citas.length; i++) if(this.citas[i].consulta == value) citaEspecialista++
        console.log(citaEspecialista);
        
        if(citaEspecialista == 7) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;
      case 'Consulta de nutrición':
        for(var i = 0; i < this.citas.length; i++) if(this.citas[i].consulta == value) citaNutricion++
        if(citaNutricion == 3) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'Higado y via biliar':
        for(var i = 0; i < this.ultrasonido.length; i++) if(this.ultrasonido[i].consulta == value) higado++
        if(higado == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'Obstétricos':
        for(var i = 0; i < this.ultrasonido.length; i++) if(this.ultrasonido[i].consulta == value) obstetricos++
        if(obstetricos == 4) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'Genetico (11-13.6 SDG)':
        for(var i = 0; i < this.ultrasonido.length; i++) if(this.ultrasonido[i].consulta == value) genetico++
        if(genetico == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'Estructural (18-24 SDG)':
        for(var i = 0; i < this.ultrasonido.length; i++) if(this.ultrasonido[i].consulta == value) estructural++
        if(estructural == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'Perfil biofisico(ultimo trimestre)':
        for(var i = 0; i < this.ultrasonido.length; i++) if(this.ultrasonido[i].consulta == value) perfil++
        if(perfil == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

      case 'Biometría Hemática Completa':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) biometría++
        if(biometría == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'QS 6 (Glucosa, Creatinina, Ácido Úrico, Colesterol y Triglicéridos)':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) qs++
        if(qs== 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Examen General de Orina':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) examen++
        if(examen == 3) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'V.D.R.L':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) vdrl++
        if(vdrl == 1) { 
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

        case 'Grupo Sanguineo(Ambos Padres)':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) sanguineo++
        if(sanguineo == 2) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Tiempos de Coagulación':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) tiempos++
        if(tiempos == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Curva de tolerancia a la lactosa':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) curva++
        if(curva == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Pruebas de funcionamiento hepático':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) pruebas++
        if(pruebas == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Depuración de proteínas en orina de 24 hr':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) depuracion++
        if(depuracion == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Triple':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) triple++
        if(triple == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Perfil tiroideo':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) perfil++
        if(perfil == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Urocultivo':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) urocultivo++
        if(urocultivo == 1) { 
          this.btnDisabled = true 
        }else{
          this.btnDisabled = false
        }
        break;

        case 'Exudado vaginal':
        for(var i = 0; i < this.laboratorio.length; i++) if(this.laboratorio[i].consulta == value) exudado++
        if(exudado == 1) { 
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
      swal('Error!', 'Por favor ingrese los datos que le piden', 'error')
    }else{
      this.consultas.fecha = new Date()
      this.todas.push(this.consultas)
      swal('Consulta Agregada', 'Puede ver las visitas en la tabla', 'success')
      this.consultas = { tipo: '', consulta: '', fecha: '', medico: '', firma:'' }
      console.log(this.todas)
      this.mostrarTodo()
    }
  }

  mostrarTodo(){
    this.laboratorio = []
    this.ultrasonido = []
    this.citas = []
    this.todas.forEach(el => {
      if(el.tipo == '1'){
        this.laboratorio.push(el)
        this.todas = []
      }
      if(el.tipo == '2'){
        this.ultrasonido.push(el)
        this.todas = []
      }
      if(el.tipo == '3'){
        this.citas.push(el)
        this.todas = []
      }
    })
    var valLaboratorio = 17 - this.laboratorio.length
    var valUltrasonido = 8 - this.ultrasonido.length
    var valCitas = 10 - this.citas.length

    if(valLaboratorio == 0){
      console.log('Ya no puedes')
    }else{
      for(var x = 0; x < valLaboratorio; x++) this.laboratorio.push('')
    }
    
    if(valUltrasonido == 0){
      console.log('Ya no puedes')
    }else{
      for(var x = 0; x < valUltrasonido; x++) this.ultrasonido.push('')
    }

    if(valCitas == 0){
      console.log('Ya no puedes')
    }else{
      for(var x = 0; x < valCitas; x++) this.citas.push('')
    }
    
  }


}
