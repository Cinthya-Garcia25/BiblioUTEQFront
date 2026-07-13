import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  imports: [FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.scss',
})
export class Contactos {
  protected readonly horarios = [
    { dia: 'Lunes a Viernes', horario: '8:00 – 20:00 h' },
    { dia: 'Sábado', horario: '9:00 – 14:00 h' },
    { dia: 'Domingo', horario: 'Cerrado' },
    { dia: 'Catálogo en línea', horario: 'Disponible 24/7' },
  ];

  protected nombre = '';
  protected correo = '';
  protected asunto = 'Información general';
  protected mensaje = '';

  protected readonly enviado = signal(false);
  protected readonly error = signal('');

  enviarMensaje(): void {
    if (!this.nombre.trim() || !this.correo.trim() || !this.mensaje.trim()) {
      this.error.set('Por favor completa tu nombre, correo y mensaje.');
      this.enviado.set(false);
      return;
    }

    // Solo front-end: simulamos el envío del mensaje.
    this.error.set('');
    this.enviado.set(true);
    this.nombre = '';
    this.correo = '';
    this.asunto = 'Información general';
    this.mensaje = '';
  }
}
