import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Sidebar } from '../../components/layouts/sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  protected readonly usuario = this.auth.usuario;
  protected readonly menuAbierto = signal(false);

  protected readonly iniciales = computed(() => {
    const nombre = this.usuario()?.nombre ?? 'Invitado';
    return nombre
      .split(' ')
      .slice(0, 2)
      .map((parte) => parte.charAt(0).toUpperCase())
      .join('');
  });

  protected readonly resumen = [
    { valor: '3', texto: 'Préstamos activos', icono: 'libro' },
    { valor: '1', texto: 'Reserva pendiente', icono: 'marcador' },
    { valor: '2', texto: 'Próximos vencimientos', icono: 'reloj' },
    { valor: '12', texto: 'Libros leídos este año', icono: 'estrella' },
  ] as const;

  protected readonly prestamos = [
    {
      titulo: 'Ingeniería de Software: Un Enfoque Práctico',
      autor: 'Roger S. Pressman',
      vence: '18 de julio de 2026',
      estado: 'En curso',
    },
    {
      titulo: 'Redes de Computadoras',
      autor: 'Andrew S. Tanenbaum',
      vence: '21 de julio de 2026',
      estado: 'En curso',
    },
    {
      titulo: 'Cálculo de Varias Variables',
      autor: 'James Stewart',
      vence: '12 de julio de 2026',
      estado: 'Por vencer',
    },
  ];

  protected readonly recomendados = [
    { titulo: 'Clean Code', autor: 'Robert C. Martin', categoria: 'Software' },
    { titulo: 'El Universo en tu Mano', autor: 'Christophe Galfard', categoria: 'Divulgación' },
    { titulo: 'Fundamentos de Bases de Datos', autor: 'Abraham Silberschatz', categoria: 'Software' },
    { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', categoria: 'Literatura' },
  ];

  constructor() {
    // Solo front-end: si no hay sesión activa, regresamos al login.
    if (!this.auth.estaAutenticado()) {
      this.router.navigateByUrl('/login');
    }
  }

  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }
}
