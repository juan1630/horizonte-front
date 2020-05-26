import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { Paciente } from 'src/app/intefaces/pacientes.interfaces';
import { LaboratorioPreciosService } from 'src/app/services/laboratorio/laboratorio-precios.service';
import { Estudios } from 'src/app/intefaces/estudiosLaboratorio';


@Component({
  selector: 'app-precios-membresia',
  templateUrl: './precios-membresia.component.html',
  styleUrls: ['./precios-membresia.component.scss']
})
export class PreciosMembresiaComponent implements OnInit {
public id: string ='';
public paciente: Paciente[]=[];
public laboratorios: Estudios[] = [];
public estudiosPedido: Estudios[]=[];
public carrito: Estudios[]=[];
public urgenciaMembresia: boolean = false;



constructor(
    private _router: ActivatedRoute,
    public pacienteService: PacienteService,
    public laboratorioService: LaboratorioPreciosService
  ) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.paramMap.get('id');
    
    this.pacienteService.getPacienteBtID(this.id)
    .subscribe((paciente:any) => {
      console.log(paciente);
      this.paciente = paciente.paciente;
    });

    this.laboratorioService.getExamenes()
    .subscribe( (laboratorios:any) => {
      this.laboratorios = laboratorios.estudios;
      console.log(this.laboratorios);
    });
    
  }


  eliminar(){
    
  }

  // agregar( item ){

  //   this.sacarTotal(item.MEMBRESIA);
  //   return  this.carrito.push(item);
  // }


  // agregarUregncias( item ){

  //   this.sacarTotal( item.URGENCIA_MEM );
  //   this.urgenciaMembresia = true;
  //   return this.carrito.push( item );

  // }

  // sacarTotal(costo){
  //   // console.log( costo );

  //   let costoReplace = costo.replace('$','');
  
  //   let costoNumber = parseFloat( costoReplace );
    
  //   this.total = this.total + costoNumber;
  
  // }

  // restarTotal(costo){

  //   // console.log( this.total );
  //  return this.total = this.total - costo;
 
  // }

//   eliminar(id){ 

//    this.carrito = this.carrito.filter(  (item) => {

//     if( id === item._id ){


//       if( this.urgenciaMembresia ){

//         console.log( item);

//         let costoReplace = item.URGENCIA_MEM.replace('$','');
//         let costoNumber = parseFloat( costoReplace );
//         // console.log( costoNumber );
//         this.restarTotal( costoNumber );
//         console.log( this.total );
//         return;

//       }
      
//       let costoReplace = item.MEMBRESIA.replace('$','');
//       let costoNumber = parseFloat( costoReplace );
//       // console.log( costoNumber );
//       this.restarTotal( costoNumber );
//       console.log( this.total );
//       return;
//     }
     
//      return  item._id != id;
//   } );
  
// }

}