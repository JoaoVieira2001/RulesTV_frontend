import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/Navbar/navbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-watchlist',
  imports: [
    NavbarComponent,
  ],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {

}
