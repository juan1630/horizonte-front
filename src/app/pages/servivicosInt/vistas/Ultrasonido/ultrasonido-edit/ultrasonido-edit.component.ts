import { Component, OnInit } from '@angular/core';
import { UltraSonidoService } from 'src/app/services/ultrasonido/ultrasonido.service';
import { Ultrasonido } from 'src/app/models/Ultrasonido/ultrasonido';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-ultrasonido-edit',
  templateUrl: './ultrasonido-edit.component.html',
  styleUrls: ['./ultrasonido-edit.component.scss'],
  providers: [UltraSonidoService]
})
export class UltrasonidoEditComponent implements OnInit {

  public ultrasonidoEdit: Ultrasonido[] = [];
  public status: string;
  public is_edit: boolean;
  public id: string;
  public url: string;

  constructor(
    private _ultrasonidoService: UltraSonidoService,
    private _router: Router,
    private _route: ActivatedRoute

  ) {
    this.is_edit = true;
   }

  ngOnInit(): void {
    this.getUltrasonido();

    this.id = this._route.snapshot.paramMap.get('id');
  }

  onSubmit(){
    this._ultrasonidoService.update(this.id, this.ultrasonidoEdit).subscribe(
      res => {
        if(res.ok){
          this.status = 'ok';
          this.ultrasonidoEdit = res.ultrasonido;

          swal("Editado Correctamente", "Puedes ver los cambios en: Servicio Ultrasonido", "success");
          this._router.navigateByUrl('/ultrasonido');

        }
      },
      err => {
        console.log(err);
        this.status = 'error'
        
      }
    );
  }

  getUltrasonido(){
    this._route.params.subscribe(params => {
      var id = params['id'];

      this._ultrasonidoService.getServicioById(id).subscribe(
        (res:any) => {
          if(res.ultrasonido){
            
            this.ultrasonidoEdit = res.ultrasonido;
            console.log(this.ultrasonidoEdit);

          }else{

          }
        },
        err => {
          console.log(err);
          
        }
      );
    });
  }

}
