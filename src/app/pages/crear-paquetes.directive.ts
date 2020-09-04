import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCrearPaquetes]'
})
export class CrearPaquetesDirective {

  constructor(
    public vivewContainerRef: ViewContainerRef
  ) { }

}
