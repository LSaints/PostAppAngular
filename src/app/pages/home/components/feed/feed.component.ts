import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../../shared/title-bar/title-bar.component';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [TitleBarComponent, PostCardComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}
