import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pacientes'
})
export class PacientesPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const pacientes = [];
    for ( const paciente of value) {
      if(paciente.nombrePaciente.toLowerCase().indexOf(args.toLowerCase()) > - 1){
        pacientes.push(paciente);
      }
      
    }
    return pacientes;
  }

}
