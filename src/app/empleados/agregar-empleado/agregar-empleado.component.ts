import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {
  constructor(private empladosService: EmpleadosService) {}

  empleado: IEmpleado = {
    num: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fecha_nacimiento: '',
    sexo: ''
  };

  agregarEmpleado(): void {
    console.log('Empleado antes de enviar:', this.empleado);
    
    this.empladosService.agregarEmpleado(this.empleado);
    this.empleado = {
      num: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fecha_nacimiento: '',
      sexo: ''
    };
  }



}
