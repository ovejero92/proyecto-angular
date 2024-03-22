import { Component } from '@angular/core';
import { alumnos_comision_2513, alumnos_comision_1323 ,alumnos_comision_3513 } from '../db/export_bd_alumnos';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {
  bd_2513 = alumnos_comision_2513
  bd_1323 = alumnos_comision_1323
  bd_3513 = alumnos_comision_3513
  
  status: '3513' | '2513' | '1323' = '3513'
  onSelectChange(ev:Event){
  const elemento = ev.target as HTMLSelectElement
  const valor = elemento.value as '3513' | '2513' | '1323'
  this.status = valor
  }
}
