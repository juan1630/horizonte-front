import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAgregarMedicmento]'
})
export class AgregarMedicmentoDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
