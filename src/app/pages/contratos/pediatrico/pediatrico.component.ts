import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pediatrico',
  templateUrl: './pediatrico.component.html',
  styleUrls: ['./pediatrico.component.css']
})
export class PediatricoComponent implements OnInit {


  public pdfSrc = "../../../assets/contracts/pediatrico/CONTRATODEPAQUETEPEDIATRICO.pdf";
  
  constructor() { }

  ngOnInit(): void {
  }


}
