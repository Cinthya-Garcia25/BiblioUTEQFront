import { Injectable, computed, signal } from '@angular/core';

export interface Usuario {
  nombre: string;
  correo: string;
}

/**
 * Autenticación simulada (solo front-end).
 * Mantiene la sesión en memoria mediante signals.
 */
@Injectable({ providedIn: 'root' })
export class Auth {
  private readonly _usuario = signal<Usuario | null>(null);

  readonly usuario = this._usuario.asReadonly();
  readonly estaAutenticado = computed(() => this._usuario() !== null);

  iniciarSesion(correo: string): Usuario {
    const nombre = this.nombreDesdeCorreo(correo);
    const usuario: Usuario = { nombre, correo };
    this._usuario.set(usuario);
    return usuario;
  }

  cerrarSesion(): void {
    this._usuario.set(null);
  }

  private nombreDesdeCorreo(correo: string): string {
    const local = correo.split('@')[0] ?? 'Usuario';
    return local
      .split(/[._-]+/)
      .filter(Boolean)
      .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
      .join(' ');
  }
}
