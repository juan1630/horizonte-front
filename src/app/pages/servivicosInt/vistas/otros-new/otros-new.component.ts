import { Component, OnInit } from '@angular/core';
import { OtrosS } from '../../../../models/otros';
import { OtrosServicios } from 'src/app/services/otrosservicios/otrosservicios.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-otros-new',
  templateUrl: './otros-new.component.html',
  styleUrls: ['./otros-new.component.scss'],
  providers: [OtrosServicios]
})
export class OtrosNewComponent implements OnInit {

  public otros: OtrosS;
  public status: string;

  constructor(
    private _otrosService: OtrosServicios,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.otros = new OtrosS('','','','','','', '','','','','');

  }

  ngOnInit(): void {
    console.log(this.otros);
    
  }

  onSubmit() {
    this._otrosService.create(this.otros).subscribe(
      res => {
        if(res.ok){
          this.status = 'ok';
          this.otros = res.otrosServicios;
          this._router.navigateByUrl('/otros-servicios');
        }else{
          this.status = 'error';
        }
      },
      err => {
        console.log(err);
        this.status = 'error';
        
      }
    )
  }

}
