import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { NgStepperComponent  } from 'angular-ng-stepper'

@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacientesComponent implements OnInit {

  public paises: [] =[];

  constructor(
    private _countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }


  getCountries() {
    this._countriesService.getCountries()
    .subscribe(
      (data:any) => {
        // console.log(data);
        this.paises = data;
        console.log(this.paises);
      }
     )
  }

}
