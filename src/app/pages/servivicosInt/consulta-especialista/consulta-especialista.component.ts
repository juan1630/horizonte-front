import { Component, OnInit } from '@angular/core';
import { BusquedaGeneralService } from 'src/app/services/busquedas/busquedaGeneral/busqueda-general.service';
import { gaurdarCotizacion } from 'src/app/functions/storage/storage.funcion';
import * as swal from 'sweetAlert';

@Component({
  selector: 'app-consulta-especialista',
  templateUrl: './consulta-especialista.component.html',
  styleUrls: ['./consulta-especialista.component.scss']
})
export class ConsultaEspecialistaComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:variable-name
    private _buscadorGlobal: BusquedaGeneralService
  ) { }

  public todosLosServicios = {
    ambulancia: [],
    endoscopia: [],
    laboratorios: [],
    message: '',
    ok: false,
    otrosServicio: [],
    patologia: [],
    rayosX: [],
    tomografia: [],
    ultrasonido: []
  };

  public termino = '';

  public consulta = {
    precioSin:500,
    precioCon:100
  }

  public carrito = {
    totalSin: 0,
    totalCon: 0,
    items: []
  };

  public showTableAmbulanacia = true;

  ngOnInit(): void {
  }

  agregarCarrito( event, item: any ) {


    console.log( item );

    if( event.path[1].classList.contains('precioPublico')  ){


      // en esta parte pasamos el precio de día con y sin
      let  estuidio = {

        nombreEstudio: item.DESTINO,
        precioSin: item.PRECIO_PUBLICO_DIA,
        precioCon: item.PRECIO_MEMBRESIA_DIA,
        idEstudio:item._id

    }

    // pasamos el precio redondo día con y sin

      this.sumarTotal(   item.PRECIO_PUBLICO_DIA, item.PRECIO_MEMBRESIA_DIA );

      this.carrito.items.push( estuidio );


    }else if (  event.path[1].classList.contains('precioRedondoDia') )  {

      let  estuidio = {
        nombreEstudio: item.DESTINO,
        precioSin: item.PRECIO_PUBLICO_REDONDO_DIA,
        precioCon: item.PRECIO_MEMBRESIA_REDONDO_DIA ,
        idEstudio:item._id
    }

    this.sumarTotal( item.PRECIO_PUBLICO_REDONDO_DIA, item.PRECIO_MEMBRESIA_REDONDO_DIA );

    this.carrito.items.push( estuidio );

    }else if( event.path[1].classList.contains('precioNoche') ) {


      // evaluamos el precio noche y precio noche sin
      let  estuidio = {

        nombreEstudio: item.DESTINO,
        precioSin: item.PRECIO_PUBLICO_NOCHE,
        precioCon: item.PRECIO_MEMBRESIA_NOCHE,
        idEstudio:item._id

    }

    console.log( estuidio );

      this.sumarTotal( item.PRECIO_PUBLICO_NOCHE, item.PRECIO_MEMBRESIA_NOCHE );
      this.carrito.items.push( estuidio );

  }else if( event.path[1].classList.contains('precioRedondoNoche')  ){


    let estudio = {

      nombreEstudio: item.DESTINO,
      precioSin: item.PRECIO_PUBLICO_REDONDO_NOCHE,
      precioCon: item.PRECIO_MEMBRESIA_REDONDO_NOCHE,
      idEstudio:item._id

    }

    this.sumarTotal( item.PRECIO_PUBLICO_REDONDO_NOCHE, item.PRECIO_MEMBRESIA_REDONDO_NOCHE );
    this.carrito.items.push( estudio );
    console.log(this.carrito);
  }

    const carritoString = JSON.stringify( this.carrito );


    gaurdarCotizacion( carritoString );
    // this.carrito = getDataCarrito();
    console.log( this.carrito );


  }

  busquedaGeneral(  ){

    this._buscadorGlobal.getAllDepartments( this.termino )
    .subscribe(  (data: any) => {

      this.todosLosServicios = data;

      this.showTableAmbulanacia = false;
      console.log( this.todosLosServicios );

    });

  }




  alertcomparasion(   ){

    // let precioSinTrim  =  precioPublico.replace('$', '');
    // let precioSinComaPublico = precioSinTrim.replace(',', '');


    // let precioMemTrim  =  precioMembresia.replace('$', '');
    // let precioMemComaMembresia = precioMemTrim.replace(',', '');


    swal({ title: `Con la memebresia ahorras ${ this.consulta.precioSin - this.consulta.precioCon }`    ,icon: 'success' });

  }


  sumarTotal(  precioSin, precioCon  ){


    // se le quitan los caracteres $ y , al precio con membresia

      let precioConMembresia  = precioCon.replace('$', '');
      let precioConSinComa  = precioConMembresia.replace(',', '');
      let precioConMembresiaNumber = parseFloat( precioConSinComa );



      // se le quitan los caracteres $ y , al precio sin membresia
      let costoSin = precioSin.replace('$', '');
      let costoSinComa = costoSin.replace(',', '');
      let costoSinNumber = parseFloat( costoSinComa );


      this.carrito.totalSin = this.carrito.totalSin + costoSinNumber;
      this.carrito.totalCon = this.carrito.totalCon + precioConMembresiaNumber;


    }

  eliminar( id ){


    this.carrito.items.forEach(  (item, index) => {

      // Agregar algun otro caso que se pueda dar

      if( item.idEstudio  === id ) {

        this.carrito.items.splice( index, 1 )

        if ( item.precioSin && item.precioCon ) {

          this.restarTotal( item.precioSin, item.precioCon );

        } else if ( item.precioNoche ) {

              this.restarTotal( item.precioNoche, item.precioNoche );
        }
      }

    } );

    const carritoString = JSON.stringify( this.carrito  );

    gaurdarCotizacion(  carritoString );

  }



restarTotal( precioSin, precioCon  ) {

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



}
