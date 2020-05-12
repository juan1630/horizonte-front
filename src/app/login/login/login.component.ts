import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Personal } from 'src/app/intefaces/usuario.interface';
import { Router } from '@angular/router';

import   swal  from 'sweetalert';


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
 
      this.router.navigate(['/dashboard'])


    }) 

  }


}
