import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import {  Personal } from 'src/app/intefaces/usuario.interface';
import { map } from 'rxjs/operators';
import { URLDEV } from 'src/app/config/index.config';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;
  usuario: any;
  cargarStrage: any;
  public url: string;
  constructor(
    public http: HttpClient,
    public router: Router,
    public WService: WsLoginService,
  ) {
    this.cargarStrage =  this.cargarStorage();


      this.url = "https://sleepy-tor-20835.herokuapp.com";

    // this.url = "http://localhost:3200";

  }


   login( personal: any ) {

    if( this.cargarStorage  ){
      this.logout();
    }

      let url = `${this.url}`+`/login`;

      return this.http.post(url, personal )
      .pipe( map( (resp: any)=> {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('usuario', JSON.stringify(resp.personal) )
          this.token= localStorage.getItem('token');
          this.usuario = JSON.parse( localStorage.getItem('usuario') );
          return true;
      }) );

  }

   // borramos el token y el usuario del storage
   logout(){

    this.token = null;
    this.usuario = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  cargarStorage(){

    if( localStorage.getItem('token') ){

      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') )

    }else {
      this.token = '';
      this.usuario = null;

      this.router.navigate(['/login']);
    }
  }


  estaLogeado(){

    return ( this.token.length > 3 ) ? true : false;

  }


}
