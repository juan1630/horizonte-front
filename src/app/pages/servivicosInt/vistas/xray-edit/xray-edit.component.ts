import { Component, OnInit } from '@angular/core';
import { XrayService } from '.././../../../services/xray/xray.service';
import { XrayEdit } from '../../../../models/xray-edit';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-xray-edit',
  templateUrl: './xray-edit.component.html',
  styleUrls: ['./xray-edit.component.scss'],
  providers: [XrayService]
})
export class XrayEditComponent implements OnInit {

  public xrayEdit: XrayEdit[] = [];
  public status: string;
  public is_edit: boolean;
  public id: string;
  public url: string;

  constructor(
    private _xrayService: XrayService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.is_edit = true;
   }

  ngOnInit(): void {
    this.getEstudio();
    console.log('prueba xray service');
    console.log(this.xrayEdit);
    console.log(this._xrayService);
    
    
    

    this.id = this._route.snapshot.paramMap.get('id');
    
  }
  
  onSubmit() {
    console.log(this.xrayEdit);
    this._xrayService.update(this.id, this.xrayEdit).subscribe(
      res=> {
        if(res.ok){
          this.status = 'ok';
          this.xrayEdit = res.rayos;
          console.log(this.xrayEdit);
          

          swal("Editado Correctamente!", "Puedes ver los cambios en el Servicio de Rayos X", "success")
          this._router.navigateByUrl('/xray')
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

  getEstudio(){
    this._route.params.subscribe(params => {
      var id = params['id'];

      this._xrayService.getXrayById(id).subscribe(

        (res:any) => {
          if(res.rayos){
            this.xrayEdit = res.rayos;
            console.log(this.xrayEdit);
            
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
