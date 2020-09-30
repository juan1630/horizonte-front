import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { CdkStepper } from '@angular/cdk/stepper'
import { NgStepperComponent  } from 'angular-ng-stepper'
import { StepperComponent } from 'src/app/components/stepper/stepper.component';

@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacientesComponent implements OnInit {

  public paises: [] =[];


  constructor() { }

  ngOnInit(): void {

  }

}
