import { Component, OnInit } from '@angular/core';
import { XrayService } from 'src/app/services/xray/xray.service';
import { Xray } from 'src/app/models/xray';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-xray-new',
  templateUrl: './xray-new.component.html',
  styleUrls: ['./xray-new.component.scss'],
  providers: [XrayService]
})
export class XrayNewComponent implements OnInit {

  public xray: Xray;
  public status: string;

  constructor(
    private _xrayService: XrayService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.xray = new Xray('','','','','','','','','','');
  }

  ngOnInit(): void {

    console.log(this.xray);
    
  }

  onSubmit() {
    this._xrayService.create(this.xray).subscribe(
      res => {
        if(res.ok){
          this.status = 'ok';
          this.xray = res.xray;
          this._router.navigateByUrl('/xray');
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        
      }
    )
  }

}
