import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, FormControlName, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { PatologiaService } from 'src/app/services/patologia/patologia.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-patologia-new',
  templateUrl: './patologia-new.component.html',
  styleUrls: ['./patologia-new.component.css']
})
export class PatologiaNewComponent implements OnInit {

  forma: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private patologiaService: PatologiaService,
    private router: Router
  ) { }



  ngOnInit(): void {

    // se crea por los formularios recativos de angular

    this.forma = this._fb.group({
      PATOLOGIA:['',[Validators.required, Validators.minLength(3) ]],
      PUBLICO:['', [ Validators.required, Validators.min(0)]],
      MEMBRESIA:['', [Validators.required, Validators.min(0)]]
    });
  
  }

  guardar(){

    let patologia = document.querySelector('#patologia');
    let publico = document.querySelector('#publico');
    let membresia = document.querySelector("#membresia");




    if( this.forma.invalid ){

        if( this.forma.value.PATOLOGIA === ""  || this.forma.value.PATOLOGIA ){
          patologia.classList.add('is-invalid');
          return;
        }


        
    if(  this.forma.value.PUBLICO <=0   ){

      publico.classList.add('is-invalid');
      return;
    }


    if( this.forma.value.MEMBRESIA <=0 ){}
    
      membresia.classList.add('is-invalid');
      return;

    }

    this.patologiaService.setANewPatologia( this.forma.value )
    .subscribe( (data:any) => {

      if(data.ok){
        swal("Se creo el servicio", "Servicio creado", "success");
        this.router.navigateByUrl('/patologia');

      }
    } )

  }


}
