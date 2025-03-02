import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/Navbar/navbar.component";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-series',
  imports: [
    NavbarComponent,
  ],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

}
