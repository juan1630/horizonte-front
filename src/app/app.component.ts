import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


// import { WsLoginService } from './services/sockets/login/ws-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'horizonte-front';

  constructor(
    // public wsLogin: WsLoginService
  ){

  }
}
