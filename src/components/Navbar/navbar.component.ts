import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    DropdownModule,
    FormsModule,


  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'

})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
