import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router'
import { PatologiaService } from 'src/app/services/patologia/patologia.service';
import swal from 'sweetalert';
import { Patologia } from 'src/app/intefaces/patologia.interface';

@Component({
  selector: 'app-patologia-edit',
  templateUrl: './patologia-edit.component.html',
  styleUrls: ['./patologia-edit.component.scss']
})
export class PatologiaEditComponent implements OnInit {

  public id: string;
  public patologia: Patologia;



  constructor(
    private _routes: ActivatedRoute,
    private patologiaService: PatologiaService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.id = this._routes.snapshot.paramMap.get('id');
    this.verPatologia();
  }



  verPatologia(){


    return this.patologiaService.getOne( this.id )
    .subscribe( (data:any) => {
 
      this.patologia = data.data;
      console.log(this.patologia);

    });


  }

  actualizarPatologia(){

    return this.patologiaService.updateOne(this.id, this.patologia )
    .subscribe( (data:any) => {

      if( data.ok ) {
        swal("Servicio actualizado", "Se actualizo el servicio", "success")
        this._router.navigateByUrl('/patologia');
      
      }else {
        swal("No se actualizo", "Intenta más tarde", "error")
      }

    } )

  }


}
