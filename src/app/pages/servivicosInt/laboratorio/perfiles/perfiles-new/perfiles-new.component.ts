import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-perfiles-new',
  templateUrl: './perfiles-new.component.html',
  styleUrls: ['./perfiles-new.component.scss']
})
export class PerfilesNewComponent implements OnInit {

  profileForm : FormGroup;

  constructor(  
    public _fb: FormBuilder
  ) { 

    this.construirFormulario();
    
  }
  
  
  
  ngOnInit(): void {
  }
/**
 *      C:[''],
        H:[],
        B:[''],
      C2:[''],
        H2:[''],
        BIO4:[''],
        C3:[''],
        H3:[''],
        B2:[''],
        C4:[''],
        B3:[''],
        C5:[''],
        H5:[''],
        B4:[''],
        C6:[''],
        H6:[''],
        B5:['']
 * 
 * 
 */

  construirFormulario(){

    this.profileForm = this._fb.group({
      nombre: ['', Validators.required]
    });

      // this.forma = this._fb.group({
      //   NOMBRE: ['Juan', [Validators.required]],
      //   MUESTRA:['', [Validators.required] ],
      //   ENTREGA: ['', [Validators.required]],
      //   METODO:['', [Validators.required]],
      //   PUBLICO:['', [Validators.required, Validators.min(0)]],
      //   URGENCIA_PUBLICO:['', [Validators.required, Validators.min(0)]],
      //   MEMBRESIA:['', [Validators.required, Validators.min(0)]],
      //   URGENIA_MEMBRESIA:['', [Validators.required, Validators.min(0)]],
      //   NOCTURNO:['', [Validators.required, Validators.min(0)]],
      //   ESTUDIOS:['']
      // });

  }



  // agregarEstudio(){

  //   const contenedorInputs = document.querySelector('#estudios');
  //   const createdInput = document.createElement('input');

  //   createdInput.className = 'form-control';
  //   createdInput.placeholder = 'Nuevo estudio';

  //   createdInput.id = 'input';
  //   createdInput.setAttribute('name','estudios');


  //   console.log( createdInput );
  //   contenedorInputs.appendChild(createdInput);
    
  // }

  crearPerfil(  ){
    console.log(this.profileForm);
  }

}
