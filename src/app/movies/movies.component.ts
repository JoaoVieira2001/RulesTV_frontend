import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/Navbar/navbar.component';
import {FooterComponent} from "../../components/Footer/footer.component";

@Component({
  selector: 'app-movies',
    imports: [
        NavbarComponent,
        FooterComponent
    ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
