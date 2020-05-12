import { Component, OnInit } from '@angular/core';
import { LaboratorioPreciosService } from 'src/app/services/laboratorio/laboratorio-precios.service';
import { Estudios } from 'src/app/intefaces/estudiosLaboratorio';
import  { getDataStorage, getCarritoStorage, guardarStorage, total }  from '../../../../functions/storage/storage.funcion' 
import  swal from 'sweetalert'; 

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  public estudios: Estudios[]=[];
  public role: string;
  public total:number = 0;
  public ahorro: number = 0;
  public totalConMembresia: number = 0;
  public carrito: Estudios[] = [];
  constructor(
    private examenesLaboratorio: LaboratorioPreciosService
  ) { }

  ngOnInit(): void {

    this.getAllExamenes();
    this.role = getDataStorage().role;
  }

  getAllExamenes(){
    this.examenesLaboratorio.getExamenes()
    .subscribe( (estudio: any) => {
      console.log(estudio.estudios);
      this.estudios = estudio.estudios;
    })
  }


  // FUNCION QUE AGREGA AL CARRITO UN ELEMENTO NUEVO

  sacarTotal(costo){
    // console.log( costo );

    let costoReplace = costo.replace('$','');
  
    let costoNumber = parseFloat( costoReplace );
    
    this.totalConMembresia = this.totalConMembresia + costoNumber;
    // console.log( this.total );
  }
  
  sacarTotalSinMembresia(costo){
    // console.log( costo );
    
    let costoReplace = costo.replace('$','');
    let costoNumber = parseFloat( costoReplace );
    this.total = this.total + costoNumber;
    // console.log( this.total );
    total( this.total );
    
  }


  ahorroTotal( ){
    return  this.ahorro = this.total - this.totalConMembresia;
  }
    


  agregarCarrito( item ){

  //  this.totalConMembresia =  this.totalConMembresia + item.MEMBRESIA;
  //  console.log( this.totalConMembresia );
    this.sacarTotal( item.MEMBRESIA );
    this.sacarTotalSinMembresia( item.PUBLICO );
    this.ahorroTotal();
    this.carrito.push( item );
    guardarStorage( this.carrito );
    return;
  }


  // ESTA FUNCION ELIMINA UN ELEMENTO DEL CARRITO
  eliminar( id ){
    console.log( id );
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
    
    
    // console.log( publico, membresia );

    // console.log( membresia);
    
    let publicoTrim = publico.replace('$', '');
    let membresiaTrim   = membresia.replace('$', '');

    // console.log( publicoTrim, membresiaTrim );

    let publicoTrims = publicoTrim.replace(',', '');
    let membresiaTrims = membresiaTrim.replace(',', '');


    // console.log( membresiaTrims);

    let publicoNumber = parseFloat(publicoTrims);
    let  membresiaNumber = parseFloat(membresiaTrims);

    // console.log( publicoNumber, membresiaNumber );

    //  console.table({
      //      membresia: membresia,
      //      publico: publico
      //    })
      
      ahorro = publicoNumber - membresiaNumber;
   
     swal({
      icon: "success",
      title: `Ahorro: ${ ahorro}` ,
      text: `Sin membresia: ${ publico } - Con membresia: ${ membresia }`
    });
  }

}
