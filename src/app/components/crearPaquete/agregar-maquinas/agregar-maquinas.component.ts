import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MaquinasService } from 'src/app/services/paquetesQuirofano/agregarMaquinas/maquinas.service';

@Component({
  selector: 'app-agregar-maquinas',
  templateUrl: './agregar-maquinas.component.html',
  styleUrls: ['./agregar-maquinas.component.css']
})
export class AgregarMaquinasComponent implements OnInit {

  public maquinas:[];
  public totalMaquina = 0;
  public totalMaquinas = 0;
  
  public infoMaquina = {
    nombreMaquina :"",
    costoMaquinaPorHora: '',
    horasAusarMaquina : ""
  }


  @Output() infoMaquinaEmitter = new EventEmitter()

  constructor(
    private _maquinasService: MaquinasService
  ) { }

  ngOnInit(): void {

    this._maquinasService.verMaquinas()
    .subscribe( (data:any) => {
        this.maquinas = data.data;

    } );

  }


  
  calcularCosto(){


    let costoPorHora = 0;
    let horasUsar = 0;
    this.totalMaquinas =0;


    let  elementos = document.querySelectorAll('.costoMaquina');
    let  horastxt = document.querySelectorAll('.horasUsar');


        for (const i in elementos) {
          
          
          if(  elementos[i]['value'] !== undefined  ){
            


            costoPorHora = elementos[i]['value'];

            }
        
          }


          for (const j in horastxt) {

            if ( horastxt[j]['value'] != undefined &&  horastxt[j]['value'] >= 0   ) {
                horasUsar = horastxt[j]['value']
              
            }
          }


          this.totalMaquina = horasUsar * costoPorHora;

          this.totalMaquinas = this.totalMaquina + this.totalMaquinas;

          this.infoMaquinaEmitter.emit(this.infoMaquina)

  }


}
