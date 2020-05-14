import { Component, OnInit } from '@angular/core';
import { EndoscopiaService } from 'src/app/services/endoscopia/endoscopia.service';
import { Endoscopia } from 'src/app/models/Endoscopia/enodscopia';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-endoscopia-edit',
  templateUrl: './endoscopia-edit.component.html',
  styleUrls: ['./endoscopia-edit.component.scss'],
  providers: [EndoscopiaService]
})
export class EndoscopiaEditComponent implements OnInit {

  public endoscopiaEdit: Endoscopia[] = [];
  public status: string;
  public is_edit: boolean;
  public id: string;
  public url: string;

  constructor(
    private _endoscopiaService: EndoscopiaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.is_edit = true;
   }

  ngOnInit(): void {
    this.getEndoscopia();

    this.id = this._route.snapshot.paramMap.get('id');
  }

  onSubmit(){
    this._endoscopiaService.update(this.id, this.endoscopiaEdit).subscribe(
      res => {
        if(res.ok){
          this.status = 'ok';
          this.endoscopiaEdit = res.endoscopia;

          swal("Editado Correctamente", "Puedes ver los cambios en: Servicio Endoscopía", "success");
          this._router.navigateByUrl('/endoscopia');
        }
      },
      err => {
        console.log(err);
        this.status = 'error';        
      }
    );
  }

  getEndoscopia(){
    this._route.params.subscribe(params => {
      var id = params['id'];

      this._endoscopiaService.getServicioById(id).subscribe(
        (res:any) => {
          if(res.endoscopia){

            this.endoscopiaEdit = res.endoscopia;
            console.log(this.endoscopiaEdit);

          }else{

          }
        },
        err => {
          console.log(err);
          
        }
      )
    });
  }

}
