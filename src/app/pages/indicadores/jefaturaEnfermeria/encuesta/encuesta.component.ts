import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
 import {ServiceService} from '../../../../services/encuestas/preguntas.service';
 import swal from 'sweetalert/dist/sweetalert.min.js';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {



  //ngif para motrar preguntas
public congeneral =false;
public comedor =false;
public hospitalizacion =false;
public save =false;

public idpp ="5f3190aaea7fee8824391f6f"

public idH="5f2b148bb1d98940389d3416"
public urls ="http://sleepy-tor-20835.herokuapp.com/agregar/indicadores/" + this.idpp

 public info ={
  status: "",
  notificacionDeIdentificacion1: "",
  notificacionDeIdentificacion2 : "",
  notificacionDeIdentificacion3 : "",
  notificacionDeIdentificacion4 : "",
  notificacionDeIdentificacion5 : "",
  notificacionDeIdentificacion6 : "",
  notificacionDeIdentificacion7 : "",
  notificacionDeIdentificacion8 : "",
  notificacionDeIdentificacion9 : "",
  notificacionDeIdentificacion10 : "",
  notificacionDeIdentificacion11 : "",
  notificacionDeIdentificacion12 : "",
  tipoConsulta: ""

 }


public radio ={
  pregunta1 : "",
  pregunta2 : "",
  pregunta3 : "",
  pregunta4 : "",
  pregunta5 : "",
  pregunta6 : "",
  pregunta7 : "",
  pregunta8 : "",
  pregunta9 : "",
  pregunta10 : "",
  pregunta11 : "",
  pregunta12 : "",
}


 public tipoConsulta = ""
 public uncheck=""


 validarSelect(){
 console.log( this.tipoConsulta)




  if (this.tipoConsulta ==""){
    this.comedor=false;
    this.congeneral =false ;
    this.hospitalizacion=false;
    swal (
    "ADVERTENCIA ",
     "Seleccione una opcion de área a evaluar",
    "warning",{ button:"Entendido"}

   )
  }
  else if (this.tipoConsulta =="comedor"){
    this.comedor=true;
    this.congeneral =false ;
    this.hospitalizacion=false;


  }
  else if (this.tipoConsulta =="consulta_general"){
    this.congeneral =true ;
    this.comedor=false;
    this.hospitalizacion=false;

}
else if (this.tipoConsulta =="hospitalizacion" || this.tipoConsulta =="urgencias" || this.tipoConsulta =="quirofano"){


  this.congeneral =false ;
  this.comedor=false;
  this.hospitalizacion=true;

}
}//finvalidar



  constructor( private httpIndicadores : ServiceService

    /*, private httpSeeId: ServiceService, private _route : ActivatedRoute*/) {

}//fin contructor


  ngOnInit(): void {
  }


  enviar (){

    console.log(this.info)

    this.info.tipoConsulta= this.tipoConsulta
    this.httpIndicadores.agregarIndicadores(this.urls , this.info)
     //this.httpSeeId.verPacienteID(this.idpp)

       .subscribe((data) => {
        console.log(data)
      })
      this.tipoConsulta =""
      this.comedor =false;
    this.hospitalizacion =false;
    this.congeneral =false;

    }





}
