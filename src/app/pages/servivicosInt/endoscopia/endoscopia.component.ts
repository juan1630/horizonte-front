import { Component, OnInit } from '@angular/core';
import { EndoscopiaService } from 'src/app/services/endoscopia/endoscopia.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-endoscopia',
  templateUrl: './endoscopia.component.html',
  styleUrls: ['./endoscopia.component.scss'],
  providers: [EndoscopiaService]
})
export class EndoscopiaComponent implements OnInit {

  public endoscopiaSI: any[] = [];

  constructor(
    private _endoscopiaService: EndoscopiaService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.verDatos();

  }

  verDatos(){
    this._endoscopiaService.getEstudiosEndoscopia().subscribe(
      res => {
        this.endoscopiaSI = res.endoscopia;
      },
      err => {
        console.log(<any>err);
        
      }
    );
  }

  delete(id) {
    this._endoscopiaService.delete(id).subscribe(
      response => {
        swal("Registro Eliminado", "Este restro no se podrá ver más", "error");
        this.verDatos();
        this._router.navigateByUrl('/endoscopia');
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
