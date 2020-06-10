import { Component, OnInit } from '@angular/core';
import { Ultrasonido } from 'src/app/models/Ultrasonido/ultrasonido';
import { UltraSonidoService } from 'src/app/services/ultrasonido/ultrasonido.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ultrasonido-new',
  templateUrl: './ultrasonido-new.component.html',
  styleUrls: ['./ultrasonido-new.component.scss'],
  providers: [UltraSonidoService]
})
export class UltrasonidoNewComponent implements OnInit {

  public ultrasonido: Ultrasonido;
  public status: string;

  constructor(
    private _ultrasonidoService: UltraSonidoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.ultrasonido = new Ultrasonido('', '', '', '', '', '', '', '', '', '', '');
   }

  ngOnInit(): void {

    console.log(this.ultrasonido);
    
  }

  onSubmit() {
    this._ultrasonidoService.create(this.ultrasonido).subscribe(
      res => {
        if(res.ok){
          this.ultrasonido = res.ultrasonido;
          this._router.navigateByUrl('/ultrasonido');
        }else{
          this.status = "error";
        }
      },
      err => {
        console.log(err);
        this.status = 'error';
        
      }
    );
  }

}
