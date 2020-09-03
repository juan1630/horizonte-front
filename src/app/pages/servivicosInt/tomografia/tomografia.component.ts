import { Component, OnInit } from '@angular/core';
import { TomografiaService } from 'src/app/services/tomografia/tomografia.service';

@Component({
  selector: 'app-tomografia',
  templateUrl: './tomografia.component.html',
  styleUrls: ['./tomografia.component.scss']
})
export class TomografiaComponent implements OnInit {

  public termino = "";
  public tomografias : [] =[];
  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };
  

  constructor(
        private tomografiaService: TomografiaService
  ) { }

  ngOnInit(): void {

    this.obtenerTomografias();

  }

  obtenerTomografias(){
    this.tomografiaService.obtenerTomografias()
    .subscribe( 
      (data:any) =>{
          this.tomografias = data.tomografia;
          // console.log(data);
          console.log( this.tomografias)
      } 
    )
  }

  busquedaGeneral(){

  }



  eliminar(pedido){}


  delete(  item ){
    this.tomografiaService.deleteTomografia( item )
    .subscribe(  (data:any) => {
      // console.log( data);

      if(data.ok){
        // alert('Eliminado...')
        this.obtenerTomografias();
      }

    } )
  }


}
