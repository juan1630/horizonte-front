import { Component, OnInit, ViewChild } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica/historia-clinica.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
// import { LOADIPHLPAPI } from 'dns';
import { Cie10Service } from 'src/app/services/cie10/cie10.service';




@Component({
  selector: 'app-hevolucion-cg',
  templateUrl: './hevolucion-cg.component.html',
  styleUrls: ['./hevolucion-cg.component.css'],
  providers: [HistoriaClinicaService, Cie10Service]
})
export class HEvolucionCGComponent implements OnInit {

  public nameDiagnosticoUno: [] = [];
  public nameDiagnosticoDos: [] = [];
  public nameDiagnosticoTres: [] = [];


  public diagnostico: any [] = [];
  public fecha: string;
  public hora: string;
  public id: string;

  public hojaEvolucion = {
    diagnosticoUno: '',
    diagnosticoDos: '',
    diagnosticoTres: ''
  }

  public paciente = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: '',
    registro: '',
    sexo: '',
    medico: '',
    direccion: '',
    talla: '',
    peso: '',
    imc: '',
    fc: '',
    fr: '',
    temp: '',
    pc: '',
    pa: '',
    pt: '',
    apgar: '',
    sao: '',
    alergias: '',
    // historiaClinica: [],
    paquetesQuirofano: []

  }

  public tallatl;
  public tallaPrueba = [];

  // Grafica Mamalona de peso
  public lineChartData: ChartDataSets[] = [
    { data: [1.2, 1.3, 1.32, 1.32, 1.34, 1.34, 1.35, 1.40, 1.45, 1.50, 1.50, 1.50, 1.50, 1.52], label: 'Peso Mínimo' }

  ];

  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(0,0,2555,0.2)',
          },
          ticks: {
            fontColor: 'black',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(255,0,0,0.6)',
      pointBackgroundColor: 'rgba(255,0,0,0.6)',
      pointBorderColor: 'rgba(255,0,0,0.6)',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      // backgroundColor: 'rgba(0,0,255,1)',
      borderColor: 'rgba(0,0,255,1)',
      pointBackgroundColor: 'rgba(0,0,255,1)',
      pointBorderColor: 'rgba(0,0,255,1)',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      // backgroundColor: 'rgba(0,255,0,0.6)',
      borderColor: 'green',
      pointBackgroundColor: 'rgba(0,255,0,0.6)',
      pointBorderColor: 'green',
      // pointHoverBackgroundColor: 'green',
      // pointHoverBorderColor: 'rgba(0,255,0,0.6)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
// FIN GRAFICA Mamalona




  
  constructor(

      private _ObtenerPacienteService: PacienteService,
      private _route: ActivatedRoute,
      private _HistoriaClinicaService: HistoriaClinicaService,
      private _Cie10Service: Cie10Service

  ) { }

  ngOnInit(): void {

    // FECHA
    this.fecha = moment().format('L');
    this.hora = moment().format('LT');

    // Obtener Id del Paciente
    this.id = this._route.snapshot.paramMap.get('id');
    // this.id = "5e98a29b0eb1ac2b44132b31";

    // this._Cie10Service.getCiePorNombre(this.nameDiagnostico).subscribe(
    //   (data:any) => {
    //     console.log(data);
        
    //   }
    // )

    this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe(
      (data:any) => {

        console.log(data);
        // console.log(data.paciente.historiaClinica);
        
        // console.log(data.paciente.historiaClinica.length);
        let index = data.paciente.historiaClinica.length - 1;

        this.paciente.nombre = data.paciente.nombrePaciente;
        this.paciente.apellidoPaterno = data.paciente.apellidoPaterno;
        this.paciente.apellidoMaterno = data.paciente.apellidoMaterno;
        this.paciente.direccion = data.paciente.calleNumeroPaciente;
        this.paciente.edad = data.paciente.edad;
        this.paciente.sexo = data.paciente.sexo;
        this.paciente.registro = data.paciente._id;
        this.paciente.talla = data.paciente.historiaClinica[index].tallaNino;
        this.paciente.peso = data.paciente.historiaClinica[index].pesoNino;
        this.paciente.imc = data.paciente.historiaClinica[index].imcNino;
        this.paciente.fc = data.paciente.historiaClinica[index].fcNino;
        this.paciente.fr = data.paciente.historiaClinica[index].frNino;
        this.paciente.temp = data.paciente.historiaClinica[index].tempNino;
        this.paciente.pc = data.paciente.historiaClinica[index].pcNino;
        this.paciente.pa = data.paciente.historiaClinica[index].paNino;
        this.paciente.pt = data.paciente.historiaClinica[index].ptNino;
        this.paciente.apgar = data.paciente.historiaClinica[index].apgarNino;
        this.paciente.sao = data.paciente.historiaClinica[index].saoNino;
        this.paciente.alergias = data.paciente.historiaClinica[7].alergia;
        this.paciente.paquetesQuirofano = data.paciente.paquetesQuirofano[1];

        console.log(this.paciente);

        // this.tallaPrueba = data.paciente.historiaClinica.tallaNino;
        // console.log(this.tallaPrueba);

        // for(let i; i<= data.paciente.historiaClinica.tallaNino; i++){
          
          
        // }
        
        
        
        // this.tallatl = parseFloat(this.paciente.talla);
  
  
        // this.lineChartData[0].data[0]= this.tallatl;
      }
      
      )
      
  }

   //Inicio Funciones Grafica
   public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }



  obtenerDiagnosticoUno(){

    if(this.hojaEvolucion.diagnosticoUno.length > 7) {
      this._Cie10Service.getCiePorNombre(this.hojaEvolucion.diagnosticoUno).subscribe(
        (data:any) => {
          console.log(data);
          this.nameDiagnosticoUno = data.data;
        }
      )
    }
    
  }

  obtenerDiagnosticoDos(){
    
    if(this.hojaEvolucion.diagnosticoDos.length > 7){
      this._Cie10Service.getCiePorNombre(this.hojaEvolucion.diagnosticoDos).subscribe(
        (data:any) => {
          console.log(data);
          this.nameDiagnosticoDos = data.data;
        }
      )
    }
    

  }

  obtenerDiagnosticoTres(){

    if(this.hojaEvolucion.diagnosticoTres.length > 7){
      this._Cie10Service.getCiePorNombre(this.hojaEvolucion.diagnosticoTres).subscribe(
        (data:any) => {
          console.log(data);
          this.nameDiagnosticoTres = data.data;
        }
      )
    }
    
  }


}
