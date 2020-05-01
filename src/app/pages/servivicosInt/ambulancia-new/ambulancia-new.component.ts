import { Component, OnInit } from '@angular/core';
import { AmbulanciaService } from '../../../services/ambulancia/ambulancia.service';
import { Ambulancia } from '../../../models/ambulancia';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-ambulancia-new',
  templateUrl: './ambulancia-new.component.html',
  styleUrls: ['./ambulancia-new.component.scss'],
  providers: [AmbulanciaService]
})
export class AmbulanciaNewComponent implements OnInit {

  public ambulancia: Ambulancia;
  public status: string;
  public page_title: string;


  constructor(
    private _ambulanciaService: AmbulanciaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.ambulancia = new Ambulancia('','','','','','');
    this.page_title =  "Nuevo Destino Servicio de Ambulancia";

  }

  ngOnInit(): void
   {
  }

  onSubmit() {
    this._ambulanciaService.create(this.ambulancia).subscribe(
      res => {
        if(res.ok){
          this.status = 'ok';
          this.ambulancia = res.ambulancia;
          this._router.navigateByUrl('/ambulancia');
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
