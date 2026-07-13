import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registre',
  imports: [FormsModule, RouterLink],
  templateUrl: './registre.html',
  styleUrl: './registre.scss',
})
export class Registre {
  protected nombre = '';
  protected matricula = '';
  protected correo = '';
  protected carrera = '';
  protected contrasena = '';
  protected confirmacion = '';
  protected aceptaPoliticas = false;

  protected readonly carreras = [
    'TSU en Desarrollo de Software Multiplataforma',
    'TSU en Redes y Telecomunicaciones',
    'TSU en Mecatrónica',
    'TSU en Procesos Industriales',
    'Ingeniería en Desarrollo y Gestión de Software',
    'Ingeniería en Redes Inteligentes y Ciberseguridad',
    'Ingeniería en Mecatrónica',
    'Personal docente / administrativo',
  ];

  protected readonly verContrasena = signal(false);
  protected readonly cargando = signal(false);
  protected readonly error = signal('');
  protected readonly registrado = signal(false);

  alternarContrasena(): void {
    this.verContrasena.update((visible) => !visible);
  }

  registrarse(): void {
    if (this.cargando()) {
      return;
    }

    const correo = this.correo.trim();
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.nombre.trim() || !this.matricula.trim() || !correo || !this.carrera) {
      this.error.set('Completa todos los campos para crear tu cuenta.');
      return;
    }

    if (!patronCorreo.test(correo)) {
      this.error.set('El correo no tiene un formato válido. Ejemplo: nombre@uteq.edu.mx');
      return;
    }

    if (this.contrasena.length < 6) {
      this.error.set('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (this.contrasena !== this.confirmacion) {
      this.error.set('Las contraseñas no coinciden. Verifícalas e intenta de nuevo.');
      return;
    }

    if (!this.aceptaPoliticas) {
      this.error.set('Debes aceptar las Políticas de Uso para crear tu cuenta.');
      return;
    }

    this.error.set('');
    this.cargando.set(true);

    // Solo front-end: simulamos el alta de la cuenta.
    setTimeout(() => {
      this.cargando.set(false);
      this.registrado.set(true);
    }, 900);
  }
}
