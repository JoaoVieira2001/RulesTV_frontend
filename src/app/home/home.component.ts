import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/Navbar/navbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
