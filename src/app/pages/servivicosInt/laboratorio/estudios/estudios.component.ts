import { Component, OnInit } from '@angular/core';
import { LaboratorioPreciosService } from 'src/app/services/laboratorio/laboratorio-precios.service';
import { Estudios } from 'src/app/intefaces/estudiosLaboratorio';
import { BusquedaGeneralService } from 'src/app/services/busquedas/busquedaGeneral/busqueda-general.service';
import { Router, ActivatedRoute} from '@angular/router';

import  { getDataStorage, gaurdarCotizacion, eliminarTodoPedido, getDataCarrito }  from '../../../../functions/storage/storage.funcion';

import  {  BusquedaGeneral } from '../../../../intefaces/busquedaGeneral';

import  swal from 'sweetalert'; 


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  // este role es del operario de la computadora
  public role: string;
  
  // listado de los estudios
  public estudios: Estudios[]=[];

  // cotización
  public total:number = 0;
  public ahorro: number = 0;
  public totalConMembresia: number = 0;
  public busquedaTodosLosServicio: BusquedaGeneral[] = [];

  
  public carrito = {
    totalSin: 0,
    totalCon:0,
    items:[]
  };
  
  constructor(
    private examenesLaboratorio: LaboratorioPreciosService,
    private _busquedaGeneral: BusquedaGeneralService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.getAllExamenes();
    this.role = getDataStorage().role;
    this.carrito = getDataCarrito();
    console.log( this.carrito );
  }

// esta función nos trae todos los examenes y los pinta en la tabla
  getAllExamenes(){
    this.examenesLaboratorio.getExamenes()
    .subscribe( (estudio: any) => {
      console.log(estudio.estudios);
      this.estudios = estudio.estudios;
    })
  }



  // FUNCION QUE SACA EL TOTAL SIN MEMBRESIA

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


  // FUNCION QUE AGREGA AL CARRITO UN ELEMENTO NUEVO

  agregarCarrito( event, item: Estudios ){
    
    if( event.path[1].classList.contains('precioPublico')  ){ 
    
      let  estuidio = {

        nombreEstudio: item.ESTUDIO,
        precioSin: item.PUBLICO,
        precioCon: item.MEMBRESIA,
        entrega: item.ENTREGA,
        idEstudio:item._id
    }

      this.sumarTotal( item.PUBLICO, item.MEMBRESIA );

      this.carrito.items.push( estuidio );
      

    }else if (  event.path[1].classList.contains('precioNoche') )  {

      let  estuidio = {
        nombreEstudio: item.ESTUDIO,
        precioNoche: item.NOCTURNO,
        entrega: item.ENTREGA,
        idEstudio:item._id
    }

    this.sumarTotal( item.NOCTURNO, item.NOCTURNO );

    this.carrito.items.push( estuidio );
    
    }else if( event.path[1].classList.contains('urgencia') ) {

      let  estuidio = {

        nombreEstudio: item.ESTUDIO,
        precioUrgenciaMembresia: item.URGENCIA_MEM,
        precioUrgenciaPublico: item.URGENCIA_PUB,
        entrega: item.ENTREGA,
        idEstudio:item._id

    }

      this.sumarTotal( item.URGENCIA_PUB, item.URGENCIA_MEM );
      this.carrito.items.push( estuidio );
      
  }
    
    let carritoString = JSON.stringify( this.carrito );
  

    gaurdarCotizacion( carritoString );
    this.carrito = getDataCarrito();
    console.log( this.carrito );
    

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

  


// funcion que elimna un examen 

  deleteExamenLab(id:string){

    swal({title: "Estas seguro de Eliminar este examen?",
    text: "Una vez que se haya eliminado el examen, no se podrá recuperar",
    icon: "warning",
    buttons: {
      cancel: {
        text: "Cancel",
        value: false,
        visible: true,
        closeModal: true,
      },
      confirm: {
        text: "OK",
        value: true,
        visible: true,
        closeModal: true
      }
    } ,
    dangerMode: true,
  })
  .then((willDelete) => {

    if (willDelete) {
      
      this.examenesLaboratorio.deleteExamenById( id )
      .subscribe( (data:any)=> {
        console.log( data );
        
        if(data.ok){
        
          swal({
            icon: "success",
            text: "Se eliminó el servicio"
          });
  
          this.getAllExamenes();
        }
  
      } )

      swal("Examen Eliminado con Éxito!", {
        icon: "success",
      });
    } else {
      swal("El servicio sigue ahí...", {
        icon: "error",
      });
    }})


  }

  // funcion que muestra el modal del usuario

  verComparacio( publico, membresia ){

      let ahorro = 0;
    
      
    let publicoTrim = publico.replace('$', '');
    let membresiaTrim   = membresia.replace('$', '');


    let publicoTrims = publicoTrim.replace(',', '');
    let membresiaTrims = membresiaTrim.replace(',', '');


    let publicoNumber = parseFloat(publicoTrims);
    let  membresiaNumber = parseFloat(membresiaTrims);
      
      ahorro = publicoNumber - membresiaNumber;
   
     swal({
      icon: "success",
      title: `Ahorro: ${ ahorro}` ,
      text: `Sin membresia: ${ publico } - Con membresia: ${ membresia }`
    });
  }


  
  enviar(   formualrio  ) {
    
    // console.log( formualrio.value );

    let termino = formualrio.value.filterPost;

    this._busquedaGeneral.getAllDepartments( termino )
    .subscribe( (data:BusquedaGeneral[]) => {
        console.log(data);
        this.busquedaTodosLosServicio = data;
    } )


  }


}
