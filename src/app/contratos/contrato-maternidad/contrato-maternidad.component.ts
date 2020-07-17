import { Component, OnInit } from '@angular/core';
import {  ImagenTicketHorizonter } from '../../config/imgeHorizonte';
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

  public pdfSrc = "../../../assets/contracts/maternidad/PAQUETEMATERNIDAD.pdf";
;

}
