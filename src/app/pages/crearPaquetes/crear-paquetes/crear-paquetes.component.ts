import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-crear-paquetes',
  templateUrl: './crear-paquetes.component.html',
  styleUrls: ['./crear-paquetes.component.css']
})
export class CrearPaquetesComponent implements OnInit {

  public maquinasContent: HTMLElement;
  public maquinaCantidad: HTMLElement;
  public maquinaCosto: HTMLElement;
  public contentTotales: HTMLElement;

  public costoDeMaquinaPorHora1 = 0;
  public horasAusarMaquina1 = 0;
  public totalSimple = 0 ;

  public costoDeMaquinaPorHora2 = 0;
  public horasAusarMaquina2 = 0;
  public totalSimple2 = 0;

  public costoDeMaquinaPorHora3 = 0;
  public horasAusarMaquina3 = 0;
  public totalSimple3 = 0;


  public costoDeMaquinaPorHora4 = 0;
  public horasAusarMaquina4 = 0;
  public totalSimple4 = 0;

  
  public costoDeMaquinaPorHora5 = 0;
  public horasAusarMaquina5 = 0;
  public totalSimple5 = 0;

  public diasRecuperacion = 0;
  public costoDiasRecuperacion = 0;
  public totalDiasRcuperacion = 0;
 
  
  public totalMaquinas = 0;
  public maquinas = [];


  public totalPaquete = 0;

  infoPaquete= {
    
    nombrePaquete: "",
    nombreCirujano: "",
    pagoCirujano: 0,
    nombreAnestesiologo: "",
    pagoAnesteciologo: 0,
    nombreAyudante1: "",
    pagoAyudante1:0,
    nombreAyudante2: "",
    pagoAyudante2:0,
    nombreAyudante3: "",
    pagoAyudante3:0,
    diasObservacion:"",
    nombreMateriales: "",
    cantidadMaterial1: 0,
    precioMaterial: 0,
    materiales1:"",
    materiales2:"",
    materiales3:"",
    materiales4:"",
    materiales5:"",

    maquina1:"",
    maquina1Costos:0,
    maquina2: "",
    maquina2Costo:0,
    maquina3:"",
    maquina3Costo:0,
    maquina4:"",
    maquina4Costo:0,
    maquina5:"",
    maquina5Costo:0

  }

  constructor() { }



  ngOnInit(): void {


    this.maquinasContent = document.getElementById('container-maquinas');
    this.maquinaCantidad = document.getElementById('content-cantidad');
    this.maquinaCosto = document.getElementById('contente-precio');
    this.contentTotales = document.getElementById('content-totales');
  
  
  }



  sumarTotalMaquinas(){

    this.totalSimple = this.costoDeMaquinaPorHora1 * this.horasAusarMaquina1;
    this.totalMaquinas = this.totalMaquinas + this.totalSimple;


  }

  sumarTotalMaquinas2(){

    this.totalSimple2 = this.costoDeMaquinaPorHora2 * this.horasAusarMaquina2;
    this.totalMaquinas = this.totalMaquinas + this.totalSimple2;


  }

  sumarTotalMaquinas3(){

    this.totalSimple3 = this.costoDeMaquinaPorHora3 * this.horasAusarMaquina3;
    this.totalMaquinas = this.totalMaquinas + this.totalSimple3;


  }

  sumarTotalMaquinas4(){

    this.totalSimple4 = this.costoDeMaquinaPorHora4 * this.horasAusarMaquina4;
    this.totalMaquinas = this.totalMaquinas + this.totalSimple4;

  }


  sumarTotalMaquinas5(){

    this.totalSimple5 = this.costoDeMaquinaPorHora5 * this.horasAusarMaquina5;
    this.totalMaquinas = this.totalMaquinas + this.totalSimple5;

  }

  // ESTA FUNCION CALCULA EL COSTO DE LOS DÍAS DE OBSERVACIÓN

  diasDeObservacion(){

    this.totalDiasRcuperacion = this.diasRecuperacion + this.costoDiasRecuperacion;

    this.totalPaquete = this.totalPaquete * this.totalDiasRcuperacion;

  }

// ESTA FUNCION AGREGA LOS INPUTS DE LOS MATERIALES
  agregarMaquina(){ 

    let element = document.createElement('input') ;

    element.setAttribute('class', 'form-control mt-2');
   
    element.setAttribute('placeholder', 'MATERIAL A OCUPAR')

    this.maquinasContent.append( element  );


    let elememtCantidad = document.createElement('input');

    elememtCantidad.setAttribute('class', 'form-control mt-2');
    elememtCantidad.setAttribute('placeholder', 'CANTIDAD');

    this.maquinaCantidad.append( elememtCantidad );

    let elementoCosto = document.createElement('input');

    elementoCosto.setAttribute('class', 'form-control mt-2');
    elementoCosto.setAttribute('placeholder', 'COSTO');

    this.maquinaCosto.append(elementoCosto );


    let totalCAntidad =document.createElement('h4');
    totalCAntidad.setAttribute('class', 'center mt-2');
    totalCAntidad.textContent = "Totales"

    this.contentTotales.append( totalCAntidad );

  }

  enviar( ){


    console.log( this.infoPaquete );
    

  }

}
