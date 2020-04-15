import { Component, OnInit } from '@angular/core';
import { XrayService } from 'src/app/services/xray/xray.service';

@Component({
  selector: 'app-xray-s-i',
  templateUrl: './xray-s-i.component.html',
  styleUrls: ['./xray-s-i.component.scss'],
  providers: [XrayService]
})
export class XraySIComponent implements OnInit {

  public xraySI: any [] = [];


  constructor(
    private _xrayService: XrayService
  ) { }

  ngOnInit(): void {
    this._xrayService.getEstudioXray().subscribe(
      res => {
        this.xraySI = res.estudios;
        console.log(res);
        
      },
      err => {
        console.log(<any>err);
        
      }
    );
  }

}
