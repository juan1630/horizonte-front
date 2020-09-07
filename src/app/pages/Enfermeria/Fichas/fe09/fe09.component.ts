import { Component, OnInit, ViewChild } from '@angular/core';
import { PacienteService } from '../../../../services/paciente/paciente.service';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';
import { HistoriaClinicaService } from '../../../../services/historia-clinica/historia-clinica.service';
import * as moment from 'moment';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import swal from "sweetAlert";
// import { threadId } from 'worker_threads';



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
  public tallaL: number;
  public pesoL: number;

  public listaEspera = [];
  public listaPacientesAtendidos = [];


  public validate = true;

  public id: string;
  public fecha: string;
  public fechaPacienteHistorial: string;
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

  public pacienteHistorial = [{
  }];

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////// 
  //////////////////////////////////////LINEAS NIÑOS
  // Grafica Mamalona de peso
  public lineChartData: ChartDataSets[] = [
    { data: [10.673, 11.633, 13.291, 14.990, 16.500, 17.900, 19.900, 22.076, 24.380, 26.562, 29.472, 32.600, 36.712, 41.149, 45.459, 49.866, 51.69, 53.148, 54.200], label: 'Peso Mínimo' },
    { data: [15.668, 18.045, 20.739, 24.461, 28.271, 32.149, 36.983, 39.666, 46.566, 48.863, 56.260, 63.308, 69.705, 76.420, 82.735, 88.504, 93.779, 97.245, 99.185, 102.300], label: 'Peso Máximo' },
    { data:[  0, 0, 0, 0, 0, 0, ], label: 'Peso Actual'},

  ];

  // Grafica de estatura :D
  public lineChartEstatura: ChartDataSets [] = [
    { data: [.80, .84, .88, .96, 1.02 , 1.08, 1.15, 1.20, 1.26, 1.30, 1.33, 1.36, 1.43, 1.45, 1.50, 1.57, 1.58, 1.60, 1.62, 1.63, 1.66], label: 'Estatura Mínima'},
    { data: [.93, 1.03, 1.12, 1.20, 1.28, 1.33, 1.36, 1.44, 1.50, 1.54, 1.57, 1.64, 1.70, 1.73, 1.76, 1.80, 1.83, 1.85, 1.88, 1.89, 1.90], label: 'Estatura Máxima'},
    { data: [0, 0, 0, 0, 0, 0, ], label: 'Estatura Actual'}
  ];

  // Grafica de IMC
  public lineChartIMC: ChartDataSets [] = [
    { data: [14.5, 14.09, 13.81, 13.64, 13.54, 13.52, 13.57, 13.78, 13.96, 14.28, 14.68, 15.10, 15.66, 16.16, 16.77, 17.28, 17.85, 18.30, 19.21], label: 'IMC Mínimo'},
    { data: [19.66, 18.69, 18.23, 18.44, 19.10, 20.08, 21.23, 22.37, 23.72, 24.92, 26.03, 27.02, 27.88, 28.63, 29.30, 29.88, 30.61, 31.20, 32.10], label: "IMC Máximo"},
    { data: [0, 0, 0, 0, 0, 0,], label: "IMC Actual"}

  ];
  
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////// 
  //////////////////////////////////////LINEAS NIñas
  public lineChartTallaNina: ChartDataSets [] = [
    { data: [.78, .86, .94, 1.01, 1.08, 1.14, 1.20, 1.24, 1.30, 1.38, 1.45, 1.48, 1.50, 1.56, 1.59, 1.61], label: 'Estatura Mínima'},
    { data: [.92, 1.01, 1.11, 1.20,  1.28, 1.36, 1.43, 1.50, 1.57, 1.65, 1.71, 1.73, 1.74, 1.7526, 1.7536], label: 'Estatura Máxima'},
    { data: [0, 0, 0, 0, 0, 0,], label: 'Estatura Actual' }
  ];

  public lineChartPesoNina: ChartDataSets [] = [
    { data: [10.17, 11.38, 12.65, 14.34, 16.01, 17.72, 19.64, 21.58, 23.99, 26.81, 29.74, 33.12, 36.70, 39.37, 41.82, 43.23, 44.24, 45.01], label: 'Peso Mínimo'},
    { data: [15.35, 18.0, 21.28, 24.62, 28.92, 33.36, 38.07, 44.58, 51.42, 58.10, 65.32, 71.87, 77.68, 81.36, 84.36, 86.04, 87.34, 88.15], label: 'Peso Máximo'},
    { data: [0, 0, 0, 0, 0, 0,], label: 'Peso Actual' }
  ];

  public lineChartIMCNina: ChartDataSets [] = [
    { data: [14.07, 13.77, 13.51, 13.33, 13.22, 13.22, 13.27, 13.44, 13.76, 14.11, 14.53, 14.94, 15.44, 15.97, 16.37, 16.86, 17.97, 18.33], label: 'IMC Mínimo'},
    { data: [19.51, 18.70, 18.61, 18.99, 19.67, 20.78, 21.87, 23.27, 24.50, 25.80, 27.05, 28.22, 29.31, 30.30, 31.30, 32.11, 32.99], label: 'IMC Máximo'},
    { data:  [0, 0, 0, 0, 0, 0,], label: 'IMC Actual' }
  ];
  public lineChartLabels: Label[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

  // Eje de las X
  public lineChartEjeX: Label[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']


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
      private _router: Router

  ) {

   }

  ngOnInit(): void {

    // Leer Local Storage
   
    // this.listaEspera = getPacienteStorage();
        

    this.historialNinos();

    
    // this.historialMujeres();

    // this.historialHombres();



    this.obtenerPeso();
    // console.log(this.obtenerPeso());
    
    this.obtenerTalla();
    // console.log(this.obtenerTalla());
    

      this.fechaPacienteHistorial = moment().format('L');
      this.fecha = moment().format('LLL');
    // console.log(moment());

    // Obtener Id del paciente
    this.id = this._route.snapshot.paramMap.get('id');

    this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe(

      (data:any) => {
        // console.log(data);

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
    // var btnAdd = document.getElementById("btn_agregar");

  }

  historialNinos(){
      this.pacienteHistorial = [];
      this.id = this._route.snapshot.paramMap.get('id');

      this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe(

        (data:any) => {
          // console.log(data);

          for (let i = 0; data.paciente.historiaClinica.length -1 >= i ; i++){
            // console.log(data.paciente.historiaClinica[i]);
            
            this.pacienteHistorial.push(data.paciente.historiaClinica[i]);
            // console.log(this.pacienteHistorial);
            
          }
    });
  }

  // historialMujeres(){
  //   this.pacienteHistorial = [];
  //   this.id = this._route.snapshot.paramMap.get('id');

  //   this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe(
  //     (data:any) => {
        
  //       for (let i = 0; data.paciente.historiaClinica.length -1 >= i ; i++){

  //         this.pacienteHistorial.push(data.paciente.historiaClinica[i]);
  //       }
  //     }
  //   );
  // }

  // historialHombres(){
  //   this.pacienteHistorial = [];
  //   this.id = this._route.snapshot.paramMap.get('id');

  //   this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe(
  //     (data:any) => {

  //       for (let i = 0; data.paciente.historiaClinica.length -1 >= i ; i++){
  //         this.pacienteHistorial.push(data.paciente.historiaClinica[i]);
  //       }
  //     }
  //   );
  // }

  validar(){
    if(this.infPaciente.esquemaVacunacion === "si"){
      // console.log("pulsaste sí");

    }else{
      // console.log("pulsaste no");

    }
  }

  alerta(){
    swal("Guardado", "", "success");
  }

  obtenerIMC(){

    this.imc = ((this.peso)/(this.talla * this.talla));
    let imcL = this.imc.toString();
    // console.log(typeof imcL);

    //Punto de Peso
    this.lineChartData[2].data[7]= this.peso;
    // console.log(this.peso);
    // console.log(this.lineChartData);

    // Peso Niña
    this.lineChartPesoNina[2].data[7] = this.peso;

    // Punto de Etatura
    this.lineChartEstatura[2].data[7]= this.tallaL;
    // console.log(this.tallaL);
    // console.log(this.lineChartEstatura);

    // Talla Niña
    this.lineChartTallaNina[2].data[7]= this.tallaL;

    // Punto de IMC
    this.lineChartIMC[2].data[7] = this.imc;
    // console.log(this.imc);
    // console.log(this.lineChartIMC);
    
    // IMC Niña
    this.lineChartIMCNina[2].data[7] = this.imc;
    



    
    imcL.split(',', 2);

    let imcLn;
    imcLn = parseFloat(imcL).toFixed(2);

    this.imc = imcLn;

    // this.imc = this.imc.;
  }
  
  obtenerPeso(){
    this.peso;
    // console.log(this.peso);
    this.pesoL = this.peso;
    return this.pesoL;
  }
  obtenerTalla(){
    this.talla;
    // console.log(this.talla);
    this.tallaL = this.talla;
    return this.tallaL;
    
  }
 validarBtn(f) {
  //  console.log(f);
   
  if(f.invalid == false) {
    this.validate = false;
  }
 }

 imprimirHistorial(){
   var doc = new jsPDF();
   doc.autoTable({html: '#historialPaciente'});
   doc.save('Historial de:_' + this.paciente.nombre + '_Fecha_' + this.fecha + '.pdf');
 }

  onSubmit(f) {

    this.pacienteHistorial = [];
    // console.log("form Antecedentes Niños xD");
    // console.log(f.invalid);

    
    

    this._HistoriaClinicaService.agregarHistoriaClinica(this.id, f.value).subscribe( req => {
      console.log(req);

      swal("Datos Guardados con Éxito", "Se ha notificado al Doctor", "success");

      this._ObtenerPacienteService.getPacienteBtID(this.id).subscribe( (req:any) => {
        console.log(req);


        // RESOLVER ERROR DEL -1 EN MUJERES 

        for (let i = 0; req.paciente.historiaClinica.length -1 > i ; i++){
          console.log(req.paciente.historiaClinica[i]);
          
          this.pacienteHistorial.push(req.paciente.historiaClinica[i]);
          console.log(this.pacienteHistorial);
          
        }

        this.historialNinos();
        // this.historialMujeres();
        // this.historialHombres();
        // console.log(this.historialNinos());
        

      });
      
       
      

      // this._router.navigateByUrl('/hoja-diaria-enfermeria-general');

    });

  }
  // Fin onSubmit

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




}
