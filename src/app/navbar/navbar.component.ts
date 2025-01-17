import { Component, Input } from '@angular/core';
import { NavbarElement } from './dto/navbar-element.type';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: "./navbar.component.css"
})
export class NavbarComponent {
  @Input() 
  elements: NavbarElement[] = [];
}
