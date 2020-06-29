import { FiscalesComponent } from './../fiscales/fiscales.component';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Mapboxgl from 'mapbox-gl';
import  swal from 'sweetalert';
//===============================
// SERVICES
//===============================

import { ModalServiceService } from '../modal/modal-service.service';
import { CodigoPostalService } from '../../services/index.services';

//===============================
// INTERFACES
//===============================
import { Direcciones } from '../../intefaces/direcciones.interfaces';
import { CountriesService } from '../../services/countries/countries.service';
import { Paciente } from '../../intefaces/pacientes.interfaces';
import { PacienteService } from '../../services/paciente/paciente.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // @Output() numerofiscalesEvent = new EventEmitter<any[]>();

  datos: any[];
  public curp;
  public localidad;
  public _idfiscales = 0;
  // direccion
  public fechaRegistro;
  public  localidades: Direcciones[] = [];
  public  pais:string;
  public  estado: string;
  public  municipio: string;
  public tipoAsentamiento: string;
  public paises: string[];
  public lgn: any;
  public lat: any;
  public name: string;
  public paquetes;
  public razonesSociales: any[] = [];
  public paisNac: string;

  // fiscales
  public estadoFiscal: string;
  public coloniaFiscal: string;
  public municipioFiscal: string;
  public ciudadFiscal: string;
  public asentamientoFiscal: string[];
  public tipoAsentamientoFiscal: string;
  public localidFiscal: string;
  public nombreRazonSocial: string;
  public RFCFiscal: string;
  public cpFiscal: string;
  public codigoFiscal: string;
  public emailFiscal: string;
  public localidadFiscal: string;

  public pacientes: any= [];
  public pagina: number = 0;

  constructor(
    public _modalService: ModalServiceService,
    public _CodigoPostal: CodigoPostalService,
    public _countries:CountriesService,
    private _pacienteService: PacienteService
   ) {


   }


   mapa: Mapboxgl.Map;

  ngOnInit() {

     // render del mapbox

     let dia = new Date().getDay();
     let mes = new Date().getMonth();
     let anio = new Date().getFullYear();

     this.fechaRegistro = `${dia}/ ${mes} / ${anio} `;

     (Mapboxgl as any ).accessToken = environment.maboxApiKey;
     this.mapa = new Mapboxgl.Map({
       container: 'mymap',
       style: 'mapbox://styles/mapbox/streets-v11',
       center: [-98.9884364, 18.9576149], // LGN, LAT
       zoom:10
     })
     .resize();


     this.crearMarcador( -98.9884364, 18.9576149 )


    this._countries.getCountries()
    .subscribe( (countries: any) => {
      this.paises = countries;
      console.log( this.paises );
     });

    this._pacienteService.getPacientes( this.pagina )
    .subscribe( (pacientes: any) => {
        this.pacientes = pacientes;
        this.paquetes = pacientes.paquetes;
     });

      this.getTodoslosPacientes();
      this._modalService.setServiciosDatos();
  }


  crearMarcador( lng: number, lat: number ) {


    const marker = new Mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng,lat])
    .addTo(this.mapa);
    marker.on('drag', ()  => {

        // console.log(  marker.getLngLat().lng  );
        // console.log(  marker.getLngLat().lat  );

      this.lgn = marker.getLngLat().lng;
      this.lat = marker.getLngLat().lat;


    } )

  }

  getUbicacion( codigo: number ) {

      this._CodigoPostal.getLocalidades( codigo )
        .subscribe( (res: any ) => {

          console.log("Direcciones", res )

          this.pais = res.response.pais;
          this.estado = res.response.estado;
          this.municipio = res.response.municipio;
          this.tipoAsentamiento = res.response.tipo_asentamiento;
          this.localidades.push (...res.response.asentamiento);
          console.log(  this.localidades );
      //    this.localidades = res.response.asentamiento;

    } );

  }


enviar( f: NgForm ){



    
    let paciente = new Paciente(
      f.value.nombrePaciente,
      f.value.apellidoPaterno,
      f.value.apellidoMaterno,
      f.value.fechaNacimientoPaciente,
      f.value.entidadNacimiento,
      f.value.edad,
      f.value.curp,
      f.value.paisNacimineto,
      f.value.telefono,
      f.value.contactoEmergancia,
      f.value.telefonoEmergencia,
      f.value.correo,
      f.value.cpPaciente,
      f.value.paisPaciente,
      f.value.municipio,
      f.value.estadoPaciente,
      f.value.poblacion,
      f.value.calleNumeroPaciente,
      f.value.referenciaPaciente,
      f.value.nombreRazonSocial,
      f.value.entidadFederativa,
      f.value.poblacion,
      f.value.RFCFiscal,
      f.value.cpFiscal,
      f.value.localidadFiscal,
      f.value.emailFiscal
      // this.razonesSociales[1][1],
      // this.razonesSociales[1][2],
      // this.razonesSociales[1][3],
      // this.razonesSociales[1][4],
      // this.razonesSociales[1][5],
      // this.razonesSociales[1][6],
      // this.razonesSociales[1][7],
      );
       console.log( this.razonesSociales );
      this._pacienteService.setPacientes( paciente )
      .subscribe( (data: any) => {

        if( data.ok === true ) {

          swal(`Bienvenido ${data.paciente.nombrePaciente}`, 'El paciente agregado', 'success');

           f.reset();
           this.getTodoslosPacientes();
           this._modalService.ocultarModal();
           return;

        }else {
          swal('Algó ocurrio', 'Intenta de nuevo', 'error');
          console.log('Algo pasó', data );
        }
       } )

  

  
}


getTodoslosPacientes(){
  this._pacienteService.getPacientes(this.pagina)
  .subscribe( (pacientes) => {
   return this.pacientes = pacientes;
  } )
}


// getLocations( codigo: number ){

//   return this._CodigoPostal.getLocalidades( codigo )

//   .subscribe( (data: any) => {


//     this.estadoFiscal= data.response.ciudad;
//     this.tipoAsentamientoFiscal = data.response.tipo_asentamiento;
//     this.municipioFiscal = data.response.municipio;
//     this.ciudadFiscal = data.response.ciudad;
//     this.asentamientoFiscal = data.response.asentamiento;
//     this.localidFiscal = data.response.municipio;

//   } )
// }



agregarCampos() {
  this.razonesSociales.push(this._modalService.setServiciosDatos());
  console.log(this.razonesSociales);
  for (let obj of this.razonesSociales) {
    console.log("object:", obj);
    for (let key in obj) {
        console.log("key:", key, "value:", obj[key]);
    }
}
  this._idfiscales++;
}

quitarElementos() {
  if( this.razonesSociales.length === 0 ){
    swal('Error', 'No se pueden quitar los campos', 'error');
  }
  this.razonesSociales.pop();
  this._idfiscales--;
}


}
