import { Component, OnInit } from '@angular/core';
import { AmbulanciaService } from 'src/app/services/ambulancia/ambulancia.service';
import swal from 'sweetalert';
// import { FilterPipe } from '../pipes/filter.pipe';
// import { FilterPipe } from '../../servivicosInt/pipes/filter.pipe';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-ambulancia-s-i',
  templateUrl: './ambulancia-s-i.component.html',
  styleUrls: ['./ambulancia-s-i.component.scss'],
  providers: [AmbulanciaService]
  // Meter FilterPipe en  los providers
})
export class AmbulanciaSIComponent implements OnInit {

  public ambulanciaSI: any [] = [];
  



  constructor(
    private _ambulanciaService: AmbulanciaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }
  filterPost = '';


  ngOnInit(): void {

    // this._ambulanciaService.getDestino().subscribe(
    //   res => {
    //     this.ambulanciaSI = res.servicios;
    //     // console.log(res);
        
    //   },
    //   err => {
    //     console.log(<any>err);
        
    //   }
    // );
    this.verDatos();
  
  }

  verDatos(){
    this._ambulanciaService.getDestino().subscribe(
      res => {
        this.ambulanciaSI = res.endoscopia;
        // console.log(res);
        
      },
      err => {
        console.log(<any>err);
        
      }
    );
  
  }

  showAlert(){
    swal({title: "Estas seguro de contratar a este destino?",
    text: "El servicio de ambulancia solo será requerido para dicho destino, no puede haber cambios",
    icon: "warning",
    buttons: [true, true],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Vamos a llenar el papeleo!", {
        icon: "success",
      });
    } else {
      swal("Tranquilo, Puedes intentar contratar algun otro destino!", {
        icon: "error",
      });
    }});
      
  }
  
  editarAmbulancia(){
    swal({title: "Estas seguro de Editar este destino?",
    text: "Una vez que se haya editado el destino, no se podrá recuperar",
    icon: "warning",
    buttons: [true, true],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Vamos a Actualizarlo!", {
        icon: "success",
      });
    } else if (willDelete == null){
      swal("Tranquilo, el destino sigue estando ahí..", {
        icon: "error",
      });
      this._router.navigateByUrl('/ambulancia');
    }});
  
  }

  eliminarAmbulancia(){
    swal({title: "Estas seguro de Eliminar este destino?",
    text: "Una vez que se haya eliminado el destino, no se podrá recuperar",
    icon: "warning",
    buttons: [true, true],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {


      swal("Destino Eliminado con Éxito!", {
        icon: "success",
      });
    } else {
      swal("Tranquilo, el destino sigue estando ahí..", {
        icon: "error",
      });
    }});
      
  }

  delete(id) {
    this._ambulanciaService.delete(id).subscribe(
      response => {

        swal("Registro Eliminado!", "Este registro no se podrá ver más", "error");
        this.verDatos();
        this._router.navigateByUrl('/ambulancia');
      },
      error => {
        console.log(error);
        
      }
    );
  }

  

}
