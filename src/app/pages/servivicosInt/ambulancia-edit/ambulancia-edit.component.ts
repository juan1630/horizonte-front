import { Component, OnInit } from '@angular/core';
import { AmbulanciaService } from '../../../services/ambulancia/ambulancia.service';
import { AmbuEdit } from '../../../models/ambulancia-edit';
import { Router, ActivatedRoute, Params} from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-ambulancia-edit',
  templateUrl: './ambulancia-edit.component.html',
  styleUrls: ['./ambulancia-edit.component.scss'],
  providers: [AmbulanciaService]
})
export class AmbulanciaEditComponent implements OnInit {

  public ambulanciaEdit = {
              _id: "",
            DESTINO: "",
            PRECIO_MEMBRESIA_DIA:"",
            PRECIO_MEMBRESIA_NOCHE: "",
            PRECIO_MEMBRESIA_REDONDO_DIA: "",
            PRECIO_MEMBRESIA_REDONDO_NOCHE: "",
            PRECIO_PUBLICO_DIA: "",
            PRECIO_PUBLICO_NOCHE: "",
            PRECIO_PUBLICO_REDONDO_DIA: "",
            PRECIO_PUBLICO_REDONDO_NOCHE: ""
  };
  public status: string;
  public is_edit: boolean;
  public id: string;
  public page_title: string;
  public url: string;



  constructor(

    private _ambulanciaService: AmbulanciaService,
    private _router: Router,
    private _route: ActivatedRoute
    
  ) { 
    this.is_edit = true;
    this.page_title =  "Editar Destino Servicio de Ambulancia";
  }


  ngOnInit() {
    this.getAmbulancia();
    console.log('weeey yaaaaaa...');

    
    this.id = this._route.snapshot.paramMap.get('id');
  }

  onSubmit() {
    console.log(this.ambulanciaEdit);
    this._ambulanciaService.update(this.id, this.ambulanciaEdit).subscribe(
      res => {
        if(res.ok){
          this.status = 'ok';
          this.ambulanciaEdit = res.ambulancia;

          swal("Editado Correctamente!", "Puedes ver los cambios en el Servicio de Ambulancia!", "success")
          this._router.navigateByUrl('/ambulancia');

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

  getAmbulancia(){
    this._route.params.subscribe(params => {

      var id = params['id'];

      this._ambulanciaService.getAmbulanciaById(id).subscribe(

        (res:any) => {

          if(res.ambulancia){

            this.ambulanciaEdit = res.ambulancia;

            console.log(this.ambulanciaEdit);
            
          }else{
            // this._router.navigate(['/ambulancia']);
          }
        },

        err => {
          
          console.log(err);
          // this._router.navigate(['/ambulancia']);
          
        }
      
      )
    });
  }



}
