import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { MaternidadService } from 'src/app/services/tabulador/maternidad.service';

@Component({
  selector: 'app-pagos-maternidad',
  templateUrl: './pagos-maternidad.component.html',
  styleUrls: ['./pagos-maternidad.component.scss']
})
export class PagosMaternidadComponent implements OnInit {
  public semanasDeGestacion: string;
  public pagos:any[] = [];
  public pagosTabla:any[]=[];

  constructor(
        public maternidadService: MaternidadService
  ) { }


  ngOnInit(): void {
    

    // swal({
    //   title: "¿Apartir de que semana de gestación comienza ?",
    //   content: "input",
    // })
    // .then( value => {
    //   if( value > 39 ){
    //     swal("error", 'Semana no valida')
    //     return;
    //   }
    //   this.getSemanasDepagos(  value );
    // } );

    this.verTabla();
    
  }

  getSemanasDepagos(semana){
      this.maternidadService.getSemanas( semana )
      .subscribe( (pago) => {
            this.pagos = pago;
      } );
 
}

  verTabla(){
    this.maternidadService.getTabulador()
    .subscribe( (data: any) => {
      console.log( data);
        this.pagosTabla = data.pagos;
    });
  }
}
