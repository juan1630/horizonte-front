import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { guardarPacienteStorage, getPacienteStorage, eliminarPacienteStorage } from '../../../../app/functions/storage/storage.funcion';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as moment from 'moment';
// import { get } from 'http';


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
        if(getPacienteStorage() == null){
         this.listaEspera = [];
        }

      this.loginService.escucharConsulta()
        .subscribe(arg => {

          // if(getPacienteStorage()){
          this.listaEspera.push(arg.consulta);
          console.log("lista de espera");
          
          console.log(this.listaEspera);

          var storageLista = JSON.stringify(this.listaEspera);
          guardarPacienteStorage(storageLista);
          console.log(getPacienteStorage());
          
          this.listaEspera = getPacienteStorage();  
          console.log(this.listaEspera);
          

          
            

      
        }); 



    
  }

  imprimirBitacora(){
    
    const doc = new jsPDF();

    doc.autoTable({ html: "#bitacora" });

    doc.save('Bitácora_Hoja_Diaria_Enf_Gral_'+this.fechatl+'_.pdf');
  }

  

  

}
