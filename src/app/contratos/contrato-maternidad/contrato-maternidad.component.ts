import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-contrato-maternidad',
  templateUrl: './contrato-maternidad.component.html',
  styleUrls: ['./contrato-maternidad.component.scss']
})
export class ContratoMaternidadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imprimir(){
    const doc = new jsPDF();

    doc.fromHTML(document.getElementById('imprimirxd'), 5, 5);
    doc.save('Contrato de Maternidad');
  }

}
