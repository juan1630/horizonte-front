import { Component, OnInit } from '@angular/core';
import { getDataCarrito } from 'src/app/functions/storage/storage.funcion';
// import  { PdfMakeWrapper, Txt, Img  } from 'pdfmake-wrapper';
import { headerImg, ImgFooter } from '../../../config/index.config';
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

  async imprimir(){




    let cotizacion = document.querySelector('#cotizacion');



    const doc = new jsPDF();

    doc.addImage( headerImg, 'JPEG', 5 , 0, 200, 50 );
    doc.fromHTML( cotizacion, 30 ,50 );

    doc.addImage( ImgFooter, 'JPG', 5, 250, 200, 40 );
    doc.save('COTIZACION');
   
  }

}
