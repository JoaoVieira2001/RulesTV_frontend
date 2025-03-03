import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/Navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../components/Footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
