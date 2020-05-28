
import { Component, OnInit, Input } from '@angular/core';
import { CodigoPostalService } from '../../services/codigoPostal/codigo-postal.service';
import { Direcciones } from '../../intefaces/direcciones.interfaces';
import { ModalServiceService } from 'src/app/components/modal/modal-service.service';

@Component({
  selector: 'app-fiscales',
  templateUrl: './fiscales.component.html',
  styleUrls: ['./fiscales.component.scss']
})
export class FiscalesComponent implements OnInit {
  // @Input() numerofiscales: any[];
  DatosFiscales:any =[];
  asentamientoFiscal: any = [];
  public localidades: Direcciones[]=[];
  public localidad;
  public numero: number;
  public tipoAsentamiento: string;
  public municipioFiscal_2;
  public coloniafiscal_2;
  public tipoAsentamientoFiscal;
  public estadoFiscal;
  public localidadFiscal2;
  public paciente_id;
  public emailFiscal;
  public nombreRazonSocial;
  public RFCFiscal_2;
  public codigoFiscal2;
  constructor(
    public _CodigoPostal: CodigoPostalService,
    public _ModalServiceService: ModalServiceService
    ) {

   }

  ngOnInit(): void {
    // console.log( this.numerofiscales );
    // this.numero = this.numerofiscales.length;
    // console.log(this.numero);

  }
  getLocations( location ){
    console.log( location )
  }

  getUbicacion( codigo: number ) {

    this._CodigoPostal.getLocalidades( codigo )
      .subscribe( (res: any ) => {

        console.log("Direcciones", res )

        // this.pais = res.response.pais;
        this.estadoFiscal = res.response.estado;
        this.municipioFiscal_2 = res.response.municipio;
        this.tipoAsentamiento =  res.response.tipo_asentamiento;
        this.localidades.push(...res.response.asentamiento);
      } );

}
sentdatos(){
  this.DatosFiscales.push(
    this.nombreRazonSocial,
    this.RFCFiscal_2,
    this.codigoFiscal2,
    this.estadoFiscal,
    this.municipioFiscal_2,
    this.tipoAsentamiento,
    this.localidad,
    this.emailFiscal);
  this._ModalServiceService.getServiciosDatos(this.DatosFiscales);
}

}
