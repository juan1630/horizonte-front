import { Component, OnInit } from '@angular/core';
import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';


@Component({
  selector: 'app-hoja-diaria-enf-gral',
  templateUrl: './hoja-diaria-enf-gral.component.html',
  styleUrls: ['./hoja-diaria-enf-gral.component.css']
})
export class HojaDiariaEnfGralComponent implements OnInit {

  public listaEspera = [];

  constructor( 
    public loginService: WsLoginService
  ) { 
    
  }

  ngOnInit(): void {
  
    this.loginService.escucharConsulta()
      .subscribe(arg =>{ 
        console.log( arg);
        this.listaEspera.push(arg);

        console.log(this.listaEspera);
      });
  
    

    
  }

}
