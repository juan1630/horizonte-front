import { Component, OnInit } from '@angular/core';
import { Endoscopia } from 'src/app/models/Endoscopia/enodscopia';
import { EndoscopiaService } from 'src/app/services/endoscopia/endoscopia.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-endoscopia-new',
  templateUrl: './endoscopia-new.component.html',
  styleUrls: ['./endoscopia-new.component.scss'],
  providers: [EndoscopiaService]
})
export class EndoscopiaNewComponent implements OnInit {

  public endoscopia: Endoscopia;
  public status: string;

  constructor(

    private _endoscopiaService: EndoscopiaService,
    private _router: Router,
    private _route: ActivatedRoute


  ) { 
    this.endoscopia = new Endoscopia('', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    console.log(this.endoscopia);
    
  }

  onSubmit() {
    this._endoscopiaService.create(this.endoscopia).subscribe(
      res => {
        console.log(res);
        
        if(res.ok){
          this.endoscopia = res.endoscopia;
          this._router.navigateByUrl('/endoscopia');
        }else{
          this.status = 'error';
        }
      },
      err => {
        console.log(err);
        this.status = 'error';
        
      }
    );
  }

}
