import { Component, OnInit } from '@angular/core';
import { getDataCarrito } from 'src/app/functions/storage/storage.funcion';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public carrito = {
    totalSin: 0, 
    totalCon: 0, 
    items:[]
  }

  constructor() { }

  ngOnInit(): void {

    this.carrito = getDataCarrito();
    console.log(this.carrito);
    
  }

  imprimir(){
    const doc = new jsPDF();

    doc.fromHTML(document.getElementById('imprimirxd'), 30, 10);
    doc.save('COTIZACIÓN');
    
  }

}
