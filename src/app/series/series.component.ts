import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/Navbar/navbar.component";
import {FooterComponent} from "../../components/Footer/footer.component";

@Component({
  selector: 'app-series',
    imports: [
        NavbarComponent,
        FooterComponent,
    ],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

}
