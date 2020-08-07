import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { JefaturaEnfermeriaService } from 'src/app/services/indicadores/jefatura-enfermeria.service';

@Component({
  selector: 'app-jefatura-enfermeria',
  templateUrl: './jefatura-enfermeria.component.html',
  styleUrls: ['./jefatura-enfermeria.component.css']
})
export class JefaturaEnfermeriaComponent implements OnInit {

  constructor(
    private _JefaturaEnfermeriaService: JefaturaEnfermeriaService
  ) { }

  public data = [0];
  public dataFemenino=[0];
  
  public dataMembretesLegible = [0];
  public dataMembretesLegiblesNo = [0];


  public barChartLabels: Label[] = [];
  public barChartLabels1: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public consultas=[];


  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Hombre' },
    {  data: [], label: 'Mujer' }

    ];


    public barChartData1: ChartDataSets[] = [
      { data: [], label: 'Si se explico' },
      {  data: [], label: 'No se explico' }
  
      ];

      public barChartData2: ChartDataSets[] = [
        { data: [], label: 'Membrete no legible' },
        {  data: [], label: 'Mmebrete Legible' }
    
        ];

  
  ngOnInit(): void {

    this._JefaturaEnfermeriaService.verIndicadores()
    .subscribe( (data:any) => {

      this.consultas = data.data;

      this.consultas.forEach( (consulta) => {


        if( consulta.genero === 'Masculino' ){
        
          this.data[0] = this.data[0] +1;
          this.barChartData[0].data = this.data;
        
        } else if( consulta.genero === 'Femenino' ){

          this.dataFemenino[0] = this.dataFemenino[0] +1;
          this.barChartData[1].data = this.dataFemenino;
         }


         if(  consulta.membretesLegible   === 'si' ){
           
          // al array le agregamos el nuevo valor
          
          this.dataMembretesLegiblesNo[0] = this.dataMembretesLegiblesNo[0] +1 ;
          this.barChartData1[1].data = this.dataMembretesLegiblesNo;

        }else if(consulta.membretesLegible  === 'no') {
          
          this.dataMembretesLegible[0] = this.dataMembretesLegible[0] +1 ;

           this.barChartData1[0].data = this.dataMembretesLegible;

         }


      });

    } )
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };



  // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
  //   // Only Change 3 values
  //   const data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   this.barChartData[0].data = data;
  // }

}
    