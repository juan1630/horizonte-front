import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as moment from 'moment';
import { IdentificacionConsultaService } from 'src/app/services/identificacion-consulta.service';


@Component({

  selector: 'app-hoja-diaria-enf-gral',
  templateUrl: './hoja-diaria-enf-gral.component.html',
  styleUrls: ['./hoja-diaria-enf-gral.component.css']

})
export class HojaDiariaEnfGralComponent implements OnInit {

  public listaEspera = [];
  public getPacienteSotageX = this.listaEspera;
  public fechatl;

  constructor(

    public loginService: WsLoginService,
    public _consultasService: IdentificacionConsultaService

  ) {

  }

  ngOnInit(): void {


    this.obtenerConsultas();

    this.fechatl = moment().format('L');


      this.loginService.escucharConsulta()
        .subscribe(arg => {

          if( arg  != "" ){
            this.obtenerConsultas();
          }

        });


  }

  obtenerConsultas(){
    this._consultasService.verConsultaIdentificacion()
    .subscribe( (data) => {
      console.log(data);
      this.listaEspera = data['data'];
     });

  }




  imprimirBitacora(){

    const doc = new jsPDF();

    doc.autoTable({ html: "#bitacora" });

    doc.save('Bitácora_Hoja_Diaria_Enf_Gral_'+this.fechatl+'_.pdf');
  }



}
