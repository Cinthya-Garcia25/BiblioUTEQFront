import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/main/main').then((m) => m.Main),
    children: [
      {
        path: '',
        loadComponent: () => import('./Landing/inicio/inicio').then((m) => m.Inicio),
        title: 'Biblioteca UTEQ | Inicio',
      },
      {
        path: 'sobre-nosotros',
        loadComponent: () =>
          import('./Landing/sobrenosotros/sobrenosotros').then((m) => m.Sobrenosotros),
        title: 'Biblioteca UTEQ | Sobre Nosotros',
      },
      {
        path: 'contactos',
        loadComponent: () => import('./Landing/contactos/contactos').then((m) => m.Contactos),
        title: 'Biblioteca UTEQ | Contactos',
      },
      {
        path: 'politicas',
        loadComponent: () => import('./Landing/politicas/politicas').then((m) => m.Politicas),
        title: 'Biblioteca UTEQ | Políticas de Uso',
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
    title: 'Biblioteca UTEQ | Iniciar Sesión',
  },
  {
    path: 'registro',
    loadComponent: () => import('./features/auth/registre/registre').then((m) => m.Registre),
    title: 'Biblioteca UTEQ | Crear Cuenta',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Biblioteca UTEQ | Mi Biblioteca',
  },
  { path: '**', redirectTo: '' },
];
