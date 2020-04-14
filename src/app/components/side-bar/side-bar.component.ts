import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() nombreUsuario:string;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
