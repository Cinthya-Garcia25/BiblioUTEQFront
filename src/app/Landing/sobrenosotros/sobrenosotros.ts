import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobrenosotros',
  imports: [RouterLink],
  templateUrl: './sobrenosotros.html',
  styleUrl: './sobrenosotros.scss',
})
export class Sobrenosotros {
  protected readonly valores = [
    {
      titulo: 'Compromiso académico',
      descripcion:
        'Apoyamos la formación integral de la comunidad UTEQ con acervo actualizado y pertinente a cada carrera.',
    },
    {
      titulo: 'Inclusión',
      descripcion:
        'Garantizamos el acceso al conocimiento para todas y todos, con espacios y servicios accesibles.',
    },
    {
      titulo: 'Innovación',
      descripcion:
        'Modernizamos continuamente nuestros servicios con tecnología que simplifica la vida universitaria.',
    },
    {
      titulo: 'Servicio con calidez',
      descripcion:
        'Nuestro equipo acompaña cada consulta con atención personalizada, cercana y profesional.',
    },
  ];

  protected readonly lineaDeTiempo = [
    {
      anio: '1994',
      titulo: 'Nace la UTEQ',
      descripcion:
        'Se funda la Universidad Tecnológica de Querétaro y, con ella, su primer acervo bibliográfico.',
    },
    {
      anio: '2005',
      titulo: 'Nueva biblioteca central',
      descripcion:
        'Se inaugura el edificio de biblioteca con salas de lectura, cubículos y áreas de cómputo.',
    },
    {
      anio: '2016',
      titulo: 'Acervo digital',
      descripcion:
        'Se integran bases de datos académicas y colecciones electrónicas para consulta remota.',
    },
    {
      anio: '2026',
      titulo: 'Plataforma en línea',
      descripcion:
        'Lanzamos esta plataforma para gestionar préstamos, reservas y recursos desde cualquier lugar.',
    },
  ];

  protected readonly equipo = [
    {
      iniciales: 'LR',
      nombre: 'Lic. Laura Ramírez',
      puesto: 'Coordinadora de Biblioteca',
    },
    {
      iniciales: 'JM',
      nombre: 'Mtro. Jorge Martínez',
      puesto: 'Responsable de Acervo Digital',
    },
    {
      iniciales: 'AS',
      nombre: 'Lic. Ana Sánchez',
      puesto: 'Atención a Usuarios',
    },
    {
      iniciales: 'CG',
      nombre: 'Ing. Carlos Gómez',
      puesto: 'Soporte de Plataforma',
    },
  ];
}
