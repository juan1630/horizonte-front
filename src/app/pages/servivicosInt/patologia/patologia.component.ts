import { Component, OnInit } from '@angular/core';
import { PatologiaService } from 'src/app/services/patologia/patologia.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.component.html',
  styleUrls: ['./patologia.component.scss']
})
export class PatologiaComponent implements OnInit {

  
  public patologias: any[]=[];

  constructor(
    public _patologiaService: PatologiaService
  ) { }


  ngOnInit(): void {

    this.getAllPatologias();

  }

  getAllPatologias(){

    this._patologiaService.getPatologias()
    .subscribe( (data:any) => {
      console.log( data );
      this.patologias = data;
    });

  }

  deletePatologia(id){

    console.log( id);
    
    this._patologiaService.deletePatologia( id )
    .subscribe( (data) => {
      console.log( data );
      this.getAllPatologias();
    } )

  }


  showAlert(precioPublico, precioMembresia){


    let numberPrecioPublico = parseFloat( precioPublico );
    let numberPrecioMembresia = parseFloat(precioMembresia);


    // console.table({
    //   numberPrecioPublico,
    //   numberPrecioMembresia
    // })

    swal( `Tu ahorro sería de ${numberPrecioPublico - numberPrecioMembresia}`, '', 'success');

  }

}
