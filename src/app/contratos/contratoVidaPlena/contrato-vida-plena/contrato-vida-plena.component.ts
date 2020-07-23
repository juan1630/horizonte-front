import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-vida-plena',
  templateUrl: './contrato-vida-plena.component.html',
  styleUrls: ['./contrato-vida-plena.component.css']
})
export class ContratoVidaPlenaComponent implements OnInit {


  public pdfSrc = "../../../assets/contracts/vidaPlena/ContratoPaqueteVidaPlena.pdf";
  constructor() { }

  ngOnInit(): void {
  }
  

}
