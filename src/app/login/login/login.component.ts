import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Personal } from 'src/app/intefaces/usuario.interface';
import { Router } from '@angular/router';

import swal from 'sweetAlert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( 
        public _loginService: LoginService,
        private router: Router
   ) { }

  ngOnInit(): void {

  }


  ingresar( forma: NgForm ) {

    // console.log( forma )
    this._loginService.logout();

    if( forma.invalid ){
      swal('Llena todos los campos','','error');
      return;
    }

    let personal = new Personal( forma.value.nombre, forma.value.password );

    this._loginService.login( personal )
    .subscribe( (correcto: any)=> {



    //  swal({
    //    title: 'Selecciona un role',
    //     input: 'select',
    //     inputOptions: {
    //       'Fruits': {
    //         apples: 'Apples',
    //         bananas: 'Bananas',
    //         grapes: 'Grapes',
    //         oranges: 'Oranges'
    //       },
    //     inputPlaceholder: 'Selecciona el role',
    //     showCancelButton: true,
    //     inputValidator: (value) => {
    //       return new Promise((resolve) => {
    //         if (value === 'oranges') {
    //           resolve()
    //         } else {
    //           resolve('You need to select oranges :)')
    //         }
    //       })
    //     }
    //   }
    // });
      
      // if (fruit) {
      //   swal.fire(`You selected: ${fruit}`)
      // }
 
      this.router.navigate(['/dashboard'])


    }) 

  }


}
