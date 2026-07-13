import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SeccionPolitica {
  titulo: string;
  parrafos: string[];
  puntos?: string[];
}

@Component({
  selector: 'app-politicas',
  imports: [RouterLink],
  templateUrl: './politicas.html',
  styleUrl: './politicas.scss',
})
export class Politicas {
  protected readonly fechaActualizacion = '1 de julio de 2026';

  protected readonly secciones: SeccionPolitica[] = [
    {
      titulo: 'Uso de la plataforma',
      parrafos: [
        'La plataforma de la Biblioteca UTEQ es un servicio institucional dirigido a estudiantes, docentes y personal administrativo de la Universidad Tecnológica de Querétaro. El acceso se realiza mediante una cuenta personal e intransferible.',
      ],
      puntos: [
        'La cuenta se crea con la matrícula y el correo institucional vigente.',
        'Cada usuario es responsable de la actividad realizada con sus credenciales.',
        'Queda prohibido compartir la cuenta o utilizarla con fines distintos a los académicos.',
      ],
    },
    {
      titulo: 'Préstamos y devoluciones',
      parrafos: [
        'El préstamo de material bibliográfico está sujeto a la disponibilidad del acervo y al estatus del usuario dentro de la universidad.',
      ],
      puntos: [
        'Los estudiantes pueden mantener hasta 3 préstamos simultáneos por un periodo de 7 días naturales.',
        'Los docentes pueden mantener hasta 5 préstamos simultáneos por un periodo de 15 días naturales.',
        'Las renovaciones se realizan desde la plataforma, siempre que el material no tenga reservas pendientes.',
        'La devolución tardía suspende temporalmente el servicio de préstamo hasta regularizar la situación.',
      ],
    },
    {
      titulo: 'Reserva de salas de estudio',
      parrafos: [
        'Las salas de estudio individuales y grupales pueden reservarse en bloques de una hora, con un máximo de dos horas consecutivas por usuario al día. La reserva se cancela automáticamente tras 15 minutos de inasistencia.',
      ],
    },
    {
      titulo: 'Privacidad y protección de datos',
      parrafos: [
        'Los datos personales recabados (nombre, matrícula, correo institucional e historial de préstamos) se utilizan exclusivamente para la operación de los servicios bibliotecarios, conforme a la normatividad aplicable en materia de protección de datos personales.',
        'La Biblioteca UTEQ no comparte información personal con terceros y conserva los registros únicamente durante la vigencia de la relación académica del usuario con la universidad.',
      ],
    },
    {
      titulo: 'Cuidado del acervo',
      parrafos: [
        'El material prestado debe devolverse en las mismas condiciones en que fue entregado. El extravío o deterioro del material implica su reposición conforme al reglamento interno de la biblioteca.',
      ],
    },
    {
      titulo: 'Sanciones',
      parrafos: [
        'El incumplimiento de estas políticas puede derivar en la suspensión temporal o definitiva de los servicios de la biblioteca, según la gravedad de la falta y lo dispuesto por la Coordinación de Biblioteca.',
      ],
    },
    {
      titulo: 'Actualizaciones de estas políticas',
      parrafos: [
        'La Coordinación de Biblioteca podrá actualizar estas políticas para reflejar mejoras del servicio o cambios normativos. Las modificaciones se publicarán en esta página indicando la fecha de última actualización.',
      ],
    },
  ];
}
