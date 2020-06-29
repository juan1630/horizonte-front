import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import swal from "sweetAlert";

@Component({
  selector: 'app-fe09',
  templateUrl: './fe09.component.html',
  styleUrls: ['./fe09.component.scss']
})
export class FE09Component implements OnInit {

  public fecha: string;
  public infPaciente = {
    esquemaVacunacion: ""
  }

  constructor() {

   }

  ngOnInit(): void {

      this.fecha = moment().format('MMMM Do YYYY');
    console.log(moment());


    










  }
  validar(){
    if(this.infPaciente.esquemaVacunacion === "si"){
      console.log("pulsaste sí");
      
    }else{
      console.log("pulsaste no");
      
    }
  }

  alerta(){
    swal("Guardado", "", "success");
  }

}
