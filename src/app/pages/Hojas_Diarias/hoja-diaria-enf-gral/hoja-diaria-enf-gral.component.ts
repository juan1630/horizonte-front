import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { guardarPacienteStorage, getPacienteStorage, eliminarPacienteStorage } from '../../../../app/functions/storage/storage.funcion';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as moment from 'moment';


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

    public loginService: WsLoginService

  ) { 
    
  }

  ngOnInit(): void {

    this.fechatl = moment().format('L');

    this.listaEspera = getPacienteStorage();
    // console.log("Imprimir  GetPAcienteStorage");
    
    // console.log(this.listaEspera);
    
    this.loginService.escucharConsulta()
      .subscribe(arg =>{ 
        // console.log('Argumentos:::');
        
        // console.log( arg);
        this.listaEspera.push(arg.consulta);
        
        // console.log('Esta es la lista de espera');
        // console.log(this.listaEspera);
        
        eliminarPacienteStorage();
        
        let storageLista = JSON.stringify(this.listaEspera);
        
         //Guardar los pacientes en el local storage
        guardarPacienteStorage(storageLista);
        // console.log("Imprimir Storage Lista");
        
        // console.log(storageLista);
        
        
        //Obtener el paciente del localstorge
        
       this.listaEspera = getPacienteStorage();
      //  console.log("Imprimir  GetPAcienteStorage");
       
      //  console.log(this.listaEspera);
      });

    
  }

  imprimirBitacora(){
    
    const doc = new jsPDF();

    doc.autoTable({ html: "#bitacora" });

    doc.save('Bitácora_Hoja_Diaria_Enf_Gral_'+this.fechatl+'_.pdf');
  }

  

  

}
