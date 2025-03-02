import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/Navbar/navbar.component';

@Component({
  selector: 'app-movies',
  imports: [
    NavbarComponent
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
