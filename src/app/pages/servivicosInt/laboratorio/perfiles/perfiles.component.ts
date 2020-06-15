import { Component, OnInit } from '@angular/core';
import { PerfilesService } from 'src/app/services/laboratorio/perfiles/perfiles.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent implements OnInit {

  constructor(
    private _perfilesService: PerfilesService
  ) { }

  ngOnInit(): void {
    this.verDatosPerfiles();

  }



  verDatosPerfiles(){
    this._perfilesService.verPerfiles()
    .subscribe( (data:any) => {
      console.log(data);
    } )
  }

}
