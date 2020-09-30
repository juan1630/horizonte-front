import { Component, Input, OnInit } from '@angular/core';
import {  MatStepper  } from '@angular/material/stepper'
import { CodigoPostalService } from 'src/app/services/index.services';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  public estados: [];
  public paises:[];
  public municipios:[];
  public estado: string;
  public paquetes: [];


  constructor(
    private _ubicacionService: CodigoPostalService,
    public _pacienteService: PacienteService,
    public _paqueteService: PaqueteService
  ) { }

  ngOnInit(): void {


    this.obtenerEstados();
    this.obtenerPaquetes();

  }




  obtenerEstados(){
    this._ubicacionService.getEstado( )
    .subscribe((data:any) => {
        this.estados = data.response['estado']
      });
  }


  obtenerPaquetes(){
    this._paqueteService.getPaquetes()
    .subscribe(  (data:any) => {
      // console.log(data);
      this.paquetes = data;
      console.log(this.paquetes);
    });
  }


  ObtenerMunicipio(estado){
    this._ubicacionService.getMunicipios(estado)
    .subscribe(
      (data:any) => {
        // console.log(data);
        this.municipios = data['response']['municipios']
      });
  }



  buscarMunicipios() {
    // console.log(this.estado);
    this.ObtenerMunicipio( this.estado )
  }


  enviar( form  ){

    this._pacienteService.setPacientes(   form.value  )
    .subscribe((data) =>  console.log(data))

  }


}
