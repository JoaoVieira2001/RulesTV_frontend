import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/Navbar/navbar.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FooterComponent } from '../../components/Footer/footer.component';
import { CommonModule } from '@angular/common';
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    CommonModule,
    CarouselComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    RouterLink,
    CarouselCaptionComponent,
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: any[] = new Array(4).fill({ id: -1, src: '', title: '', subtitle: '' })

  ngOnInit():void{
    this.images[0] = {
      src: 'assets/images/DisneyPlus/A_THousand_Blows.png',
      title: "A Thousand Blows"
    };
    this.images[1] = {
      src: 'assets/images/DisneyPlus/Alien_Romulus.png',
      title: "Alien Romulus"
    };
    this.images[2] = {
      src: 'assets/images/DisneyPlus/Inside_Out_2.png',
      title: "Inside Out 2"
    };
    this.images[3] = {
      src: 'assets/images/DisneyPlus/Paradise.png',
      title: "Paradise"
    };
  }


}
