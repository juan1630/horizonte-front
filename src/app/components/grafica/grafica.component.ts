import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { Label } from 'ng2-charts';
import { JefaturaEnfermeriaService } from 'src/app/services/indicadores/jefatura-enfermeria.service';



@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html'
})
export class GraficaComponent implements OnInit {


  public indicadores=[];

  public data = [0 ];
  public dataNoSeExplico=[0];
  
  
  constructor(
    public jEnfermeriaServie: JefaturaEnfermeriaService
  ) { }

  ngOnInit(): void {


    this.jEnfermeriaServie.verIndicadores()

    .subscribe( (data:any) => {


      
      this.indicadores= data.data;

        this.indicadores.forEach( indi => {


          
          if( indi.notificacionDeIdentificacion === 'si' ){
            
            
            this.data[0] = this.data[0] + 1;
            
            this.barChartData[0].data = this.data;
            
            
          }else if(  indi.notificacionDeIdentificacion ===  undefined  ){
            
            this.dataNoSeExplico[0] = this.dataNoSeExplico[0] + 1;



            this.barChartData[1].data = this.dataNoSeExplico;
            
            
          } else if( indi.notificacionDeIdentificacion ===  'no'   ){

            this.dataNoSeExplico[0] = this.dataNoSeExplico[0] + 1;



            this.barChartData[1].data = this.dataNoSeExplico;
            
          }
           
        


        })


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

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Si se explico' },
    {  data: [], label: 'No se explico' }

    ];


  // // events
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
