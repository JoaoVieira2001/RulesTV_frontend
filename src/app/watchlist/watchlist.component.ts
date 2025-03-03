import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/Navbar/navbar.component';
import {FooterComponent} from "../../components/Footer/footer.component";

@Component({
  selector: 'app-watchlist',
    imports: [
        NavbarComponent,
        FooterComponent,
    ],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {

}
