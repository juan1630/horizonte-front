import { Component, OnInit } from '@angular/core';
import { gaurdarCotizacion } from 'src/app/functions/storage/storage.funcion';
import { BusquedaGeneralService } from 'src/app/services/busquedas/busquedaGeneral/busqueda-general.service';

@Component({
  selector: 'app-consultas-gral',
  templateUrl: './consultas-gral.component.html',
  styleUrls: ['./consultas-gral.component.css']
})
export class ConsultasGralComponent implements OnInit {

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
    estudio : 'Consulta con especialista',
    precioSin:100,
    precioCon:0,
    _id: "1"
  }

  public carrito = {
    totalSin: 0,
    totalCon: 0,
    items: []
  };

  public showTableAmbulanacia = true;

  constructor(

    private _buscadorGlobal: BusquedaGeneralService
  ) { }

  ngOnInit(): void {
  }

  agregarCarrito( event, item: any ) {


    console.log( item );

      console.log( 'entra' )


      // en esta parte pasamos el precio de día con y sin
      let  estuidio = {

        nombreEstudio: item.estudio,
        precioSin: item.precioSin,
        precioCon: item.precioCon,
        idEstudio:item._id

    }


    console.log( estuidio );

    // pasamos el precio redondo día con y sin

      this.sumarTotal(   item.precioSin, item.precioCon );

      this.carrito.items.push( estuidio );




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



    console.table({
       precioSin, precioCon
    })

    // se le quitan los caracteres $ y , al precio con membresia

      // let precioConMembresia  = precioCon.replace('$', '');
      // let precioConSinComa  = precioConMembresia.replace(',', '');
      // let precioConMembresiaNumber = parseFloat( precioConSinComa );



      // // se le quitan los caracteres $ y , al precio sin membresia
      // let costoSin = precioSin.replace('$', '');
      // let costoSinComa = costoSin.replace(',', '');
      // let costoSinNumber = parseFloat( costoSinComa );


      this.carrito.totalSin = this.carrito.totalSin + precioSin;
      this.carrito.totalCon = this.carrito.totalCon + precioCon;


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
