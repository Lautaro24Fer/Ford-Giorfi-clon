import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarElement } from './navbar/dto/navbar-element.type';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navbarElements: NavbarElement[] = 
  [
    { text: "Vehículos 0KM", href: "/" }, 
    { text: "Vehículos usados", href: "#" }, 
    { text: "Plan Ovalo", href: "#" },
    { text: "Contáctanos", href: "#" }
  ]
}
