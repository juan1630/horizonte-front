import { Component, OnInit } from '@angular/core';
import { MaquinasService } from 'src/app/services/paquetesQuirofano/agregarMaquinas/maquinas.service';

@Component({
  selector: 'app-maq-ymedicamentos-paquete',
  templateUrl: './maq-ymedicamentos-paquete.component.html',
  styleUrls: ['./maq-ymedicamentos-paquete.component.css']
})
export class MaqYMedicamentosPaqueteComponent implements OnInit {

  public tipoDeInsumo = ""

  public maquinas = {
    
    nombreMaquina: '',
    costoDeLaMaquinaPorHora: 0

  }


  public medicamentos = {

    nombreMedicamento:'',
    costoMedicamento: 0
  
  }


  public validBtn = false;


  constructor(  private _maquinaService: MaquinasService ) {

   }

  ngOnInit(): void {

  }



  validarMedicamentos(){

    // ESTA FUNCION VALIDA QUE LOS MEDICAMENTOS NO VAYAN VACIOS

    let nombreMedicamento = document.querySelector('#nombreMedicamento');
    let costoMedicamento = document.querySelector('#costoMedicamento');


    if(   this.medicamentos.nombreMedicamento === ""   ){


      nombreMedicamento.classList.add('is-invalid');

    

       } 
       
       
       if(this.medicamentos.costoMedicamento === 0   ) {

         costoMedicamento.classList.add('is-invalid');
         
        }

        console.log(  this.medicamentos );

        if(  this.medicamentos.nombreMedicamento.length > 0  && this.medicamentos.costoMedicamento > 0){
          
          this.validBtn = true;
        }
        
    
  }


  validarCamposMaquina (){

    // ESTA FUNCION VALIDA QUE LAS MAQUINAS NO VAYAN VACIAS

    let nombreMaquina = document.querySelector('#nombreMaquina');
    let costoDeLaMaquinaPorHora = document.querySelector('#costoDeLaMaquinaPorHora');


    nombreMaquina.classList.remove('is-invalid')
    costoDeLaMaquinaPorHora.classList.remove('is-invalid')

      if( this.maquinas.nombreMaquina === ""   ){
  
        nombreMaquina.classList.add('is-invalid')

      } 
      if( this.maquinas.nombreMaquina.length > 0 && this.maquinas.costoDeLaMaquinaPorHora > 0 ){

          nombreMaquina.classList.add('is-valid');
          costoDeLaMaquinaPorHora.classList.add('is-valid');
          this.validBtn= true;

      }

      
      if(  this.maquinas.costoDeLaMaquinaPorHora === 0   ){

        costoDeLaMaquinaPorHora.classList.add('is-invalid');
        return;
    
    }
  }




  guardar(){


    
    if( this.tipoDeInsumo === 'maquina'  ){
     
        this._maquinaService.agregarMaquina( this.tipoDeInsumo, this.maquinas )
        .subscribe( (data) => {
          console.log(data);
        } )      

    }else if( this.tipoDeInsumo === 'medicamentos'  ) {


      this._maquinaService.agregarMaquina( this.tipoDeInsumo, this.medicamentos )
      .subscribe(  (data) => {
        console.log(data);
      })

    }




    }

  }




