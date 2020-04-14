import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  
  public usuario;
  
  constructor() { }

  ngOnInit() {
    this.getRole()
  }

  getRole(){
    this.usuario =  JSON.parse (localStorage.getItem('usuario'));
    console.log(this.usuario);
  }

}
