import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-m-laboral',
  templateUrl: './contrato-m-laboral.component.html',
  styleUrls: ['./contrato-m-laboral.component.scss']
})
export class ContratoMLaboralComponent implements OnInit {


    
  public pdfSrc =  "../../../assets/contracts/laboral/ContratoPaqueteMedicoLaboral.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
