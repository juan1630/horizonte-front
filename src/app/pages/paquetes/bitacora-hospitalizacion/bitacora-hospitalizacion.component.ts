import { Component, OnInit } from '@angular/core';
import { MaquinasService } from 'src/app/services/paquetesQuirofano/agregarMaquinas/maquinas.service';
import jspdf   from 'jspdf';
import  autoTable   from 'jspdf-autotable';


@Component({
  selector: 'app-bitacora-hospitalizacion',
  templateUrl: './bitacora-hospitalizacion.component.html',
  styleUrls: ['./bitacora-hospitalizacion.component.css']
})
export class BitacoraHospitalizacionComponent implements OnInit {

  public pacientesHospitalizados:[] = [];


  constructor(
    private maquinaService: MaquinasService
  ) { }

  ngOnInit(): void {


    this.obtenerPacientesHospitalizados();

  }



  obtenerPacientesHospitalizados(){ 
    this.maquinaService.verPacientesHospitalizados()
    .subscribe( (data:any) => {
      console.log(data);
        this.pacientesHospitalizados = data.data;
        // console.log( "Paciente", this.pacientesHospitalizados );
    });
  }


  imprimir(){
    const doc  = new jspdf();


    doc.autoTable({
      html: '#hoja'
    })

    doc.save();


   }

}
