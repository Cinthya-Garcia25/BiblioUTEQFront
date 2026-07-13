import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../layouts/header/header';
import { Footer } from '../layouts/footer/footer';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
