import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModulesService } from 'src/app/services/modules/modules.service';
import { Personal } from 'src/app/intefaces/usuario.interface';
import { Module } from 'src/app/intefaces/module.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

 
  public usuario: Personal;
  public modules: Module[] = [];
  
  constructor( 
                public router: Router,
                public modulesService: ModulesService
                 ) { }
                 

  ngOnInit() {
    this.getRoleLocalStorage();
    this.getModuleByRole();
  }

  getRoleLocalStorage(){
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  getModuleByRole(){
    this.modulesService.getModules( this.usuario.role )
    .subscribe( (modules:any)  => {
      console.log( modules );
      this.modules = modules.modulos;
    })
    console.log( this.modules  )
  }

}
