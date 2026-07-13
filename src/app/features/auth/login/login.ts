import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  protected correo = '';
  protected contrasena = '';
  protected recordarme = false;

  protected readonly verContrasena = signal(false);
  protected readonly cargando = signal(false);
  protected readonly error = signal('');

  alternarContrasena(): void {
    this.verContrasena.update((visible) => !visible);
  }

  iniciarSesion(): void {
    if (this.cargando()) {
      return;
    }

    const correo = this.correo.trim();
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correo || !this.contrasena) {
      this.error.set('Ingresa tu correo y tu contraseña para continuar.');
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

    this.error.set('');
    this.cargando.set(true);

    // Solo front-end: simulamos la validación y redirigimos a la portada.
    setTimeout(() => {
      this.auth.iniciarSesion(correo);
      this.router.navigateByUrl('/home');
    }, 900);
  }
}
