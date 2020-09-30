import { FiscalesComponent } from './../fiscales/fiscales.component';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm,FormBuilder, FormGroup } from '@angular/forms';
import * as moment  from 'moment';

import * as Mapboxgl from 'mapbox-gl';
import  swal from 'sweetAlert';
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


moment.locale('es');


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // @Output() numerofiscalesEvent = new EventEmitter<any[]>();

  public datos: any[];
  // public curp;
  // public localidad;
  public _idfiscales = 0;

  // direccion
  public moment = moment();



  public registerForm: FormGroup;

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



  public pacientes: any= [];

  public pagina: number = 0;


  constructor(
    public _modalService: ModalServiceService,
    public _CodigoPostal: CodigoPostalService,
    public _countries:CountriesService,
    private _pacienteService: PacienteService,
    public _fb: FormBuilder
   ) {


   }


   mapa: Mapboxgl.Map;

  ngOnInit() {

    this.fechaRegistro =  this.moment.format();
    // this.crearFormulario();


    // console.log( this.fechaRegistro);

     // render del mapbox

     (Mapboxgl as any ).accessToken = environment.maboxApiKey;
     this.mapa = new Mapboxgl.Map({
       container: 'mymap',
       style: 'mapbox://styles/mapbox/streets-v11',
       center: [-98.9884364, 18.9576149], // LGN, LAT
       zoom:10
     })
     .resize();


     // inicializa el mapa con el marcador

     this.crearMarcador( -98.9884364, 18.9576149 )


    this._countries.getCountries()
    .subscribe( (countries: any) => {
      this.paises = countries;
      // console.log( this.paises );
     });

     // se obtiene los pacientes

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

      this.lgn = marker.getLngLat().lng;
      this.lat = marker.getLngLat().lat;
    } );

  }



      crearFormulario(){

        this.registerForm = this._fb.group({
            nombrePaciente: ['' ],
            // apellidoPaterno:[''],
            // apellidoMaterno:[''],
            // fechaNacimientoPaciente:[''],
            // entidadNacimiento:[''],
            // cpPaciente: [''],
            // telefono: [''],
        })

      }


      // obtenemos la ubicacion por medio del codigo postal

    getUbicacion( codigo: number ) {

      this._CodigoPostal.getLocalidades( codigo )
        .subscribe( (res: any ) => {

          // console.log("Direcciones", res );
          // guardamos los datos de las direcciones y los

          this.pais = res.response.pais;
          this.estado = res.response.estado;
          this.municipio = res.response.municipio;
          this.tipoAsentamiento = res.response.tipo_asentamiento;
          this.localidades.push (...res.response.asentamiento);
          console.log(  this.localidades );
      //    this.localidades = res.response.asentamiento;

    } );

  }


enviar(){

  console.log(  this.registerForm );
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



      // this._pacienteService.setPacientes( f.value )
      // .subscribe( (data: any) => {


      //   console.log(data);

      //   if( data.ok === true ) {

      //     swal(`Bienvenido ${data.paciente.nombrePaciente}`, 'El paciente agregado', 'success');

      //      f.reset();
      //      this.getTodoslosPacientes();
      //      this._modalService.ocultarModal();
      //      return;

      //   }else {
      //     swal('Algó ocurrio', 'Intenta de nuevo', 'error');
      //     console.log('Algo pasó', data );
      //   }
      //  } );
