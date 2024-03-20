import { Component } from '@angular/core';
import { SideBarComponent } from '../../../shared/side-bar/side-bar.component';
import { FeedComponent } from '../components/feed/feed.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SideBarComponent, FeedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
