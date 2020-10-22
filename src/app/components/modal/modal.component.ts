
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

  constructor() {
   }

  ngOnInit() {

  }



}
