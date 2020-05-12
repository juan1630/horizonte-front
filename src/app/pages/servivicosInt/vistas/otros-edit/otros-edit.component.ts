import { Component, OnInit } from '@angular/core';
import { OtrosServicios } from 'src/app/services/otrosservicios/otrosservicios.service';
import { OtrosEdit } from 'src/app/models/otros-edit';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';



@Component({
  selector: 'app-otros-edit',
  templateUrl: './otros-edit.component.html',
  styleUrls: ['./otros-edit.component.scss'],
  providers: [OtrosServicios]
})
export class OtrosEditComponent implements OnInit {

  public otrosEdit: OtrosEdit[] = [];
  public status: string;
  public is_edit: boolean;
  public id: string;
  public url: string;

  constructor(
    private _otrosService: OtrosServicios,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.is_edit = true;
   }

  ngOnInit(): void {
    this.getOtros();

    this.id = this._route.snapshot.paramMap.get('id');
  }

  onSubmit(){
    this._otrosService.update(this.id, this.otrosEdit).subscribe(
      res => {
        if(res.ok){
          this.status = 'ok';
          this.otrosEdit = res.otros;

          swal("Editado Correctamente!", "Puedes ver los cambios en el Otros Servicios!", "success")
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

  getOtros(){
    this._route.params.subscribe(params => {
      var id = params['id'];
      
      this._otrosService.getServicioById(id).subscribe(
        (res:any) => {
          if(res.otros) {
            this.otrosEdit = res.otros;
            console.log(this.otrosEdit);
            
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
