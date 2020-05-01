import { Component, OnInit } from '@angular/core';
import { XrayService } from 'src/app/services/xray/xray.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-xray-s-i',
  templateUrl: './xray-s-i.component.html',
  styleUrls: ['./xray-s-i.component.scss'],
  providers: [XrayService]
})
export class XraySIComponent implements OnInit {

  public xraySI: any [] = [];


  constructor(
    private _xrayService: XrayService,
    private _router: Router,
    private _route: ActivatedRoute

  ) {
    const desc = 50;
   }

  ngOnInit(): void {
    // this._xrayService.getEstudioXray().subscribe(
    //   res => {
    //     this.xraySI = res.estudios;
    //     // console.log(res);
        
    //   },
    //   err => {
    //     console.log(<any>err);
        
    //   }
    // );
    this.verDatos();
  }

  verDatos(){
    this._xrayService.getEstudioXray().subscribe(
        res => {
          this.xraySI = res.estudios;
          // console.log(res);
          
        },
        err => {
          console.log(<any>err);
          
        }
      );
  }


  alertaDesc(){
    swal({title: "Con tu membresia estarías ahorrando: $50.00 ",
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
    this._xrayService.delete(id).subscribe(
      response => {

        swal("Registro Eliminado!", "Este registro no se podrá ver más", "error");
        this.verDatos();
        this._router.navigateByUrl('/xray');
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
