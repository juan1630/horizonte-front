import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechas'
})
export class FechasPipe implements PipeTransform {

  transform(value: any): string {
      let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
      let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

      let fecha = new Date(value)
      let horas:any = fecha.getHours()
      let minutos:any = fecha.getMinutes()
      let ampm
      if(horas >= 12){
        horas = horas - 12
        ampm = 'PM' 
      }else{
        ampm = 'AM'
      }

      if(horas == 0){ horas = 12 }
      if(minutos < 10){ minutos = '0' + minutos }

      let fechaConvertida = `${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}, ${horas}:${minutos} ${ampm}`
      
      return fechaConvertida
  }

}
