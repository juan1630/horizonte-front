import { Component, OnInit } from '@angular/core';
import { UltraSonidoService } from 'src/app/services/ultrasonido/ultrasonido.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-ultrasonido',
  templateUrl: './ultrasonido.component.html',
  styleUrls: ['./ultrasonido.component.scss'],
  providers: [UltraSonidoService]
})
export class UltrasonidoComponent implements OnInit {

  public ultrasonidoSI: any[] = [];
  
  constructor(
    private _ultrasonidoService: UltraSonidoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {

      this.verDatos();

  }

  verDatos(){
    this._ultrasonidoService.getEstudiosUltrasonido().subscribe(
      res => {
        this.ultrasonidoSI = res.ultrasonido;
      },
      err => {
        console.log(<any>err);
        
      }
    );
  }

}
