import { Component, OnInit } from '@angular/core';


import  {  getDataCarrito } from '../../../functions/storage/storage.funcion';
import { CarritoLaboratorios } from 'src/app/intefaces/carrito/carrito.interfaces';
import  { gaurdarCotizacion }  from '../../../functions/storage/storage.funcion';

@Component({
  selector: 'app-tarjeta-cotizacion',
  templateUrl: 'tarjeta-cotizacion.component.html',
  styleUrls: ['./tarjeta-cotizacion.component.scss']
})
export class TarjetaCotizacionComponent implements OnInit {


  public carrito: CarritoLaboratorios;

  
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(  ): void {

      console.log( this.carrito );
  }



}
