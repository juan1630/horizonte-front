import { Component, OnInit } from '@angular/core';
import { OtrosServicios } from 'src/app/services/otrosservicios/otrosservicios.service';
import swal from 'sweetalert';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-otros-s-i',
  templateUrl: './otros-s-i.component.html',
  styleUrls: ['./otros-s-i.component.scss'],
  providers: [OtrosServicios]
})
export class OtrosSIComponent implements OnInit {

  public otrosServiciosSI: any [] = [];

  constructor(
    private _otrosService: OtrosServicios,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this._otrosService.getOtrosServicios().subscribe(
    //   res => {
    //     this.otrosServiciosSI = res.servicios;
    //     console.log(res);
        
    //   },
    //   err => {
    //     console.log(<any>err);
        
    //   }
    // );
    this.verDatos();
}

verDatos(){
  this._otrosService.getOtrosServicios().subscribe(
    res => {
      this.otrosServiciosSI = res.servicios;
      console.log(res);
      
    },
    err => {
      console.log(<any>err);
      
    }
  );
}
alertaDesc(){
  swal({title: "Con tu membresia estarías ahorrando: ",
  text: "La membresia cuenta con muchos beneficios, contrata ahora..!!!",
  icon: "warning",
  buttons: [true, true],
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Vamos a Contratar!", {
      icon: "success",
    });
  } else {
    swal("No necesitas membresia", {
      icon: "error",
    });
  }});
}

delete(id) {
  this._otrosService.delete(id).subscribe(
    response => {

      swal("Registro Eliminado!", "Este registro no se podrá ver más", "error");
      this.verDatos();
      this._router.navigateByUrl('/otros-servicios');
    },
    error => {
      console.log(error);
      
    }
  );
}
}
