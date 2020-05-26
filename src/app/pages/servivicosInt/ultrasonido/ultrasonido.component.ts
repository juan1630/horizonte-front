import { Component, OnInit } from '@angular/core';
import { UltraSonidoService } from 'src/app/services/ultrasonido/ultrasonido.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { getDataStorage, getDataCarrito, gaurdarCotizacion } from '../../../functions/storage/storage.funcion';
import swal from 'sweetalert';

@Component({
  selector: 'app-ultrasonido',
  templateUrl: './ultrasonido.component.html',
  styleUrls: ['./ultrasonido.component.scss'],
  providers: [UltraSonidoService]
})
export class UltrasonidoComponent implements OnInit {

  public ultrasonidoSI: any[] = [];
  public role;

  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };
  
  constructor(
    private _ultrasonidoService: UltraSonidoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {

      this.verDatos();

      this.role = getDataStorage().role;
      this.carrito = getDataCarrito();
      console.log( this.carrito );

  }

  verDatos(){
    this._ultrasonidoService.getEstudiosUltrasonido().subscribe(
      res => {
        this.ultrasonidoSI = res.ultrasonido;
      },
      err => {
        console.log(<any>err);
        
      });
  }

  agregarCarrito( event, data ){

    console.log(event, data);

    if( event.path[1].classList.contains('precioPublico') ){
      console.log( 'publico' );
    }else if( event.path[1].classList.contains('urgencia') ){
      console.log('urgencia');
    }
  }


  restarTotal ( precioSin, precioCon  ) {

    let precioSinTrim  =  precioSin.replace('$', '');
    let precioSinComa = precioSinTrim.replace(',', '');
    // aca le quito la coma si es que trae
    let precioSinMembresiaNumber = parseFloat( precioSinComa );
     
  
     let precioConTirm = precioCon.replace('$', '');
    let precioConMembresiaSinComa = precioConTirm.replace(',', '');
      // aca le quito la coma si es que la trae
    let precioConMembresiaNumber = parseFloat( precioConMembresiaSinComa );
  
  
  
    this.carrito.totalCon = this.carrito.totalCon - precioConMembresiaNumber;
    this.carrito.totalSin = this.carrito.totalSin - precioSinMembresiaNumber;
  
  
  
  
      }

  eliminar( id ){


    this.carrito.items.forEach(  (item, index) => {

      // Agregar algun otro caso que se pueda dar  

      if( item.idEstudio  === id ) {

        this.carrito.items.splice( index, 1 )
       
        if( item.precioSin && item.precioCon ){

          this.restarTotal( item.precioSin, item.precioCon );
          
        }else if( item.precioNoche ){
    
              this.restarTotal( item.precioNoche, item.precioNoche );
        }  
      }

    } );

        let  carritoString = JSON.stringify( this.carrito  );

        gaurdarCotizacion(  carritoString );

  }

  

  delete(id) {

    this._ultrasonidoService.delete(id).subscribe(
      response => {
        swal("Registro Eliminado", "Este Registro no se podrá ver más", "error");
        this.verDatos();
        this._router.navigateByUrl('/ultrasonido');
      },
      error => {
        console.log(error);
      }
    );
  }


}
